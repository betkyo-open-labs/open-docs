# Sic Bo

Three dice, one shake, a whole table of ways to bet it. Big or small is the classic call; a specific triple pays ×181.
Sic Bo scales from the simplest coin-flip-style bets to long-shot triples on the same roll.

## How a round works

1. Place bets on the layout — big/small, totals, combinations, or triples.
2. Three dice are shaken and revealed.
3. All bets settle at once; a specific triple pays ×181.

## Verify a round

Every Sic Bo round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Sic Bo’s cheapest bet and its dearest: Big, Small and the triple tax](https://betkyo.com/en/blog/sic-bo-big-small-and-the-triple-tax/) — Three dice, fifty boxes on the layout, and a spread of house edges from under 3% to nearly 19%. Our engine prints every multiplier in a source comment, so the price of each box can be worked out exactly — and the whole edge on the two most-played boxes turns out to be six specific rolls.
- [Chinchiro, priced: the dealer rolls first, the no-hand push, and the exact 2.616% edge](https://betkyo.com/en/blog/chinchiro-priced-the-dealer-rolls-first-and-the-push-that-makes-a-2-6-percent-edge/) — Our Chinchiro has no commission and no rounding — every payout is a whole multiple of the stake. So where does the house edge live? In who rolls first, in ties, and in one rule we changed from the street game: a dealer who fails to make a hand pushes instead of losing. Here is every probability, the return against each dealer point, and why that single rule is worth 12.5 points.
- [One nonce, many numbers: what the cursor counts](https://betkyo.com/en/blog/one-nonce-many-numbers-what-the-cursor-counts/) — A dice roll needs one random number. A bingo card and its 38 balls need sixty-three. A blackjack hand needs as many as the cards it deals. Every provably fair explainer stops at “server seed, client seed, nonce”, but the fourth input is where a whole round comes from, and it is the part you can read in our engine source.


## FAQ

**Can I try Sic Bo for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the biggest payout in Sic Bo?**

Calling a specific triple pays ×181.

**Is Sic Bo provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/sic-bo/](https://betkyo.com/en/guide/sic-bo/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
