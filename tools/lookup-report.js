// 用回報表單的「內容編號」（例如 platform-d061adfcb4a2d6bc）找回是哪一則內容。
// 用法：node tools/lookup-report.js platform-d061adfcb4a2d6bc [record-…]
// 雜湊算法必須與 app.js 的 stableId 相同。
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
global.window = {};
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const m of html.matchAll(/src="(data\/[^"]+)"/g)) require(path.join(root, m[1]));

function stableId(candidateId, kind, item) {
  const content = JSON.stringify([candidateId, kind, item.title || item.text || "", item.detail || item.note || ""]);
  let a = 2166136261, b = 5381;
  for (const ch of content) {
    a = Math.imul(a ^ ch.codePointAt(0), 16777619);
    b = Math.imul(b, 33) ^ ch.codePointAt(0);
  }
  return `${candidateId}-${kind}-${(a >>> 0).toString(16)}${(b >>> 0).toString(16).padStart(8, "0")}`;
}

const index = {};
for (const race of window.ELECTION_DATA.races) {
  for (const c of race.candidates) {
    const items = [
      ...c.platforms.map((it, i) => ["platform", it, `platforms[${i}]`]),
      ...c.record.map((it, i) => ["record", it, `record[${i}]`]),
      ...(c.past || []).flatMap((role, j) => role.promises.map((it, i) => ["past", it, `past[${j}].promises[${i}]`])),
    ];
    for (const [kind, it, where] of items) {
      const code = `${kind}-${stableId(c.id, kind, it).split("-").pop()}`;
      index[code] = { race: race.id, candidate: c.id, name: c.identity?.name, where, title: it.title || it.text, source: it.source };
    }
  }
}

for (const code of process.argv.slice(2)) console.log(code, "→", index[code.trim()] || "找不到（內容可能已修改或刪除）");
