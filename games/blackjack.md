# Blackjack

The table game: beat the dealer to 21 without going over. A natural blackjack pays the full 3:2 — no shaved 6:5 tables here.
Hit, stand, double, split — every classic decision is yours, and every shoe result is verifiable.

## How a round works

1. Place your bet and receive two cards against the dealer’s up-card.
2. Hit, stand, double or split to build your hand without busting 21.
3. Beat the dealer’s hand to win; a natural blackjack pays 3:2.

## Verify a round

Every Blackjack round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Blackjack basic strategy, priced: the exact chart for this table’s rules](https://betkyo.com/en/blog/blackjack-basic-strategy-chart-priced-on-an-infinite-shoe/) — A basic strategy chart is only correct for the rules it was computed on. We computed this one for the engine’s own rules, every cell by exact recursion over an infinite shoe, and priced the close calls: hard 16 against a ten is a hit by six ten-thousandths of a bet, and splitting tens against a six throws away an eighth of one.
- [Glossary: casino math and provably fair terms, defined in two sentences each](https://betkyo.com/en/blog/glossary-of-casino-math-and-provably-fair-terms/) — Thirty-two terms that appear across the Journal, each defined in two sentences and linked to the article that uses it with real numbers. Where a term has a specific meaning on this site, the definition says so.
- [One nonce, many numbers: what the cursor counts](https://betkyo.com/en/blog/one-nonce-many-numbers-what-the-cursor-counts/) — A dice roll needs one random number. A bingo card and its 38 balls need sixty-three. A blackjack hand needs as many as the cards it deals. Every provably fair explainer stops at “server seed, client seed, nonce”, but the fourth input is where a whole round comes from, and it is the part you can read in our engine source.
- [Dealer bust odds by upcard, on an infinite shoe](https://betkyo.com/en/blog/dealer-bust-odds-by-upcard-on-an-infinite-shoe/) — Every blackjack strategy chart is a compressed version of one table: how often the dealer busts from each upcard. Our engine deals from an infinite shoe and stands on all 17s, which makes that table exactly computable rather than estimated. Here it is, with the dealer’s final totals beside it and the one row that explains why basic strategy looks the way it does.
- [Casino Hold’em priced: the qualifying rule and the ante bonus](https://betkyo.com/en/blog/casino-holdem-priced-the-qualifying-rule-and-the-ante-bonus/) — Casino Hold’em looks like poker and is priced like a table game. You cannot bluff the dealer, you can only call or fold, and two rules that never appear on a poker table decide the whole economics: the dealer must qualify, and the ante pays a bonus. Here is what each rule is worth, read from the engine that settles the hand.
- [3:2 or 6:5: the one number that decides a blackjack table](https://betkyo.com/en/blog/three-to-two-or-six-to-five/) — Every blackjack table advertises the same game and most of the differences between them are small. One is not. What a natural blackjack pays — three to two, or six to five — is worth more than every other rule on the felt combined, and our engine lets us put an exact figure on it.
- [8/5 Jacks or Better: the one game here you can play wrong](https://betkyo.com/en/blog/nine-six-jacks-or-better/) — Every other original on this site plays itself once you bet. Video poker hands you five cards and a decision, and the decision moves the return. What the 8/5 on the label means, what it costs against the full-pay 9/6 table it replaced, and where the skill actually lives.

## Datasets

- [blackjack-dealer-outcomes](https://github.com/betkyo-open-labs/odds-data/blob/main/data/blackjack-dealer-outcomes.json) (JSON, CSV alongside)

## FAQ

**Can I try Blackjack for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**Does blackjack pay 3:2 or 6:5?**

A natural blackjack pays the full 3:2.

**Is Blackjack provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/blackjack/](https://betkyo.com/en/guide/blackjack/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
