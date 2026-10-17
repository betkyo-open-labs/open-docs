# Keno

Pick up to 10 numbers out of 40, then watch ten balls drop. The more hits, the bigger the multiplier — a full 10-for-10 card pays ×1,000 on Low, Medium and High, and ×100 on Classic.
Keno is a lottery you can verify: the entire draw is provably fair, not just the headline.

## How a round works

1. Set your bet amount.
2. Choose a risk level — Classic, Low, Medium or High. It changes the payout table, never your chance of hitting.
3. Pick up to 10 numbers from the 40-number board (or quick-pick).
4. The draw reveals ten winning numbers — payouts scale with how many you hit, up to ×1,000 on Low, Medium and High (×100 on Classic).

## Verify a round

Every Keno round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Keno odds, priced: the chance of every hit count from one pick to ten](https://betkyo.com/en/blog/keno-odds-priced-the-chance-of-every-hit-count-from-one-pick-to-ten/) — Forty numbers, ten drawn, up to ten marked. That is the whole of keno’s probability, and it can be computed to the last digit for every ticket you can buy. We priced all fifty-five hit counts from the engine’s draw loop and its forty payout tables: how many hits to expect, how rare a clean sweep is, and what the ×1,000 cell is actually worth.
- [What a keno risk level actually changes — and what it does not](https://betkyo.com/en/blog/what-a-keno-risk-level-changes/) — Four risk levels, ten pick counts, forty payout tables. We computed the return of every one of them from our own engine. They all land within half a point of each other, which means the selector is not buying you value — it is buying you volatility.
- [Designing Bingo: 38 balls, 12 lines, and why the centre star is worth a whole ball](https://betkyo.com/en/blog/designing-bingo-38-balls-12-lines/) — Hall bingo is a race against other cards. Solo bingo has no other cards, so the design has to make one card interesting on its own: how many balls to draw, which lines count, and what each count pays. The engine file states all three, and the arithmetic behind them is short enough to do by hand.

## Datasets

- [keno-paytables](https://github.com/betkyo-open-labs/odds-data/blob/main/data/keno-paytables.json) (JSON, CSV alongside)

## FAQ

**Can I try Keno for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What does hitting all 10 numbers pay?**

A perfect 10-for-10 card pays ×1,000 on the Low, Medium and High risk levels, and ×100 on Classic. The risk level changes the payout table, not the odds of hitting.

**Is Keno provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/keno/](https://betkyo.com/en/guide/keno/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
