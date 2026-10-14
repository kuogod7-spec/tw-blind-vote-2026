(() => {
  "use strict";

  const DATA = window.ELECTION_DATA;
  const STORE_KEY = "blind-vote-v1";
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
  const WEIGHTS = [
    { value: 0, label: "不在意" },
    { value: 1, label: "普通" },
    { value: 2, label: "重要" },
    { value: 3, label: "非常重要" },
  ];

  const topicById = Object.fromEntries(DATA.topics.map((t) => [t.id, t]));
  const raceById = Object.fromEntries(DATA.races.map((r) => [r.id, r]));

  // 為每則政見／經歷補上穩定 id，評分以此為 key
  for (const race of DATA.races) {
    for (const c of race.candidates) {
      c.platforms.forEach((p, i) => {
        p.kind = "platform";
        p.id ||= `${c.id}-p${i}`;
        p.feasibility ||= FEASIBILITY[p.id];
      });
      c.record.forEach((r, i) => { r.kind = "record"; r.id ||= `${c.id}-r${i}`; r.title ||= r.text; });
      c.past ||= [];
      c.past.forEach((role, j) => role.promises.forEach((p, i) => {
        Object.assign(p, { kind: "past", id: p.id || `${c.id}-h${j}-${i}`, detail: p.note, role });
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
    revealed: {},  // raceId -> true
    view: "topic",
    kind: "all",
    topics: [],    // 篩選中的議題，空陣列 = 全部
    q: "",
    unratedOnly: false,
  });

  let state = load();

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (saved && typeof saved === "object") {
        const s = { ...defaults(), ...saved };
        if (s.raceId && !raceById[s.raceId]) s.raceId = null;
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
    if (!order || order.length !== ids.length || !ids.every((id) => order.includes(id))) {
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

  const itemsOf = (c) => [...c.platforms, ...c.record];  // 可評分、列入計分的項目
  const pastOf = (c) => c.past.flatMap((role) => role.promises); // 過去政見，只呈現兌現狀態
  const shownOf = (c) => [...itemsOf(c), ...pastOf(c)];
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
    if (state.kind !== "all" && item.kind !== state.kind) return false;
    if (state.topics.length && !state.topics.includes(item.topic)) return false;
    if (state.unratedOnly && (item.kind === "past" || item.id in state.ratings)) return false;
    const q = state.q.trim().toLowerCase();
    if (q && !`${item.title} ${item.detail || ""}`.toLowerCase().includes(q)) return false;
    return true;
  }

  function score(c) {
    let num = 0, den = 0, rated = 0;
    const byTopic = {};
    for (const it of itemsOf(c)) {
      if (!(it.id in state.ratings)) continue;
      rated++;
      const w = state.weights[it.topic] ?? 1;
      const r = state.ratings[it.id];
      num += w * r;
      den += w;
      const t = (byTopic[it.topic] ||= { up: 0, mid: 0, down: 0 });
      if (r > 0) t.up++; else if (r < 0) t.down++; else t.mid++;
    }
    return {
      rated,
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
    app.innerHTML = views[state.step](race);
  }

  function viewRace() {
    const groups = {};
    for (const r of DATA.races) (groups[r.region] ||= []).push(r);
    return `
      <section class="intro"><div>
        <h2>怎麼使用</h2>
        <ol>
          <li>選擇你要投票的選區與職位。</li>
          <li>設定你在意哪些議題。</li>
          <li>閱讀匿名候選人的政見與過去做的事，逐條表達認同與否。</li>
          <li>開票：看哪位候選人最符合你的想法，最後才揭曉是誰。</li>
        </ol>
        <p class="muted">候選人以隨機字母代號呈現、順序隨機，與登記號次無關。</p>
      </div>${BALLOT_ART}</section>
      ${Object.entries(groups).map(([region, races]) => `
        <section class="card">
          <h3>${esc(region)}</h3>
          <div class="race-list">
            ${races.map((r) => `
              <button class="race-btn ${r.id === state.raceId ? "is-selected" : ""}" data-action="pick-race" data-id="${esc(r.id)}">
                <span><span>${esc(r.office)}</span>
                <span class="muted">${r.area ? `${esc(r.area)}・` : ""}${r.seats > 1 ? `應選 ${r.seats} 席・` : ""}${r.candidates.length} 位候選人</span></span>${STAMP}
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
                <button role="radio" aria-checked="${state.weights[t.id] === w.value}"
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
        <div class="seg" role="radiogroup" aria-label="檢視方式">
          <button role="radio" aria-checked="${state.view === "topic"}" data-action="view" data-value="topic">依議題比較</button>
          <button role="radio" aria-checked="${state.view === "candidate"}" data-action="view" data-value="candidate">依候選人</button>
        </div>
        <div class="seg" role="radiogroup" aria-label="內容類型">
          <button role="radio" aria-checked="${state.kind === "all"}" data-action="kind" data-value="all">全部</button>
          <button role="radio" aria-checked="${state.kind === "platform"}" data-action="kind" data-value="platform">政見</button>
          <button role="radio" aria-checked="${state.kind === "record"}" data-action="kind" data-value="record">做過的事</button>
          <button role="radio" aria-checked="${state.kind === "past"}" data-action="kind" data-value="past">過去政見兌現</button>
        </div>
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

    const body = state.view === "topic" ? browseByTopic(cands) : browseByCandidate(cands);
    return `
      <h2>${esc(race.region)} ${esc(race.office)}</h2>
      ${raceNote(race)}
      ${gapNote(cands)}
      ${feasNote(race)}
      ${toolbar}
      ${state.kind === "all" || state.kind === "past" ? pastPanel(cands) : ""}
      ${body}
      <div class="actions"><button class="primary" data-action="go" data-step="result">開票 →</button></div>
    `;
  }

  function browseByTopic(cands) {
    const topics = DATA.topics.filter((t) => !state.topics.length || state.topics.includes(t.id));
    const html = topics.map((t) => {
      const cols = cands.map((c) => ({ c, items: shownOf(c).filter((it) => it.topic === t.id && matches(it)) }));
      if (!cols.some((col) => col.items.length)) return "";
      // 候選人多時只並排有提出的人，其餘列成一行，避免版面被空欄塞滿
      const many = cands.length > 4;
      const shown = many ? cols.filter((col) => col.items.length) : cols;
      const absent = many ? cols.filter((col) => !col.items.length) : [];
      return `
        <section class="topic-block">
          <h3>${esc(t.label)}</h3>
          ${absent.length ? `<p class="absent">此議題未提出：${absent.map(({ c }) => esc(c.label)).join("、")}</p>` : ""}
          <div class="compare ${many ? "many" : ""}" style="--n:${cands.length}">
            ${shown.map(({ c, items }) => `
              <div class="col">
                <h4 class="cand-tag">${tag(c)}</h4>
                ${items.length ? items.map((it) => itemCard(it)).join("") : `<p class="empty">此議題未提出</p>`}
              </div>`).join("")}
          </div>
        </section>`;
    }).join("");
    return html || `<p class="empty">沒有符合條件的內容。</p>`;
  }

  function browseByCandidate(cands) {
    return cands.map((c) => {
      const items = shownOf(c).filter(matches);
      return `
        <section class="card">
          <h3 class="cand-tag">${tag(c)}</h3>
          ${items.length ? items.map((it) => itemCard(it, true)).join("") : `<p class="empty">沒有符合條件的內容。</p>`}
        </section>`;
    }).join("");
  }

  function itemCard(it, showTopic = false) {
    const r = state.ratings[it.id];
    return `
      <article class="item ${it.kind}">
        <div class="item-meta">
          <span class="kind">${{ platform: "政見", record: "做過的事", past: "過去政見" }[it.kind]}</span>
          ${it.kind === "past" ? `<span>${esc(it.role.role)} ${esc(it.role.period)}</span>` : ""}
          ${showTopic ? `<span class="topic">${esc(topicById[it.topic]?.label)}</span>` : ""}
        </div>
        <p class="item-title">${esc(it.title)}</p>
        ${it.detail ? `<p class="item-detail">${esc(it.detail)}</p>` : ""}
        ${it.feasibility ? feasBlock(it.feasibility) : ""}
        ${it.source && state.revealed[state.raceId] ? `<p class="item-src"><a href="${esc(it.source)}" target="_blank" rel="noopener noreferrer">資料來源</a></p>` : ""}
        ${it.kind === "past" ? `<span class="status s-${esc(it.status)}">${esc(STATUS[it.status] || it.status)}</span>` : `
        <div class="rate" role="radiogroup" aria-label="你的看法">
          ${RATINGS.map((o) => `
            <button role="radio" class="r${o.value}" aria-checked="${r === o.value}"
              data-action="rate" data-id="${esc(it.id)}" data-value="${o.value}">${o.value === 1 ? STAMP : ""}${o.label}</button>`).join("")}
        </div>`}
      </article>`;
  }

  function viewResult(race) {
    const cands = anonCandidates(race);
    const revealed = !!state.revealed[race.id];
    const rows = cands
      .map((c) => ({ c, s: score(c) }))
      .sort((a, b) => (b.s.pct ?? -1) - (a.s.pct ?? -1));
    const anyRated = rows.some((r) => r.s.rated);

    return `
      <h2>${esc(race.region)} ${esc(race.office)}：開票結果</h2>
      ${raceNote(race)}
      ${anyRated ? "" : `<p class="notice">你還沒有評分任何政見。<button class="link" data-action="go" data-step="browse">回去閱讀政見</button></p>`}
      ${race.seats > 1 ? `<p class="notice">這個選區應選 ${race.seats} 席，但每位選民只能投 1 票。排名第一的是最符合你想法的候選人。</p>` : ""}
      <p class="muted">分數是你對該候選人政見與經歷的加權認同度（認同 +1、普通 0、不認同 −1，乘上議題重要度後平均）。評分越多則結果越可靠。</p>
      <div class="results">
        ${rows.map(({ c, s }, i) => `
          <section class="card result ${i === 0 && s.pct != null ? "top" : ""}">
            <div class="result-head">
              <span class="rank">${s.pct == null ? "–" : `#${i + 1}`}</span>
              <h3 class="cand-tag">${tag(c)}</h3>
              ${i === 0 && s.pct != null ? `<span class="best-stamp">最合你意</span>` : ""}
              <span class="pct">${s.pct == null ? "尚未評分" : `${s.pct} 分`}</span>
            </div>
            <div class="bar big"><span style="width:${s.pct ?? 0}%"></span></div>
            <p class="muted">已評 ${s.rated} / ${s.total} 則</p>
            ${Object.keys(s.byTopic).length ? `
              <ul class="breakdown">
                ${Object.entries(s.byTopic).map(([t, v]) => `
                  <li><span>${esc(topicById[t]?.label)}</span>
                    <span>認同 ${v.up}・普通 ${v.mid}・不認同 ${v.down}</span></li>`).join("")}
              </ul>` : ""}
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
        ${revealed && f.sources?.length ? `<p class="item-src">評估依據：${f.sources.map((u, i) =>
          `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${i + 1}</a>`).join("、")}</p>` : ""}
      </div>`;
  }

  // 查無政見的候選人要明確標示，避免看起來像是漏掉
  function gapNote(cands) {
    const none = cands.filter((c) => !c.platforms.length);
    if (!none.length) return "";
    return `<p class="race-note">${none.map((c) => esc(c.label)).join("、")}：查無 2026 年公開政見${
      none.some((c) => !itemsOf(c).length && !c.past.length) ? "（部分候選人也查無任何經歷資料）" : ""
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

  // 過去職位與兌現紀錄：並排比較
  function pastPanel(cands) {
    if (!cands.some((c) => c.past.length)) return "";
    const revealed = state.revealed[state.raceId];
    return `
      <section class="topic-block past-panel">
        <h3>過去職位與政見兌現</h3>
        <p class="muted">過去政見僅供參考兌現紀錄，不列入配對分數。達成率若由候選人自己公布，會特別標示。</p>
        <div class="compare ${cands.length > 4 ? "many" : ""}" style="--n:${cands.length}">
          ${cands.map((c) => `
            <div class="col">
              <h4 class="cand-tag">${tag(c)}</h4>
              ${c.past.length ? c.past.map((role) => `
                <div class="past-role">
                  <p class="item-title">${esc(role.role)}<span class="muted">・${esc(role.period)}</span></p>
                  <p class="item-detail">${role.elected ? "民選職位" : role.result ? esc(role.result) : "非民選職位"}</p>
                  ${statusCounts(role.promises)}
                  ${(role.rates || []).map((rt) => `
                    <p class="rate-line"><span>${esc(rt.label)}</span><strong>${esc(rt.value)}</strong>
                      <span class="muted">${esc(rt.by)}</span>
                      ${rt.source && revealed ? `<a href="${esc(rt.source)}" target="_blank" rel="noopener noreferrer">來源</a>` : ""}</p>`).join("")}
                  ${role.note ? `<p class="item-detail">${esc(role.note)}</p>` : ""}
                </div>`).join("") : `<p class="empty">無過去職位紀錄</p>`}
            </div>`).join("")}
        </div>
      </section>`;
  }

  function statusCounts(promises) {
    if (!promises.length) return "";
    const n = {};
    for (const p of promises) n[p.status] = (n[p.status] || 0) + 1;
    return `<p class="status-row">${Object.keys(STATUS).filter((k) => n[k])
      .map((k) => `<span class="status s-${k}">${STATUS[k]} ${n[k]}</span>`).join("")}</p>`;
  }

  function pastSummary(c) {
    if (!c.past.length) return "";
    return `<div class="past-summary"><span class="muted">過去紀錄</span>
      ${c.past.map((role) => `<span>${esc(role.role)}（${esc(role.period)}）</span>${statusCounts(role.promises)}`).join("")}</div>`;
  }

  function raceNote(race) {
    const src = race.candidates.some((c) => shownOf(c).some((it) => it.source));
    if (!race.note && !src) return "";
    return `<p class="race-note">${esc(race.note || "")}${src && !state.revealed[race.id]
      ? " 每則都有資料出處，但網址可能透露身分，所以開票揭曉後才會顯示。" : ""}
      <a class="method-link" href="methodology.html">完整收錄標準 →</a></p>`;
  }

  function identity(c) {
    const id = c.identity || {};
    return `
      <div class="identity">
        <strong>${esc(id.name)}</strong>
        <span>${esc(id.party)}</span>
        <span>${id.number != null ? `號次 ${esc(id.number)}` : "號次待抽籤"}</span>
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
      case "view":
        return set({ view: value });
      case "kind":
        return set({ kind: value });
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
        return set({ ratings, order, revealed: { ...state.revealed, [race.id]: false } });
      }
    }
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
  const days = Math.ceil((new Date(`${DATA.meta.electionDate}T00:00:00+08:00`) - Date.now()) / 86400000);
  const cd = document.getElementById("countdown");
  if (days > 0) cd.innerHTML = `<small>距離投票日</small><strong>${days}</strong><small>天・${DATA.meta.electionDate.replaceAll("-", ".")}</small>`;
  else if (days === 0) cd.innerHTML = `<small>今天</small><strong>投票日</strong>`;
  cd.hidden = days < 0;
  document.getElementById("data-note").textContent = DATA.meta.isSample
    ? "⚠️ 目前顯示的是虛構的範例資料，僅供展示功能。"
    : `資料更新：${DATA.meta.updated}・投票日：${DATA.meta.electionDate}`;
  render();
})();
