#!/usr/bin/env node
// What a genuinely random tic-tac-toe scratch ticket would look like: 72 cells,
// numbers 1..39, how many "singletons" (numbers appearing exactly once) and how
// many three-singleton lines appear by chance. Companion to the Journal piece on
// Mohan Srivastava. No dependencies.  node singleton-ticket.mjs [tickets]
const N = Number(process.argv[2] || 100000);
const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let singles = 0, lines = 0, withLine = 0;
for (let n = 0; n < N; n++) {
  const t = Array.from({ length: 72 }, () => 1 + Math.floor(Math.random() * 39));
  const c = new Map(); for (const x of t) c.set(x, (c.get(x) || 0) + 1);
  const single = t.map((x) => c.get(x) === 1);
  singles += [...c.values()].filter((v) => v === 1).length;
  let l = 0;
  for (let b = 0; b < 8; b++) for (const L of LINES) if (L.every((i) => single[b * 9 + i])) l++;
  lines += l; if (l) withLine++;
}
console.log(`tickets ${N}: singletons/ticket ${(singles / N).toFixed(2)} (theory 72·(38/39)^71 = ${(72 * (38 / 39) ** 71).toFixed(2)}), three-singleton lines/ticket ${(lines / N).toFixed(3)}, tickets with ≥1 line ${(100 * withLine / N).toFixed(1)}%`);
