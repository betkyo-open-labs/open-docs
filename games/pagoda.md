# Pagoda

Climb a nine-floor pagoda one safe panel at a time. Every floor multiplies your pot; the rooftop pays ×506.88.
Like all climb games, the whole game is the stop decision — each floor offers the cash-out or the next step up.

## How a round works

1. Set your bet amount.
2. Pick a panel on the first floor — a safe pick moves you up and multiplies your pot.
3. After each floor, cash out or climb. Reach the top of all 9 floors for ×506.88.

## Verify a round

Every Pagoda round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Pagoda, priced: nine floors, three difficulties and the cents the ladder drops](https://betkyo.com/en/blog/pagoda-odds-priced-nine-floors-three-difficulties-and-the-cents-the-ladder-drops/) — Pagoda is a nine-floor climb with one trap per floor and a cash-out button between floors. The ladder is built to return 99% at every rung, and it very nearly does: the engine computes each multiplier to twelve decimals and then drops it to whole cents, so three of the twenty-seven rungs pay 98.67% and the rest sit between 98.72% and 99.00%. Here is every rung priced, the odds of the top, and what climbing instead of cashing out costs in swing.
- [Designing Pagoda’s ladder: a game with no bad button](https://betkyo.com/en/blog/pagoda-design-notes/) — Engineering notes from our nine-floor climb: why every cash-out point returns exactly 99%, why the whole tower is decided before your first pick, and why we refused to punish ambition.
- [Plinko, priced: why the middle bucket pays ×0.2 and the edge pays ×1,000](https://betkyo.com/en/blog/plinko-priced-the-binomial-behind-every-board/) — A Plinko board is a coin flipped once per row. That single fact fixes the odds of every bucket on every board, and it lets the whole multiplier table — 27 boards, from 8 rows on low risk to 16 rows on high — be priced by hand. The centre is where the ball goes; the edge is where the money is; and the two are the same curve read from opposite ends.
- [Risk of ruin: why a 99% game still empties a bankroll](https://betkyo.com/en/blog/risk-of-ruin/) — House edge tells you what a game costs per bet. It says almost nothing about whether you survive to see the average. The number that decides that is variance, and it is the one almost nobody looks up.


## FAQ

**Can I try Pagoda for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What does reaching the top of Pagoda pay?**

Clearing all 9 floors pays ×506.88.

**Is Pagoda provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/pagoda/](https://betkyo.com/en/guide/pagoda/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
