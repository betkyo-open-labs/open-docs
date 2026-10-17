# Wheel

One wheel, one spin, everyone on it together — every player rides the same shared result. The top slot pays ×8.
The shared spin makes Wheel a communal moment: the whole floor wins or groans at once, and the result is verifiable for everyone.

## How a round works

1. Set your bet before the next shared spin locks.
2. Pick your segment odds.
3. The wheel spins once for all players — land your segment and collect, up to ×8 on the top slot.

## Verify a round

Every Wheel round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Wheel odds, priced: 48 slots, five multipliers and the 1% edge](https://betkyo.com/en/blog/wheel-odds-priced-48-slots-five-multipliers-and-the-1-percent-edge/) — The Wheel is the shared spin: everyone stakes in a ten-second window, one wheel turns, and each player is paid their stake times whatever slot it lands on. The wheel has 48 slots and five multipliers, and the count of each is what sets the price. Here is the chance of every multiplier, where the 98.96% return actually comes from, how long the ×8 takes to arrive, and how to replay a spin from the chain link the round reveals.
- [A roulette bet is a string: self-describing keys and the ×36 table](https://betkyo.com/en/blog/a-roulette-bet-is-a-string-self-describing-keys-and-the-36-table/) — Roulette has more kinds of bet than any other table game, and a settlement engine that had to remember where each chip sat on a felt would be a large and fragile thing. Ours does not remember anything. Every bet is a short string that says what it covers, and the whole payout table collapses to one number: 36. Here is the design, and the arithmetic it makes impossible to get wrong.
- [Inside drand: the internet’s public dice](https://betkyo.com/en/blog/inside-drand-the-internets-public-dice/) — Every thirty-odd seconds, a league of independent organizations publishes a random number nobody — including them — could predict or steer. How threshold cryptography built a public utility out of dice.


## FAQ

**Can I try Wheel for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the top slot worth in Wheel?**

The top slot pays ×8. Every player shares the same spin result.

**Is Wheel provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/wheel/](https://betkyo.com/en/guide/wheel/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
