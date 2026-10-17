# Bingo

38 balls, one card, seven pay lines — complete lines to win, with the top pattern paying ×500.
It’s bingo compressed into a single fast solo round: no waiting on a hall, and the whole draw is verifiable.

## How a round works

1. Set your bet and take a card.
2. 38 balls draw automatically and daub your card.
3. Completed lines pay — seven lines are live, topping out at ×500.

## Verify a round

Every Bingo round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Bingo, priced exactly: every line count from zero to twelve and the return behind 38 balls](https://betkyo.com/en/blog/bingo-odds-priced-exactly-every-line-count-from-zero-to-twelve-and-the-return-behind-38-balls/) — Our design notes quoted a million-round simulation for solo bingo: 62.9% of cards complete nothing, the game returns about 96.5%. A simulation is an estimate. This article replaces it with the exact figures — every one of the 16.8 million ways a card can be marked, weighted by the odds of the draw — and prices each line count, the free centre, the marked-number spread, and the one line count you will never see.
- [Designing Bingo: 38 balls, 12 lines, and why the centre star is worth a whole ball](https://betkyo.com/en/blog/designing-bingo-38-balls-12-lines/) — Hall bingo is a race against other cards. Solo bingo has no other cards, so the design has to make one card interesting on its own: how many balls to draw, which lines count, and what each count pays. The engine file states all three, and the arithmetic behind them is short enough to do by hand.
- [One nonce, many numbers: what the cursor counts](https://betkyo.com/en/blog/one-nonce-many-numbers-what-the-cursor-counts/) — A dice roll needs one random number. A bingo card and its 38 balls need sixty-three. A blackjack hand needs as many as the cards it deals. Every provably fair explainer stops at “server seed, client seed, nonce”, but the fourth input is where a whole round comes from, and it is the part you can read in our engine source.
- [What a keno risk level actually changes — and what it does not](https://betkyo.com/en/blog/what-a-keno-risk-level-changes/) — Four risk levels, ten pick counts, forty payout tables. We computed the return of every one of them from our own engine. They all land within half a point of each other, which means the selector is not buying you value — it is buying you volatility.


## FAQ

**Can I try Bingo for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the top prize in Bingo?**

The best line result pays ×500 across the seven pay lines.

**Is Bingo provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/bingo/](https://betkyo.com/en/guide/bingo/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
