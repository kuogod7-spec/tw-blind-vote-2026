(() => {
  "use strict";

  const DATA = window.ELECTION_DATA;
  const STORE_KEY = "blind-vote-v1";
  const ACK_KEY = "blind-vote-method-ack-v1";
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const RATINGS = [
    { value: 1, label: "認同" },
    { value: 0, label: "普通" },
    { value: -1, label: "不認同" },
  ];
  // 過去職位政見的兌現狀態
  const STATUS = {
    done: "已達成",
    partial: "部分達成",
    in_progress: "進行中",
    not_done: "未達成",
    unknown: "無法查證",
    not_applicable: "未當選・無從兌現",
  };
  // 可行性評估等級
  const FEAS = { high: "高", medium: "中", low: "低", unclear: "資訊不足" };
  const FEAS_ASPECTS = [["authority", "權責"], ["cost", "財源"], ["timeline", "期程"]];
  // 長期建設不以一任四年為標準，改用長期規劃指標
  const FEAS_ASPECTS_LONG = [["authority", "權責"], ["maturity", "規劃成熟度"], ["financing", "財務規劃"], ["schedule", "期程合理性"]];
  const FEASIBILITY = window.FEASIBILITY || {};
  // 可評則數低於此值時提醒資料不足；題目多寡會影響配對結果（見方法說明「設計依據」）
  const THIN_DATA = 5;
  const FEW_RATED = 3;
  const WEIGHTS = [
    { value: 0, label: "不在意" },
    { value: 1, label: "普通" },
    { value: 2, label: "重要" },
    { value: 3, label: "非常重要" },
  ];

  const topicById = Object.fromEntries(DATA.topics.map((t) => [t.id, t]));
  const raceById = Object.fromEntries(DATA.races.map((r) => [r.id, r]));

  function stableId(candidateId, kind, item) {
    const content = JSON.stringify([candidateId, kind, item.title || item.text || "", item.detail || item.note || ""]);
    // 兩組 32 位元雜湊，避免位置異動把舊評分套到不同內容。
    let a = 2166136261, b = 5381;
    for (const ch of content) {
      a = Math.imul(a ^ ch.codePointAt(0), 16777619);
      b = Math.imul(b, 33) ^ ch.codePointAt(0);
    }
    return `${candidateId}-${kind}-${(a >>> 0).toString(16)}${(b >>> 0).toString(16).padStart(8, "0")}`;
  }

  // 為每則政見／經歷補上穩定 id，評分以此為 key
  for (const race of DATA.races) {
    for (const c of race.candidates) {
      c.platforms.forEach((p, i) => {
        p.kind = "platform";
        p.id ||= stableId(c.id, "platform", p);
        p.feasibility ||= FEASIBILITY[`${c.id}-p${i}`] || FEASIBILITY[p.id];
      });
      c.record.forEach((r) => { r.kind = "record"; r.id ||= stableId(c.id, "record", r); r.title ||= r.text; });
      c.past ||= [];
      c.past.forEach((role) => role.promises.forEach((p) => {
        Object.assign(p, { kind: "past", id: p.id || stableId(c.id, "past", p), detail: p.note, role });
      }));
    }
  }

  // ---------- 狀態 ----------
  const defaults = () => ({
    step: "race",
    raceId: null,
    weights: Object.fromEntries(DATA.topics.map((t) => [t.id, 1])),
    ratings: {},   // itemId -> 1 | 0 | -1
    order: {},     // raceId -> 洗牌後的 candidate id 陣列
    itemOrder: {}, // raceId -> 洗牌後的項目 id 陣列（閱讀時不標示提出者）
    revealed: {},  // raceId -> true
    topics: [],    // 篩選中的議題，空陣列 = 全部
    q: "",
    unratedOnly: false,
  });

  let state = load();

  function isObject(value) { return value !== null && typeof value === "object" && !Array.isArray(value); }
  function validOrder(order, ids) {
    return Array.isArray(order) && order.length === ids.length && new Set(order).size === ids.length && ids.every((id) => order.includes(id));
  }

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (isObject(saved)) {
        const s = defaults();
        if (["race", "weights", "browse", "result"].includes(saved.step)) s.step = saved.step;
        if (typeof saved.raceId === "string" && Object.hasOwn(raceById, saved.raceId)) s.raceId = saved.raceId;
        const itemIds = new Set(DATA.races.flatMap((r) => r.candidates.flatMap((c) => c.platforms.map((p) => p.id))));
        if (isObject(saved.ratings)) s.ratings = Object.fromEntries(Object.entries(saved.ratings)
          .filter(([id, v]) => itemIds.has(id) && [-1, 0, 1].includes(v)));
        if (isObject(saved.weights)) for (const t of DATA.topics) {
          if ([0, 1, 2, 3].includes(saved.weights[t.id])) s.weights[t.id] = saved.weights[t.id];
        }
        for (const r of DATA.races) {
          const ids = r.candidates.map((c) => c.id);
          const items = r.candidates.flatMap((c) => c.platforms.map((p) => p.id));
          if (isObject(saved.order) && validOrder(saved.order[r.id], ids)) s.order[r.id] = saved.order[r.id];
          if (isObject(saved.itemOrder) && validOrder(saved.itemOrder[r.id], items)) s.itemOrder[r.id] = saved.itemOrder[r.id];
          if (isObject(saved.revealed) && typeof saved.revealed[r.id] === "boolean") s.revealed[r.id] = saved.revealed[r.id];
        }
        if (Array.isArray(saved.topics)) s.topics = [...new Set(saved.topics.filter((t) => typeof t === "string" && Object.hasOwn(topicById, t)))];
        if (typeof saved.q === "string") s.q = saved.q;
        if (typeof saved.unratedOnly === "boolean") s.unratedOnly = saved.unratedOnly;
        return s;
      }
    } catch (_) { /* 無痕模式等情況，直接用預設值 */ }
    return defaults();
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function set(patch) {
    state = { ...state, ...patch };
    save();
    render();
  }

  // ---------- 工具 ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // 取得目前選區洗牌後的候選人，附上匿名代號
  function anonCandidates(race) {
    let order = state.order[race.id];
    const ids = race.candidates.map((c) => c.id);
    if (!validOrder(order, ids)) {
      order = shuffle(ids);
      state.order = { ...state.order, [race.id]: order };
      save();
    }
    return order.map((id, i) => ({
      ...race.candidates.find((c) => c.id === id),
      label: `候選人 ${LETTERS[i]}`,
      letter: LETTERS[i],
    }));
  }

  // 選區內所有項目以固定的隨機順序排列，不標示提出者，避免用某則經歷認出代號後連帶認出其他政見
  function blindItems(race) {
    const items = race.candidates.flatMap(itemsOf);
    const byId = Object.fromEntries(items.map((it) => [it.id, it]));
    let order = state.itemOrder[race.id];
    if (!validOrder(order, items.map((it) => it.id))) {
      order = shuffle(items.map((it) => it.id));
      state.itemOrder = { ...state.itemOrder, [race.id]: order };
      save();
    }
    return order.map((id) => byId[id]);
  }

  const pastOf = (c) => c.past.flatMap((role) => role.promises);
  // 未當選者無從兌現，只呈現、不評分
  // 閱讀頁只放可評分的 2026 政見；做過的事與過去政見容易透露身分，也不易互相比較，在結果頁才顯示、不計分
  const itemsOf = (c) => c.platforms;
  const shownOf = (c) => [...itemsOf(c), ...c.record, ...pastOf(c)];
  const tag = (c) => `<span class="letter">${c.letter}</span>${esc(c.label)}`;
  const STAMP = `<span class="stamp" aria-hidden="true"></span>`;

  // 選票示意圖：三個候選人欄位，其中一格蓋了圈選章
  const BALLOT_ART = `
    <svg class="intro-art" viewBox="0 0 150 120" aria-hidden="true">
      <rect x="4" y="4" width="142" height="112" rx="3" fill="#fffdf8" stroke="#23211d" stroke-width="2"/>
      ${[0, 1, 2].map((i) => `
        <line x1="${4 + (i + 1) * 47.3}" y1="4" x2="${4 + (i + 1) * 47.3}" y2="116" stroke="#23211d" stroke-width="${i < 2 ? 1.5 : 0}"/>
        <rect x="${15 + i * 47.3}" y="14" width="24" height="24" fill="none" stroke="#23211d" stroke-width="1.5"/>
        <text x="${27 + i * 47.3}" y="31" text-anchor="middle" font-size="14" font-weight="800" fill="#23211d">${"ABC"[i]}</text>
        <rect x="${15 + i * 47.3}" y="46" width="24" height="5" fill="#e4ddcd"/>
        <rect x="${15 + i * 47.3}" y="56" width="18" height="5" fill="#e4ddcd"/>
        <text x="${27 + i * 47.3}" y="80" text-anchor="middle" font-size="16" font-weight="800" fill="#d9d2c2">?</text>`).join("")}
      <image href="assets/vote-stamp.svg" x="61" y="85" width="26" height="26" transform="rotate(-10 74 98)"/>
    </svg>`;

  function matches(item) {
    if (state.topics.length && !state.topics.includes(item.topic)) return false;
    if (state.unratedOnly && (item.id in state.ratings)) return false;
    const q = state.q.trim().toLowerCase();
    if (q && !`${item.title} ${item.detail || ""}`.toLowerCase().includes(q)) return false;
    return true;
  }

  function score(c) {
    let num = 0, den = 0, rated = 0, effectiveRated = 0;
    const byTopic = {};
    for (const it of itemsOf(c)) {
      if (!(it.id in state.ratings)) continue;
      rated++;
      const w = state.weights[it.topic] ?? 1;
      const r = state.ratings[it.id];
      if (w > 0) effectiveRated++;
      num += w * r;
      den += w;
      const t = (byTopic[it.topic] ||= { up: 0, mid: 0, down: 0 });
      if (r > 0) t.up++; else if (r < 0) t.down++; else t.mid++;
    }
    return {
      rated, effectiveRated,
      total: itemsOf(c).length,
      // 加權平均（-1 ~ 1）換算成 0 ~ 100
      pct: den ? Math.round(((num / den) + 1) * 50) : null,
      byTopic,
    };
  }

  // ---------- 畫面 ----------
  const app = document.getElementById("app");

  function render() {
    const race = raceById[state.raceId];
    if (!race && state.step !== "race") state.step = "race";

    document.querySelectorAll(".steps button").forEach((b) => {
      b.setAttribute("aria-current", b.dataset.step === state.step ? "step" : "false");
      b.disabled = b.dataset.step !== "race" && !race;
    });

    const views = { race: viewRace, weights: viewWeights, browse: viewBrowse, result: viewResult };
    const active = document.activeElement;
    const controls = [...app.querySelectorAll("[data-action]")];
    const focusData = active && app.contains(active) ? { ...active.dataset } : null;
    const nextIds = active?.dataset.action === "rate" ? controls.slice(controls.indexOf(active) + 1)
      .filter((el) => el.dataset.action === "rate" && el.dataset.id !== active.dataset.id).map((el) => el.dataset.id) : [];
    app.innerHTML = views[state.step](race);
    if (focusData) {
      const fresh = [...app.querySelectorAll("[data-action]")];
      const target = fresh.find((el) => Object.entries(focusData).every(([k, v]) => el.dataset[k] === v))
        || nextIds.map((id) => fresh.find((el) => el.dataset.action === "rate" && el.dataset.id === id && el.tabIndex === 0)).find(Boolean)
        || fresh.find((el) => el.dataset.action === "go");
      (target || app).focus({ preventScroll: true });
    }
  }

  // 縣市依地理順序排列（北北基桃竹），未列出的排在最後
  const REGION_ORDER = ["臺北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣"];
  const regionRank = (r) => (REGION_ORDER.includes(r) ? REGION_ORDER.indexOf(r) : REGION_ORDER.length);

  function viewRace() {
    const groups = {};
    for (const r of DATA.races) (groups[r.region] ||= []).push(r);
    return `
      <section class="intro"><div>
        <h2>怎麼使用</h2>
        <ol>
          <li>選擇你要投票的選區與職位。</li>
          <li>設定你在意哪些議題。</li>
          <li>閱讀 2026 政見，逐條表達認同與否。政見依議題分組、各組內隨機排列、不標示是誰提出的。</li>
          <li>配對結果：看哪位候選人最符合你的想法，並參考各候選人做過的事與過去政見，最後才揭曉是誰。</li>
        </ol>
        <p class="muted">結果頁以隨機字母代號呈現候選人，與登記號次無關。</p>
      </div>${BALLOT_ART}</section>
      <section class="method-card">
        <h2>使用前請先知道</h2>
        <ul>
          <li><strong>資料不完整。</strong>選舉公報尚未發布，許多議員候選人只查到少數主張，甚至完全查不到。</li>
          <li><strong>說得少就顯示得少。</strong>候選人沒說的細節，本站不替任何人補上，所以各人則數不同。</li>
          <li><strong>每一則都有出處。</strong>網址可能透露身分，揭曉身分後才會顯示。</li>
          <li><strong>本站不推薦任何人。</strong>配對分數完全由你自己的評分算出。</li>
        </ul>
        <a class="method-cta" href="methodology.html">閱讀完整的方法與資料說明<span aria-hidden="true">→</span></a>
      </section>
      ${Object.entries(groups).sort(([a], [b]) => regionRank(a) - regionRank(b)).map(([region, races]) => `
        <section class="card">
          <h3>${esc(region)}</h3>
          <div class="race-list">
            ${races.map((r) => `
              <button class="race-btn ${r.id === state.raceId ? "is-selected" : ""}" data-action="pick-race" data-id="${esc(r.id)}">
                <span><span>${esc(r.office)}</span>
                <span class="muted">${r.area ? `${esc(r.area)}・` : ""}${r.seats > 1 ? `應選 ${r.seats} 席・` : ""}${r.candidates.length} 位候選人${r.candidates.length <= (r.seats || 1) ? "・同額競選" : ""}</span></span>${STAMP}
              </button>`).join("")}
          </div>
        </section>`).join("")}
    `;
  }

  function viewWeights(race) {
    return `
      <h2>${esc(race.region)} ${esc(race.office)}：你在意哪些議題？</h2>
      <p class="muted">重要度會影響最後的配對分數。「不在意」的議題不列入計分。</p>
      <div class="weights">
        ${DATA.topics.map((t) => `
          <div class="weight-row">
            <span class="weight-label">${esc(t.label)}</span>
            <div class="seg" role="radiogroup" aria-label="${esc(t.label)} 重要度">
              ${WEIGHTS.map((w) => `
                <button role="radio" tabindex="${state.weights[t.id] === w.value ? 0 : -1}" aria-checked="${state.weights[t.id] === w.value}"
                  data-action="weight" data-topic="${t.id}" data-value="${w.value}">${w.label}</button>`).join("")}
            </div>
          </div>`).join("")}
      </div>
      <div class="actions"><button class="primary" data-action="go" data-step="browse">下一步：閱讀政見 →</button></div>
    `;
  }

  function viewBrowse(race) {
    const cands = anonCandidates(race);
    const allItems = cands.flatMap(itemsOf);
    const ratedCount = allItems.filter((it) => it.id in state.ratings).length;

    const toolbar = `
      <div class="toolbar">
        <input type="search" class="search" placeholder="搜尋關鍵字，例如：捷運、托育" value="${esc(state.q)}" data-action="search" aria-label="搜尋">
        <label class="check"><input type="checkbox" data-action="unrated" ${state.unratedOnly ? "checked" : ""}> 只看還沒評分的</label>
      </div>
      <div class="chips" aria-label="議題篩選">
        <button class="chip" aria-pressed="${state.topics.length === 0}" data-action="topic" data-value="">全部議題</button>
        ${DATA.topics.map((t) => `
          <button class="chip" aria-pressed="${state.topics.includes(t.id)}" data-action="topic" data-value="${t.id}">${esc(t.label)}</button>`).join("")}
      </div>
      <p class="progress">已評分 ${ratedCount} / ${allItems.length} 則
        <span class="bar"><span style="width:${allItems.length ? (ratedCount / allItems.length) * 100 : 0}%"></span></span>
      </p>`;

    return `
      <h2>${esc(race.region)} ${esc(race.office)}</h2>
      ${raceNote(race)}
      <p class="notice">為了做到全盲，這裡的每一則內容都不標示是哪位候選人提出的，依議題分組、各組內隨機排列。評分後到「配對結果」才會看到各候選人的配對結果。</p>
      ${gapNote(cands)}
      ${feasNote(race)}
      ${toolbar}
      ${browseBlind(race)}
      <div class="actions"><button class="primary" data-action="go" data-step="result">看配對結果 →</button></div>
    `;
  }

  // 閱讀頁只有 2026 政見，依議題分組
  const SECTIONS = [
    { kind: "platform", title: "2026 政見", note: "候選人這次選舉提出的主張。候選人做過的事與過去政見，在結果頁才會列出，不列入計分。" },
  ];

  function browseBlind(race) {
    const items = blindItems(race).filter(matches);
    const topics = DATA.topics.filter((t) => !state.topics.length || state.topics.includes(t.id));
    const html = SECTIONS.map((sec) => {
      const inSec = items.filter((it) => it.kind === sec.kind);
      if (!inSec.length) return "";
      return `
        <section class="kind-section kind-${sec.kind}">
          <h2 class="kind-title">${esc(sec.title)} <span class="muted">${inSec.length} 則</span></h2>
          <p class="muted">${esc(sec.note)}</p>
          ${topics.map((t) => {
            const list = inSec.filter((it) => it.topic === t.id);
            return list.length ? `
              <section class="topic-block">
                <h3>${esc(t.label)}</h3>
                <div class="stream">${list.map((it) => itemCard(it)).join("")}</div>
              </section>` : "";
          }).join("")}
        </section>`;
    }).join("");
    return html || `<p class="empty">沒有符合條件的內容。</p>`;
  }

  function sourceUrl(value) {
    if (typeof value !== "string") return "";
    try { const url = new URL(value); return ["http:", "https:"].includes(url.protocol) ? url.href : ""; }
    catch (_) { return ""; }
  }

  function rateLines(role) {
    const revealed = state.revealed[state.raceId];
    return (role.rates || []).map((rt) => `
      <p class="rate-line"><span>${esc(rt.label)}</span><strong>${esc(rt.value)}</strong>
        <span class="muted">${esc(rt.by)}</span>
        ${sourceUrl(rt.source) && revealed ? `<a href="${esc(sourceUrl(rt.source))}" target="_blank" rel="noopener noreferrer">來源</a>` : ""}</p>`).join("");
  }

  // 回報表單（Google 表單）。只帶內容雜湊與選區，不帶候選人代碼，避免從連結看出哪幾則是同一人的
  const REPORT_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSd2tlENBhbJDLEPKVuJ73XFdEEffJJ1iIil0zT04Gh-xb3Fww/viewform";
  function reportUrl(it) {
    const race = raceById[state.raceId];
    const params = new URLSearchParams({ usp: "pp_url", "entry.448687593": `${race.region} ${race.office}` });
    if (it) params.set("entry.1079289209", `${it.kind}-${it.id.split("-").pop()}`);
    return `${REPORT_FORM}?${params}`;
  }

  function itemCard(it) {
    const r = state.ratings[it.id];
    return `
      <article class="item ${it.kind}">
        <div class="item-meta">
          <span class="kind">${{ platform: "2026 政見", record: "做過的事", past: "過去政見" }[it.kind]}</span>
          ${it.kind === "past" ? `<span>${esc(it.role.role)} ${esc(it.role.period)}</span>` : ""}
        </div>
        <p class="item-title" id="title-${esc(it.id)}">${esc(it.title)}</p>
        ${it.detail ? `<p class="item-detail">${esc(it.detail)}</p>` : ""}
        ${it.feasibility ? feasBlock(it.feasibility) : ""}
        ${sourceUrl(it.source) && state.revealed[state.raceId] ? `<p class="item-src"><a href="${esc(sourceUrl(it.source))}" target="_blank" rel="noopener noreferrer">資料來源</a></p>` : ""}
        ${it.kind === "past" ? `<span class="status s-${esc(it.status)}">${esc(STATUS[it.status] || it.status)}</span>` : it.kind !== "platform" ? "" : `
        <div class="rate" role="radiogroup" aria-labelledby="title-${esc(it.id)}">
          ${RATINGS.map((o) => `
            <button role="radio" tabindex="${r === o.value || (r == null && o.value === 1) ? 0 : -1}" class="r${o.value}" aria-checked="${r === o.value}"
              data-action="rate" data-id="${esc(it.id)}" data-value="${o.value}">${o.value === 1 ? STAMP : ""}${o.label}</button>`).join("")}
        </div>`}
        <p class="item-report"><a href="${esc(reportUrl(it))}" target="_blank" rel="noopener noreferrer">回報這則有誤</a></p>
      </article>`;
  }

  function viewResult(race) {
    const cands = anonCandidates(race);
    const revealed = !!state.revealed[race.id];
    const rows = cands
      .map((c) => ({ c, s: score(c) }))
      .sort((a, b) => (b.s.pct ?? -1) - (a.s.pct ?? -1));
    rows.forEach((row, i) => {
      row.rank = i > 0 && row.s.pct === rows[i - 1].s.pct ? rows[i - 1].rank : i + 1;
    });
    const anyRated = rows.some((r) => r.s.rated);

    return `
      <h2>${esc(race.region)} ${esc(race.office)}：配對結果</h2>
      ${raceNote(race)}
      ${anyRated ? "" : `<p class="notice">你還沒有評分任何政見。<button class="link" data-action="go" data-step="browse">回去閱讀政見</button></p>`}
      ${race.seats > 1 ? `<p class="notice">這個選區應選 ${race.seats} 席，但每位選民只能投 1 票。排名第一的是最符合你想法的候選人。</p>` : ""}
      <p class="muted">「認同度」是你對該候選人 2026 政見的加權認同度（認同 +1、普通 0、不認同 −1，乘上議題重要度後平均）。下方「做過的事」與「過去政見與達成狀況」只供參考，不算分、不影響排名：認同度高的人過去做了什麼、做到多少，由你自己權衡。評分越多，結果越可靠。各候選人的公開資料多寡不同，可評的則數也不同；則數少的人，分數容易被少數幾則左右。</p>
      <div class="results">
        ${rows.map(({ c, s, rank }) => `
          <section class="card result ${s.pct != null && s.pct === rows[0].s.pct ? "top" : ""}">
            <div class="result-head">
              <span class="rank">${s.pct == null ? "–" : `#${rank}`}</span>
              <h3 class="cand-tag">${tag(c)}</h3>
              ${s.pct != null && s.pct === rows[0].s.pct ? `<span class="best-stamp">最合你意</span>` : ""}
              <span class="pct">${!s.total ? "無資料可評" : s.pct == null ? (s.rated ? "無有效權重" : "尚未評分") : `認同度 ${s.pct}`}</span>
            </div>
            <div class="bar big"><span style="width:${s.pct ?? 0}%"></span></div>
            <p class="muted">可評 ${s.total} 則・已評 ${s.rated} 則
              ${s.total && s.total < THIN_DATA ? `<span class="warn">資料不足，分數僅供參考</span>` : ""}
              ${s.pct != null && s.effectiveRated < FEW_RATED ? `<span class="warn">評分太少，分數不穩定</span>` : ""}</p>
            ${Object.keys(s.byTopic).length ? `
              <ul class="breakdown">
                ${Object.entries(s.byTopic).map(([t, v]) => `
                  <li><span>${esc(topicById[t]?.label)}</span>
                    <span>認同 ${v.up}・普通 ${v.mid}・不認同 ${v.down}</span></li>`).join("")}
              </ul>` : ""}
            ${recordSummary(c)}
            ${pastSummary(c)}
            ${revealed ? identity(c) : ""}
          </section>`).join("")}
      </div>
      <div class="reveal-box">
        ${revealed
          ? `<button data-action="hide">重新隱藏身分</button>`
          : `<p>確定好你的判斷了嗎？揭曉後就會看到候選人的姓名、黨籍與號次。</p>
             <details><summary class="primary">${STAMP.replace('class="stamp"', 'class="stamp on-dark"')}揭曉候選人身分</summary>
               <p>揭曉後可能會影響你的判斷。建議先把上面的排名記下來。</p>
               <button class="primary" data-action="reveal">我確定，揭曉</button>
             </details>`}
        <button data-action="reshuffle">重新洗牌代號並清除此選區評分</button>
      </div>
    `;
  }

  function feasBlock(f) {
    const revealed = state.revealed[state.raceId];
    const long = f.track === "long";
    return `
      <div class="feas ${long ? "long" : ""}">
        <p class="feas-head">${long ? "長期建設評估" : "可行性評估"} <span class="lv lv-${esc(f.level)}">${esc(FEAS[f.level] || f.level)}</span>
          <span class="feas-aspects">${(long ? FEAS_ASPECTS_LONG : FEAS_ASPECTS).map(([k, label]) =>
            `<span class="lv-sm lv-${esc(f[k])}">${label} ${esc(FEAS[f[k]] || "–")}</span>`).join("")}</span></p>
        ${long ? `<p class="feas-long"><span>目前階段：${esc(f.stage)}</span><span>合理期程：${esc(f.horizon)}</span></p>` : ""}
        <p class="feas-reason">${esc(f.reason)}</p>
        ${revealed && f.sources?.length ? `<p class="item-src">評估依據：${f.sources.filter(sourceUrl).map((u, i) =>
          `<a href="${esc(sourceUrl(u))}" target="_blank" rel="noopener noreferrer">${i + 1}</a>`).join("、")}</p>` : ""}
      </div>`;
  }

  // 查無政見的候選人要明確標示，避免看起來像是漏掉
  function gapNote(cands) {
    const none = cands.filter((c) => !c.platforms.length);
    if (!none.length) return "";
    return `<p class="race-note">${cands.length} 位候選人中，有 ${none.length} 位查無 2026 年公開政見${
      none.some((c) => !c.record.length && !c.past.length) ? "（部分候選人也查無任何經歷資料）" : ""
    }。這代表我們找不到公開資料，不代表候選人沒有主張；2026 年選舉公報發布後會再更新。</p>`;
  }

  function feasNote(race) {
    if (!race.candidates.some((c) => c.platforms.some((p) => p.feasibility))) return "";
    return `
      <details class="method">
        <summary>可行性評估怎麼做的？</summary>
        <p>由本站以同一套標準評估，<strong>評估時不知道政見是誰提出的</strong>（政見匿名、順序打亂）。這不是專家意見，請當作參考，也不列入配對分數。<a class="method-link" href="methodology.html#feasibility">詳細說明 →</a></p>
        <ul>
          <li><strong>權責</strong>：市府能自行推動（高）、需中央或跨縣市配合（中）、屬中央權限或市府無權（低）。</li>
          <li><strong>財源</strong>：估計經費占市府總預算的比重，以及有沒有說明財源。</li>
          <li><strong>期程</strong>：一任四年內能否完成或看到成效，有無用地、環評等關卡與先例。</li>
          <li><strong>資訊不足</strong>：政見內容太簡略，無法評估。</li>
        </ul>
        <p><strong>長期建設另外評估。</strong>捷運、鐵路、大型場館、產業園區、大量社宅等需多年興建的建設，不以「一任四年能否完成」為標準，改看：</p>
        <ul>
          <li><strong>規劃成熟度</strong>：只有構想（低）、已有正式可行性研究或列入政府計畫（中）、已核定或施工／招商中（高）。</li>
          <li><strong>財務規劃</strong>：有沒有經費估算，以及中央補助、自償率、土地開發、BOT 等財源機制。</li>
          <li><strong>期程合理性</strong>：提出的期程與同類工程的一般期程相比是否合理，並列出合理預估期程。</li>
        </ul>
      </details>`;
  }

  function statusCounts(promises) {
    if (!promises.length) return "";
    const n = {};
    for (const p of promises) n[p.status] = (n[p.status] || 0) + 1;
    return `<p class="status-row">${Object.keys(STATUS).filter((k) => n[k])
      .map((k) => `<span class="status s-${k}">${STATUS[k]} ${n[k]}</span>`).join("")}</p>`;
  }

  // 在結果頁才顯示做過的事，作為參考，不計分
  function recordSummary(c) {
    if (!c.record.length) return `<div class="past-summary"><span class="muted">做過的事</span><span>查無資料</span></div>`;
    return `
      <details class="past-detail">
        <summary>查看做過的事（${c.record.length} 則）</summary>
        <div class="stream">${c.record.map((it) => itemCard(it)).join("")}</div>
      </details>`;
  }

  // 在結果頁才顯示過去政見與達成狀況，作為「說到做到」的參考（只列件數，「無法查證」多時算成比例會誤導）
  function pastSummary(c) {
    if (!c.past.length) return `<div class="past-summary"><span class="muted">過去政見</span><span>無過去紀錄</span></div>`;
    const promises = pastOf(c);
    return `
      <div class="past-summary"><span class="muted">過去政見</span>
        ${c.past.map((role) => `<span>${esc(role.role)}（${esc(role.period)}）</span>${statusCounts(role.promises)}`).join("")}</div>
      <details class="past-detail">
        <summary>查看過去政見與達成狀況${promises.length ? `（${promises.length} 則）` : ""}</summary>
        ${c.past.map((role) => `
          <div class="past-role">
            <p class="item-title">${esc(role.role)}<span class="muted">・${esc(role.period)}・${role.elected ? "民選職位" : role.result ? esc(role.result) : "非民選職位"}</span></p>
            ${rateLines(role)}
            ${role.note ? `<p class="item-detail">${esc(role.note)}</p>` : ""}
            ${role.promises.length ? `<div class="stream">${role.promises.map((it) => itemCard(it)).join("")}</div>` : ""}
          </div>`).join("")}
      </details>`;
  }

  function raceNote(race) {
    const src = race.candidates.some((c) => shownOf(c).some((it) => it.source));
    if (!race.note && !src) return "";
    return `<p class="race-note">${esc(race.note || "")}${src && !state.revealed[race.id]
      ? " 每則都有資料出處，但網址可能透露身分，所以揭曉身分後才會顯示。" : ""}
      <a class="method-link" href="methodology.html">完整收錄標準 →</a></p>`;
  }

  function identity(c) {
    const id = c.identity || {};
    return `
      <div class="identity">
        <strong>${esc(id.name)}</strong>
        <span>${esc(id.party)}</span>
        <span>${id.number != null ? `號次 ${esc(id.number)}` : "號次待補"}</span>
      </div>`;
  }

  // ---------- 事件 ----------
  document.addEventListener("click", (e) => {
    const stepBtn = e.target.closest(".steps button");
    if (stepBtn && !stepBtn.disabled) return go(stepBtn.dataset.step);

    const el = e.target.closest("[data-action]");
    if (!el || el.tagName === "INPUT") return;
    const { action, value } = el.dataset;
    const race = raceById[state.raceId];

    switch (action) {
      case "pick-race":
        state.raceId = el.dataset.id;
        return go("weights");
      case "go":
        return go(el.dataset.step);
      case "weight":
        return set({ weights: { ...state.weights, [el.dataset.topic]: Number(value) } });
      case "topic": {
        if (!value) return set({ topics: [] });
        const has = state.topics.includes(value);
        return set({ topics: has ? state.topics.filter((t) => t !== value) : [...state.topics, value] });
      }
      case "rate": {
        const ratings = { ...state.ratings };
        const v = Number(value);
        if (ratings[el.dataset.id] === v) delete ratings[el.dataset.id]; // 再按一次取消
        else ratings[el.dataset.id] = v;
        return keepScroll(() => set({ ratings }));
      }
      case "reveal":
        return set({ revealed: { ...state.revealed, [race.id]: true } });
      case "hide":
        return set({ revealed: { ...state.revealed, [race.id]: false } });
      case "reshuffle": {
        const ids = new Set(race.candidates.flatMap((c) => itemsOf(c).map((it) => it.id)));
        const ratings = Object.fromEntries(Object.entries(state.ratings).filter(([k]) => !ids.has(k)));
        const order = { ...state.order };
        delete order[race.id];
        const itemOrder = { ...state.itemOrder };
        delete itemOrder[race.id];
        return set({ ratings, order, itemOrder, revealed: { ...state.revealed, [race.id]: false } });
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    const radio = e.target.closest('[role="radio"]');
    if (!radio || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const radios = [...radio.parentElement.querySelectorAll('[role="radio"]')];
    const index = radios.indexOf(radio);
    const next = e.key === "Home" ? 0 : e.key === "End" ? radios.length - 1
      : (index + (["ArrowLeft", "ArrowUp"].includes(e.key) ? -1 : 1) + radios.length) % radios.length;
    radios[next].focus();
    if (radios[next].getAttribute("aria-checked") !== "true") radios[next].click();
  });

  document.addEventListener("input", (e) => {
    if (e.target.dataset.action !== "search") return;
    state.q = e.target.value;
    save();
    clearTimeout(e.target._t);
    e.target._t = setTimeout(() => {
      keepScroll(render);
      const input = app.querySelector(".search");
      if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
    }, 200);
  });

  document.addEventListener("change", (e) => {
    if (e.target.dataset.action === "unrated") set({ unratedOnly: e.target.checked });
  });

  function go(step) {
    set({ step });
    window.scrollTo({ top: 0 });
    app.focus({ preventScroll: true });
  }

  function keepScroll(fn) {
    const y = window.scrollY;
    fn();
    window.scrollTo({ top: y });
  }

  // ---------- 啟動 ----------
  const electionDate = DATA.meta.electionDate;
  const validDate = typeof electionDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(electionDate)
    && Number.isFinite(Date.parse(`${electionDate}T00:00:00Z`))
    && new Date(`${electionDate}T00:00:00Z`).toISOString().slice(0, 10) === electionDate;
  const days = validDate ? Math.ceil((new Date(`${electionDate}T00:00:00+08:00`) - Date.now()) / 86400000) : NaN;
  const cd = document.getElementById("countdown");
  cd.replaceChildren();
  const countdownText = days > 0 ? [["small", "距離投票日"], ["strong", days], ["small", `天・${electionDate.replaceAll("-", ".")}`]]
    : days === 0 ? [["small", "今天"], ["strong", "投票日"]] : [];
  for (const [tagName, text] of countdownText) {
    const el = document.createElement(tagName);
    el.textContent = text;
    cd.append(el);
  }
  cd.hidden = !Number.isFinite(days) || days < 0;
  document.getElementById("data-note").textContent = DATA.meta.isSample
    ? "⚠️ 目前顯示的是虛構的範例資料，僅供展示功能。"
    : `資料更新：${DATA.meta.updated}・投票日：${DATA.meta.electionDate}`;
  render();

  // 第一次進站先看資料限制；只能按「我知道了」或前往說明頁離開
  const dlg = document.getElementById("method-dialog");
  let acked = false;
  try { acked = localStorage.getItem(ACK_KEY) === "1"; } catch (_) {}
  if (dlg && !acked && typeof dlg.showModal === "function") {
    const ack = () => { try { localStorage.setItem(ACK_KEY, "1"); } catch (_) {} };
    dlg.addEventListener("cancel", (e) => e.preventDefault());
    document.getElementById("method-dialog-ok").addEventListener("click", () => { ack(); dlg.close(); });
    dlg.querySelector(".method-cta").addEventListener("click", ack);
    dlg.showModal();
  }
})();
