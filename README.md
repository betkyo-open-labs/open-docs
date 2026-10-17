# Betkyo — open docs

Betkyo is a crypto casino built around in-house provably fair original games — dice, limbo, crash, mines, plinko, keno, roulette, baccarat, blackjack and a set of Japanese-themed originals. Two things make it unusual, and both are documented here so they can be checked rather than believed:

- **Every house edge is published and derived from the engine source.** The Journal prints a game figure only after reading it from the code that pays it. [house-edge.md](house-edge.md) is the summary table.
- **Every round can be recomputed.** Results are a public function of a committed server seed, your client seed and a nonce; the [verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) re-runs any round after the seed is revealed. This proves results, not custody — see the glossary.

Betkyo is operated by Shirokane Interactive, holds no gambling licence at present, and lists its restricted jurisdictions (including the US, UK, France, the Netherlands, Australia and Japan) in its Terms. 18+ only. This repository is documentation, not a promotion: no bonuses, no sign-up links.

## Contents

| Section | What it is |
|---|---|
| [games/](games/) | One spec sheet per original: rules, how a round works, verification, odds articles, datasets, FAQ |
| [house-edge.md](house-edge.md) | The house edge of every game and what it costs per hour |
| [journal/](journal/README.md) | Summaries of every Journal article by category, plus the list of revised articles |
| [incidents.md](incidents.md) | Famous runs, heists and cons from the public record, with the math |
| [glossary.md](glossary.md) | Casino maths and provably-fair terms |
| [faq/faq.json](faq/faq.json) | Every FAQ pair from the guides and articles, machine-readable (CC BY 4.0) |
| [llms.txt](llms.txt) | A compact index for answer engines |
| [shorts/transcripts.md](shorts/transcripts.md) | Narration of the YouTube Shorts |
| [simulations/](simulations/) | Dependency-free scripts behind article figures |

## Games

| Game | One line | Odds articles |
|---|---|---|
| [Dice](games/dice.md) | Dice is the purest expression of a crypto original: pick a target, roll under it, get paid. | 8 |
| [Plinko](games/plinko.md) | Drop a ball down a pegboard and watch it bounce into a multiplier bucket. | 1 |
| [RPS](games/rps.md) | Rock, paper, scissors against the dealer — the game everyone already knows, with a bet on it. | 1 |
| [Hilo](games/hilo.md) | Call the next card higher or lower, and keep calling — every correct call multiplies your pot, and the multiplier itself never stops climbing.. | 3 |
| [Baccarat](games/baccarat.md) | The table classic: bet Player or Banker, closest to nine wins. | 2 |
| [Fugu](games/fugu.md) | A minefield with a Tokyo menu: reveal tiles, dodge the fugu, and watch your multiplier climb with every safe pick.. | 1 |
| [Limbo](games/limbo.md) | Name your own multiplier — anything up to ×10,000 — then see if the round’s result clears it. | 8 |
| [Chinchiro](games/chinchiro.md) | The izakaya dice duel: three dice against the dealer, best combination wins, top hands pay up to ×6.. | 3 |
| [Keno](games/keno.md) | Pick up to 10 numbers out of 40, then watch ten balls drop. | 3 |
| [Pagoda](games/pagoda.md) | Climb a nine-floor pagoda one safe panel at a time. | 4 |
| [Wheel](games/wheel.md) | One wheel, one spin, everyone on it together — every player rides the same shared result. | 3 |
| [Double](games/double.md) | Call the colour of the next roll. | 1 |
| [Crash](games/crash.md) | A multiplier curve climbs from ×1 and can bust at any moment — cash out before it does. | 6 |
| [Dragon Road](games/dragon-road.md) | Ride win streaks across a wall of about 2,000 live baccarat tables. | 2 |
| [BTC ×1000](games/btc-x1000.md) | Go long or short on the live Bitcoin price with up to 1000× leverage. | 3 |
| [Tairyō](games/tairyo.md) | Tairyō (大漁 — “big catch”) is Betkyo’s fishing slot: 5 reels, 3 rows, 10 lines, where collector wilds gather the koi values on screen. | 3 |
| [Omikuji](games/omikuji.md) | A shrine fortune slip you scratch open: match three symbols and the slip pays, up to ×100.. | 2 |
| [Fukubukuro](games/fukubukuro.md) | Lucky bags, Betkyo style: every bag pays something — the question is how much. | 2 |
| [Roulette](games/roulette.md) | European single-zero roulette — one green pocket, not two, which is the version you want. | 4 |
| [Sic Bo](games/sic-bo.md) | Three dice, one shake, a whole table of ways to bet it. | 3 |
| [Bingo](games/bingo.md) | 38 balls, one card, seven pay lines — complete lines to win, with the top pattern paying ×500.. | 4 |
| [Hanabi](games/hanabi.md) | A summer-festival slot where the reels end in fireworks — line wins build toward a top payout of ×2,000.. | 2 |
| [Koban Flip](games/koban-flip.md) | Call the koban coin — heads or tails — and let it ride. | 4 |
| [Video Poker](games/video-poker.md) | Jacks or Better, the canonical video poker: five cards, one draw, paytable poker hands. | 3 |
| [Casino Holdem](games/casino-holdem.md) | Hold’em against the house: ante up, see the flop, then decide to call or fold. | 1 |
| [Blackjack](games/blackjack.md) | The table game: beat the dealer to 21 without going over. | 7 |
| [Andar Bahar](games/andar-bahar.md) | The subcontinent’s fastest card game: a joker is cut, then cards race to Andar and Bahar — first side to match the joker wins. | 1 |

## Related repositories

- [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) — recompute a round (MIT, npm `betkyo-provably-fair-verifier`)
- [odds-data](https://github.com/betkyo-open-labs/odds-data) — paytables and distributions as JSON/CSV (CC BY 4.0, Zenodo DOI)
- [odds-derivations](https://github.com/betkyo-open-labs/odds-derivations) — the scripts that turn tables into returns
- [awesome-provably-fair](https://github.com/betkyo-open-labs/awesome-provably-fair) — curated reading on verifiable randomness

## Licence

Text and data in this repository: CC BY 4.0. Cite as "Betkyo Open Labs, open-docs" with the file link.


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
