# Andar Bahar

The subcontinent’s fastest card game: a joker is cut, then cards race to Andar and Bahar — first side to match the joker wins. Side boosts pay up to ×3,750.
The base call is near a coin flip; the boosts are where the long odds live.

## How a round works

1. Bet Andar or Bahar (and any boost side bets).
2. The joker card is revealed, then cards deal alternately to each side.
3. The first side to match the joker’s rank wins — boosts pay up to ×3,750.

## Verify a round

Every Andar Bahar round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Andar Bahar’s random ×5 boosts don’t change the house edge — here’s the proof](https://betkyo.com/en/blog/andar-bahar-boost-math/) — Every deal stamps random ×2/×3/×5 boosts onto two side-bet buckets. It looks like the odds are moving. They aren’t — and we can prove it from the engine source.


## FAQ

**Can I try Andar Bahar for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What do Andar Bahar boosts pay?**

Side boosts pay up to ×3,750 on top of the base Andar/Bahar call.

**Is Andar Bahar provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/andar-bahar/](https://betkyo.com/en/guide/andar-bahar/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
