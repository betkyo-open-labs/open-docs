# Video Poker

Jacks or Better, the canonical video poker: five cards, one draw, paytable poker hands. A royal flush pays ×800.
It’s the most skill-shaped game on the floor — every hold decision changes your expected hand.

## How a round works

1. Set your bet and deal five cards.
2. Hold the cards worth keeping and draw replacements once.
3. Final hands of a pair of jacks or better pay by the table — royal flush pays ×800.

## Verify a round

Every Video Poker round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Low pair or high cards: the video poker hold, priced on the 8/5 table](https://betkyo.com/en/blog/low-pair-or-high-cards-the-video-poker-hold-priced-on-the-8-5-table/) — The one decision in video poker is which cards to keep. We priced the classic dilemmas by enumerating every draw against the engine’s own 8/5 paytable: a pair of sixes beats a king and a queen by a third of a unit, a pair of jacks beats a four-flush, and a made flush beats three to the royal by almost four to one.
- [3:2 or 6:5: the one number that decides a blackjack table](https://betkyo.com/en/blog/three-to-two-or-six-to-five/) — Every blackjack table advertises the same game and most of the differences between them are small. One is not. What a natural blackjack pays — three to two, or six to five — is worth more than every other rule on the felt combined, and our engine lets us put an exact figure on it.
- [8/5 Jacks or Better: the one game here you can play wrong](https://betkyo.com/en/blog/nine-six-jacks-or-better/) — Every other original on this site plays itself once you bet. Video poker hands you five cards and a decision, and the decision moves the return. What the 8/5 on the label means, what it costs against the full-pay 9/6 table it replaced, and where the skill actually lives.


## FAQ

**Can I try Video Poker for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What does a royal flush pay?**

The royal flush tops the paytable at ×800.

**Is Video Poker provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/video-poker/](https://betkyo.com/en/guide/video-poker/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
