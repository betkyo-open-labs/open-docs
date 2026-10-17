# Double

Call the colour of the next roll. Red or black doubles you up; the rare green slot pays ×14.
Double is the simplest streak game on the floor — one colour call, instant settle, repeat.

## How a round works

1. Set your bet amount.
2. Pick a colour — red, black, or green.
3. The roll lands on one colour; green pays ×14.

## Verify a round

Every Double round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Double odds, priced: red, black and the ×14 green](https://betkyo.com/en/blog/double-odds-priced-red-black-and-the-14x-green/) — Double is the shared colour wheel: fifteen tiles, one green, seven red, seven black, one spin every eighteen seconds or so for everyone at the table. Red and black pay ×2, green pays ×14. Here is the exact win chance and return of every colour, what betting two colours at once does and does not change, how long green takes to come round, and how to replay a spin from the chain link the round reveals.


## FAQ

**Can I try Double for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What does green pay in Double?**

Hitting green pays ×14.

**Is Double provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/double/](https://betkyo.com/en/guide/double/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
