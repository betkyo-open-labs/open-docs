# Hanabi

A summer-festival slot where the reels end in fireworks — line wins build toward a top payout of ×2,000.
Hanabi is the floor’s pure slot experience: spin, light the sky, and every spin is verifiable like any table round.

## How a round works

1. Set your bet per spin.
2. Spin the festival reels.
3. Line combinations pay by the paytable, up to ×2,000.

## Verify a round

Every Hanabi round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Hanabi, priced exactly: every symbol, the free-spin ladder and the 95.81% return](https://betkyo.com/en/blog/hanabi-odds-priced-exactly-every-symbol-the-free-spin-ladder-and-the-95-81-return/) — Our design note for Hanabi said the return could not be cheaply checked and quoted the engine’s simulated 96.1%. It can be checked, in seconds, from the weights in the source file. The exact figure is 95.81%. Here is where every point of it comes from: each symbol, the scatter pays, the free-spin ladder, and what the typical session looks like.
- [Designing Hanabi: a slot whose free spins build ×1, ×2, ×3, ×5 — and what its source file admits](https://betkyo.com/en/blog/designing-hanabi-the-firework-ladder/) — Most slots hide their reel weights. Hanabi’s are nine numbers in a source file, and its header states the return, the hit rate and the free-spin frequency it was tuned to. This is the design note behind the festival reels: how the symbols are weighted, why the feature climbs like a firework, and how far the paytable can be checked by hand.


## FAQ

**Can I try Hanabi for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is Hanabi’s maximum win?**

The paytable tops out at ×2,000.

**Is Hanabi provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/hanabi/](https://betkyo.com/en/guide/hanabi/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
