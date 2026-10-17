# Crash

A multiplier curve climbs from ×1 and can bust at any moment — cash out before it does. Rounds can run as high as ×10,000.
Everyone in the round watches the same curve, and the bust point is verifiable after every round.

## How a round works

1. Place your bet before the round launches.
2. Watch the multiplier climb — your potential payout climbs with it.
3. Cash out any time before the crash. Bust before you click, and the stake is gone.

## Verify a round

Every Crash round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Crash odds, priced: the chance of every cash-out target](https://betkyo.com/en/blog/crash-odds-priced-the-chance-of-every-cash-out-target/) — A crash round is one hidden number and a curve that climbs toward it. The number is drawn by a formula that is four lines long, and the curve is a clock, so every question a player asks — how often does ×2 pay, how often does it bust at once, how long is a ride to ×10 — has an exact answer. We priced all of them from the engine, including the one-hundredth gap between a multiplier you see and a multiplier you are paid.
- [The price of an hour: what each game costs per hour at your stake and pace](https://betkyo.com/en/blog/the-price-of-an-hour-what-each-game-costs-per-hour-at-your-stake-and-pace/) — A house edge is a price per bet. Multiply it by your stake and by how many bets an hour you make and you get the only number that compares games honestly: dollars per hour. At $10 a bet, a 1% game at a steady pace costs about the same as a coffee; the same stake on Double costs a dinner. Here is the table, with the communal games’ round timers read from the engines.
- [One rounding, not many: why the verifier matches the server bit for bit](https://betkyo.com/en/blog/one-rounding-not-many-why-the-verifier-matches-the-server-bit-for-bit/) — A provably fair verifier has one job: recompute the round and get the same answer the server got. That sounds like arithmetic and is actually engineering, because the server was written in Kotlin and the verifier runs in your browser, and the two turn the same 256-bit hash into the same number only if they round it the same way. Here is the trap, the two places it bites, and how the engine steps around it.
- [Two rides, two curves: what Limbo and Crash actually charge](https://betkyo.com/en/blog/two-rides-two-curves/) — They look like the same game wearing different clothes — name a multiplier, or watch one climb. Underneath they run different functions — and, once the settlement rule is applied, the same price. Both functions are four lines long, and we can show you both.
- [Inside drand: the internet’s public dice](https://betkyo.com/en/blog/inside-drand-the-internets-public-dice/) — Every thirty-odd seconds, a league of independent organizations publishes a random number nobody — including them — could predict or steer. How threshold cryptography built a public utility out of dice.
- [Four ways to prove a random number: commit-reveal, beacons, VRF, certified hardware](https://betkyo.com/en/blog/four-ways-to-prove-a-random-number/) — A comparison paper for players and builders: the four working schemes for proving randomness honest — what each one actually proves, what it silently assumes, and where each belongs.


## FAQ

**Can I try Crash for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**How high can Crash go?**

Round multipliers can reach up to ×10,000 — but the curve can also bust immediately, which is the whole game.

**Is Crash provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/crash/](https://betkyo.com/en/guide/crash/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
