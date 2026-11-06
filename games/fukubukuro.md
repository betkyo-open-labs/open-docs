# Fukubukuro

Lucky bags, Betkyo style: every bag pays something — the question is how much. The rarest pulls reach ×250.
Fukubukuro flips the usual risk shape: you never blank, you’re shopping for the outlier bag.

## How a round works

1. Set your bet amount.
2. Pick a bag.
3. Open it — every bag returns a prize, with rare tails paying up to ×250.

## How a round is derived

Every Fukubukuro round is derived from a server seed committed by SHA-256 hash before you bet, your client seed and a nonce. The open verifier implements the same derivation: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Designing Fukubukuro: the lucky bag that always pays something](https://betkyo.com/en/blog/designing-fukubukuro-the-lucky-bag-that-always-pays-something/) — Every New Year Japanese shops sell sealed bags at a fixed price and promise the contents are worth more. Our version keeps the sealed bag and drops the promise: every open pays something, but what it pays is a weighted draw you can read line by line. Two bags, fifteen items, one number from a committed seed. Here is the whole table and what it was tuned to do.
- [Omikuji, priced: six fortunes, a 30.9% hit rate, and the two-大吉 card that pays nothing](https://betkyo.com/en/blog/omikuji-priced-six-fortunes-a-30-9-percent-hit-rate-and-the-two-daikichi-card-that-pays-nothing/) — Nine cells, seven glyphs, three of a kind to win. The tier weights are integers in the engine, so every number here is exact: 大吉 is one card in a thousand, the ×1.5 末吉 pays more of the return than any other tier, and a losing card shows two 大吉 glyphs almost half the time — a near miss that is built into how the card is painted, not a sign of anything.

## Datasets

- [fukubukuro-bags](https://github.com/betkyo-open-labs/odds-data/blob/main/data/fukubukuro-bags.json) (JSON, CSV alongside)

## FAQ

**Can I try Fukubukuro for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**Can a Fukubukuro bag pay nothing?**

No — every bag pays. The rare top bags reach ×250.

**Is Fukubukuro provably fair?**

Yes. Every Betkyo original commits to its randomness before you bet: a server seed fixed by its SHA-256 hash and mixed with your own client seed, or, for the shared-round games, a hash chain published in advance. The fairness page explains the exact scheme.


Guide on the site: [https://betkyo.com/en/guide/fukubukuro/](https://betkyo.com/en/guide/fukubukuro/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
