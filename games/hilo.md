# Hilo

Call the next card higher or lower, and keep calling — every correct call multiplies your pot, and the multiplier itself never stops climbing.
The tension is the cash-out decision: bank the current multiplier, or risk it on one more card.

## How a round works

1. Set your bet amount and see the opening card.
2. Call the next card higher or lower — rarer calls pay bigger step multipliers.
3. After each correct call, choose: cash out the current multiplier, or ride on.
4. One wrong call ends the ride and the pot.

## Verify a round

Every Hilo round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Hi-Lo, priced: the exact odds behind every card and every button](https://betkyo.com/en/blog/hi-lo-odds-priced-every-rank-every-button/) — Hi-Lo deals one card out of thirteen ranks and asks a single question, which makes every price in it computable to the last digit. We read the odds function, the win sets and the settlement rule out of the engine and priced all twenty-six buttons and the ladder above them — and re-priced them after the engine’s version 3 changed how a run is rounded.
- [The price of one more flip: how a 2% fee becomes 18%](https://betkyo.com/en/blog/the-price-of-one-more-flip/) — Koban Flip pays a coin toss at ×1.96 instead of ×2. That is two percent — a rounding error, on one flip. Ride the ladder to ten and the same two percent has quietly taken eighteen. This is what a streak game actually charges, computed from our own engine.
- [Designing Pagoda’s ladder: a game with no bad button](https://betkyo.com/en/blog/pagoda-design-notes/) — Engineering notes from our nine-floor climb: why every cash-out point returns exactly 99%, why the whole tower is decided before your first pick, and why we refused to punish ambition.


## FAQ

**Can I try Hilo for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**Is there a maximum win in Hilo?**

The multiplier is uncapped and compounds for as long as your calls stay correct, but the payout is not: every table applies a maximum profit, shown with the bet limits. Reach it and the figure stops rising — the game marks it, and further correct calls add nothing.

**Is Hilo provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/hilo/](https://betkyo.com/en/guide/hilo/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
