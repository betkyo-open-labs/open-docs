# Roulette

European single-zero roulette — one green pocket, not two, which is the version you want. A straight-up number pays ×36.
All the classic bets are here: numbers, splits, colours, dozens — settled by one verifiable spin.

## How a round works

1. Place chips on numbers, groups, or outside bets.
2. The wheel spins with a single zero pocket.
3. Winning bets pay by classic odds — a straight-up hit returns ×36.

## Verify a round

Every Roulette round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Roulette hit rates, priced: how long a number takes and what a streak is worth](https://betkyo.com/en/blog/roulette-hit-rates-priced-how-long-a-number-takes-and-what-a-streak-is-worth/) — Every bet on this single-zero wheel costs the same 2.7%, so the interesting questions are the ones the price does not answer: how many spins a number usually takes, how often a colour runs eight deep, how long zero can stay away, and how far a session can drift from its expected loss. Here are the answers, computed from the engine’s 37 pockets.
- [A roulette bet is a string: self-describing keys and the ×36 table](https://betkyo.com/en/blog/a-roulette-bet-is-a-string-self-describing-keys-and-the-36-table/) — Roulette has more kinds of bet than any other table game, and a settlement engine that had to remember where each chip sat on a felt would be a large and fragile thing. Ours does not remember anything. Every bet is a short string that says what it covers, and the whole payout table collapses to one number: 36. Here is the design, and the arithmetic it makes impossible to get wrong.
- [The martingale, priced: what doubling after a loss really buys on a single-zero wheel](https://betkyo.com/en/blog/the-martingale-priced-doubling-on-a-single-zero-wheel/) — Double after every loss and the first win recovers everything plus one unit. It works most of the time, which is the trap. We priced the martingale exactly on the engine’s single-zero wheel: how often a series busts, what a session that “usually wins” is worth, and why every version loses the same 2.70% of what it stakes.
- [One rounding, not many: why the verifier matches the server bit for bit](https://betkyo.com/en/blog/one-rounding-not-many-why-the-verifier-matches-the-server-bit-for-bit/) — A provably fair verifier has one job: recompute the round and get the same answer the server got. That sounds like arithmetic and is actually engineering, because the server was written in Kotlin and the verifier runs in your browser, and the two turn the same 256-bit hash into the same number only if they round it the same way. Here is the trap, the two places it bites, and how the engine steps around it.

## Datasets

- [roulette-bets](https://github.com/betkyo-open-labs/odds-data/blob/main/data/roulette-bets.json) (JSON, CSV alongside)

## FAQ

**Can I try Roulette for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**Is Betkyo’s Roulette single-zero?**

Yes — single zero (European layout). A straight-up number pays ×36.

**Is Roulette provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/roulette/](https://betkyo.com/en/guide/roulette/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
