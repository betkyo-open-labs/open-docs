# RPS

Rock, paper, scissors against the dealer — the game everyone already knows, with a bet on it. A win pays ×1.97.
One throw, instant result, instantly verifiable. No strategy layer to learn.

## How a round works

1. Set your bet amount.
2. Throw rock, paper or scissors.
3. Beat the dealer’s throw to win ×1.97.

## How a round is derived

Every RPS round is derived from a server seed committed by SHA-256 hash before you bet, your client seed and a nonce. The open verifier implements the same derivation: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Rock, paper, scissors, priced: the ×1.97 win, a 1.5% edge per win, and how it compounds](https://betkyo.com/en/blog/rps-priced-the-1-97-win-a-1-5-percent-edge-per-win-and-how-it-compounds/) — Our RPS pays ×1.97 for a win, pushes on a draw and ends the run on a loss. The multiplier was set so that each throw returns 99% — but a draw is not a result, it is a re-throw, and once the draws are taken out the price of a win is 1.5%. Here is the exact ladder, what each cash-out point returns, and why riding the streak compounds the edge.


## FAQ

**Can I try RPS for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What does a win pay in RPS?**

Beating the dealer pays ×1.97 on your stake.

**Is RPS provably fair?**

Yes. Every Betkyo original commits to its randomness before you bet: a server seed fixed by its SHA-256 hash and mixed with your own client seed, or, for the shared-round games, a hash chain published in advance. The fairness page explains the exact scheme.


Guide on the site: [https://betkyo.com/en/guide/rps/](https://betkyo.com/en/guide/rps/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
