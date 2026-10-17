# Koban Flip

Call the koban coin — heads or tails — and let it ride. Each correct call doubles the ride; a full streak runs to ×836.
The coin is fifty-fifty; the game is knowing when to stop.

## How a round works

1. Set your bet amount.
2. Call the flip.
3. Win and choose: cash out, or flip again — a full winning streak reaches ×836.

## Verify a round

Every Koban Flip round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Designing Koban Flip: every face is fixed when you buy the coin](https://betkyo.com/en/blog/designing-koban-flip-every-face-is-fixed-when-you-buy-the-coin/) — A coin flip is the simplest game there is, which makes it the hardest to design honestly: there is nowhere for a house edge to hide except in plain sight. Koban Flip pays ×1.96 on a fair coin, lets you ride a streak up to ten flips, and derives every face of the ride from one seed the moment you buy the first coin. Here is what each of those choices costs and why.
- [The price of one more flip: how a 2% fee becomes 18%](https://betkyo.com/en/blog/the-price-of-one-more-flip/) — Koban Flip pays a coin toss at ×1.96 instead of ×2. That is two percent — a rounding error, on one flip. Ride the ladder to ten and the same two percent has quietly taken eighteen. This is what a streak game actually charges, computed from our own engine.
- [Why ten mines pays the same as fifteen: the ×3,236,072 full clear](https://betkyo.com/en/blog/the-biggest-number-on-the-site/) — Fugu is a 5×5 minefield. Clear every safe tile with ten mines on the board and the ladder reads ×3,236,072 — the largest number anywhere on this site. Clear it with fifteen mines and it reads exactly the same. That is not a coincidence, and the reason it happens tells you what every pick in the game actually costs.
- [Designing Pagoda’s ladder: a game with no bad button](https://betkyo.com/en/blog/pagoda-design-notes/) — Engineering notes from our nine-floor climb: why every cash-out point returns exactly 99%, why the whole tower is decided before your first pick, and why we refused to punish ambition.

## Datasets

- [koban-ladder](https://github.com/betkyo-open-labs/odds-data/blob/main/data/koban-ladder.json) (JSON, CSV alongside)

## FAQ

**Can I try Koban Flip for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**How far can a Koban Flip streak go?**

Riding a perfect streak pays up to ×836.

**Is Koban Flip provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/koban-flip/](https://betkyo.com/en/guide/koban-flip/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
