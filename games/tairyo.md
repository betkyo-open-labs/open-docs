# Tairyō

Tairyō (大漁 — “big catch”) is Betkyo’s fishing slot: 5 reels, 3 rows, 10 lines, where collector wilds gather the koi values on screen. Free spins can pay up to ×2,100.
The chase is the free-spin round: three scatters start 10 free spins, and there the collector wilds do their best work — every three wilds collected add 10 more spins and raise the collection multiplier.

## How a round works

1. Set your bet per spin and spin the 5×3 reels.
2. Line hits pay on the 10 lines; koi carry bonus values on the reels.
3. Land 3 scatters (they appear on reels 2–4) to trigger 10 free spins — collector wilds scoop every koi value on screen, each 3 wilds collected add 10 spins and step the multiplier ×2, ×3, ×10, and a free-spin round pays up to ×2,100.

## Verify a round

Every Tairyō round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Tairyō, priced: 29% from the reels, 67% from one spin in 386](https://betkyo.com/en/blog/tairyo-priced-29-percent-from-the-reels-67-from-one-spin-in-386/) — Tairyō returns about 96% of what is staked on it. Less than a third of that comes from the reels you watch spin; the rest arrives in a free-spin round that starts once in 386 spins. Here is the whole return taken apart — which symbols pay, how often the feature comes, what it is worth, and what buying it costs.
- [Designing Tairyō: what a slot’s paytable is actually promising you](https://betkyo.com/en/blog/designing-tairyo-what-a-paytable-promises/) — A slot advertises its top prize and hides everything that decides whether you ever see it. Here is our own reel game with the lid off — the paytable, the ten lines, the cap, and why the biggest number on the screen is the least informative one.
- [Designing Hanabi: a slot whose free spins build ×1, ×2, ×3, ×5 — and what its source file admits](https://betkyo.com/en/blog/designing-hanabi-the-firework-ladder/) — Most slots hide their reel weights. Hanabi’s are nine numbers in a source file, and its header states the return, the hit rate and the free-spin frequency it was tuned to. This is the design note behind the festival reels: how the symbols are weighted, why the feature climbs like a firework, and how far the paytable can be checked by hand.


## FAQ

**Can I try Tairyō for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**How big can Tairyō’s free spins pay?**

Free spins can pay up to ×2,100 — the collector-wild-plus-koi combination is where the top wins live.

**Is Tairyō provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/tairyo/](https://betkyo.com/en/guide/tairyo/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
