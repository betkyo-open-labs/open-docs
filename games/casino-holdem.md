# Casino Holdem

Hold’em against the house: ante up, see the flop, then decide to call or fold. Premium hands carry bonus pays up to 100:1 for a royal.
All the texture of hold’em — outs, boards, kickers — without waiting on a table of other players.

## How a round works

1. Post your ante and receive two cards; the flop comes out.
2. Decide: fold the ante, or call to see the hand through.
3. Best five-card hand against the dealer settles the round — a royal flush bonus pays 100:1.

## Verify a round

Every Casino Holdem round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Casino Hold’em priced: the qualifying rule and the ante bonus](https://betkyo.com/en/blog/casino-holdem-priced-the-qualifying-rule-and-the-ante-bonus/) — Casino Hold’em looks like poker and is priced like a table game. You cannot bluff the dealer, you can only call or fold, and two rules that never appear on a poker table decide the whole economics: the dealer must qualify, and the ante pays a bonus. Here is what each rule is worth, read from the engine that settles the hand.


## FAQ

**Can I try Casino Holdem for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the best bonus in Casino Holdem?**

A royal flush pays a 100:1 bonus.

**Is Casino Holdem provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/casino-holdem/](https://betkyo.com/en/guide/casino-holdem/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
