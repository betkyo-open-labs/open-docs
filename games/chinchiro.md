# Chinchiro

The izakaya dice duel: three dice against the dealer, best combination wins, top hands pay up to ×6.
Chinchiro ranks rolls the traditional way — special triples and straights beat simple points — and settles head-to-head against the house.

## How a round works

1. Set your bet amount.
2. Roll three dice; the game reads your best combination automatically.
3. The dealer rolls against you — the stronger hand takes the round, with top combinations paying up to ×6.

## Verify a round

Every Chinchiro round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Chinchiro, priced: the dealer rolls first, the no-hand push, and the exact 2.616% edge](https://betkyo.com/en/blog/chinchiro-priced-the-dealer-rolls-first-and-the-push-that-makes-a-2-6-percent-edge/) — Our Chinchiro has no commission and no rounding — every payout is a whole multiple of the stake. So where does the house edge live? In who rolls first, in ties, and in one rule we changed from the street game: a dealer who fails to make a hand pushes instead of losing. Here is every probability, the return against each dealer point, and why that single rule is worth 12.5 points.
- [Sic Bo’s cheapest bet and its dearest: Big, Small and the triple tax](https://betkyo.com/en/blog/sic-bo-big-small-and-the-triple-tax/) — Three dice, fifty boxes on the layout, and a spread of house edges from under 3% to nearly 19%. Our engine prints every multiplier in a source comment, so the price of each box can be worked out exactly — and the whole edge on the two most-played boxes turns out to be six specific rolls.
- [Verify a casino round yourself: a step-by-step walkthrough](https://betkyo.com/en/blog/verify-a-casino-round/) — What “provably fair” actually promises, the commit-reveal scheme behind it, and how to recompute one of your own rounds by hand — plus what verification deliberately does not claim.


## FAQ

**Can I try Chinchiro for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the top payout in Chinchiro?**

The strongest combinations pay up to ×6.

**Is Chinchiro provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/chinchiro/](https://betkyo.com/en/guide/chinchiro/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
