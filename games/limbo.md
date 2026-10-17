# Limbo

Name your own multiplier — anything up to ×10,000 — then see if the round’s result clears it. Higher targets are rarer, exactly as the odds imply.
Limbo is the most direct risk dial on the floor: you literally type the payout you want to chase.

## How a round works

1. Set your bet amount.
2. Enter a target multiplier, up to ×10,000.
3. If the round result meets or beats your target, you win your target multiplier.

## Verify a round

Every Limbo round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Limbo odds, priced: the win chance behind every target multiplier](https://betkyo.com/en/blog/limbo-odds-priced-the-win-chance-behind-every-target-multiplier/) — Limbo asks one question: will the number be at least as high as your target? The engine answers it with a single line of arithmetic, and that line can be priced exactly for every target the box accepts. Here is the win chance at every multiplier, why the house edge is the same 1% everywhere, how often the number stops below ×1.01, and what chasing ×100 or ×1,000 actually costs in patience.
- [Doubling $100, priced: the chance of doubling before busting at every stake, every edge and every odds](https://betkyo.com/en/blog/doubling-100-dollars-priced-the-chance-of-doubling-before-busting-at-every-stake-and-edge/) — Walk in with $100 and leave with $200 or nothing: a single all-in bet at ×1.98 gets you to $198 just under half the time. The same game at $1 a bet reaches $200 11% of the time, and at Chinchiro’s 2.6% edge, half a percent. Here is the whole table — why small bets lose more often than big ones, why a 1-in-100 long shot doubles you more often than a coin flip at the same stake, and what the house edge really buys the house.
- [Glossary: casino math and provably fair terms, defined in two sentences each](https://betkyo.com/en/blog/glossary-of-casino-math-and-provably-fair-terms/) — Thirty-two terms that appear across the Journal, each defined in two sentences and linked to the article that uses it with real numbers. Where a term has a specific meaning on this site, the definition says so.
- [One rounding, not many: why the verifier matches the server bit for bit](https://betkyo.com/en/blog/one-rounding-not-many-why-the-verifier-matches-the-server-bit-for-bit/) — A provably fair verifier has one job: recompute the round and get the same answer the server got. That sounds like arithmetic and is actually engineering, because the server was written in Kotlin and the verifier runs in your browser, and the two turn the same 256-bit hash into the same number only if they round it the same way. Here is the trap, the two places it bites, and how the engine steps around it.
- [What a hash commitment proves, and the three things it cannot](https://betkyo.com/en/blog/what-a-hash-commitment-proves/) — “Provably fair” rests on one trick: the house publishes a fingerprint of its secret before you play, and reveals the secret afterwards. That trick proves exactly three things. It is worth being precise about them, because it is just as often sold as proving everything.
- [Two rides, two curves: what Limbo and Crash actually charge](https://betkyo.com/en/blog/two-rides-two-curves/) — They look like the same game wearing different clothes — name a multiplier, or watch one climb. Underneath they run different functions — and, once the settlement rule is applied, the same price. Both functions are four lines long, and we can show you both.
- [Risk of ruin: why a 99% game still empties a bankroll](https://betkyo.com/en/blog/risk-of-ruin/) — House edge tells you what a game costs per bet. It says almost nothing about whether you survive to see the average. The number that decides that is variance, and it is the one almost nobody looks up.
- [The Kelly criterion: the formula that tells most gamblers to bet nothing](https://betkyo.com/en/blog/bet-sizing-and-the-kelly-criterion/) — There is a mathematically optimal bet size, derived at Bell Labs in 1956 and used by professional investors ever since. Applied honestly to a casino game, it returns the same answer almost every time — and it is not a number of chips.


## FAQ

**Can I try Limbo for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the highest target in Limbo?**

You can set a target of up to ×10,000.

**Is Limbo provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/limbo/](https://betkyo.com/en/guide/limbo/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
