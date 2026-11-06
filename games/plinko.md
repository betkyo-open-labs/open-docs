# Plinko

Drop a ball down a pegboard and watch it bounce into a multiplier bucket. The edges pay the most — the top bucket reaches ×1,000.
Plinko is pure drop-and-see: no decisions mid-round, just physics and a verifiable landing slot.

## How a round works

1. Set your bet amount.
2. Pick your board settings — riskier boards stretch the multiplier range toward the ×1,000 edge buckets.
3. Drop the ball and collect whatever bucket it lands in.

## How a round is derived

Every Plinko round is derived from a server seed committed by SHA-256 hash before you bet, your client seed and a nonce. The open verifier implements the same derivation: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Plinko, priced: why the middle bucket pays ×0.2 and the edge pays ×1,000](https://betkyo.com/en/blog/plinko-priced-the-binomial-behind-every-board/) — A Plinko board is a coin flipped once per row. That single fact fixes the odds of every bucket on every board, and it lets the whole multiplier table — 27 boards, from 8 rows on low risk to 16 rows on high — be priced by hand. The centre is where the ball goes; the edge is where the money is; and the two are the same curve read from opposite ends.

## Datasets

- [plinko-multipliers](https://github.com/betkyo-open-labs/odds-data/blob/main/data/plinko-multipliers.json) (JSON, CSV alongside)

## FAQ

**Can I try Plinko for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the top payout in Plinko?**

The top bucket pays up to ×1,000 on the highest-risk board.

**Is Plinko provably fair?**

Yes. Every Betkyo original commits to its randomness before you bet: a server seed fixed by its SHA-256 hash and mixed with your own client seed, or, for the shared-round games, a hash chain published in advance. The fairness page explains the exact scheme.


Guide on the site: [https://betkyo.com/en/guide/plinko/](https://betkyo.com/en/guide/plinko/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
