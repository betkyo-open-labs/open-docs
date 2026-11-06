# Dice

Dice is the purest expression of a crypto original: pick a target, roll under it, get paid. The lower your target, the rarer the win and the bigger the multiplier — up to ×49.5.
Rounds resolve instantly, which makes Dice the classic first stop for testing fairness verification: one roll, one verifiable result.

## How a round works

1. Set your bet amount.
2. Choose your roll-under target — the payout multiplier updates live as you move it.
3. Roll. If the result lands under your target, you win the shown multiplier.
4. Verify any roll from the round history whenever you like.

## Verify a round

Every Dice round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [The longest losing streak, priced: what 100, 1,000 and 10,000 dice rolls will show you](https://betkyo.com/en/blog/the-longest-losing-streak-priced-what-100-1000-and-10000-dice-rolls-will-show-you/) — Ten losses in a row at a coin-flip bet sounds like a sign that something is wrong. Across a thousand rolls it is closer to a coin flip itself: 41 %. This piece prices the longest losing run you should expect at every common dice target, exactly, from the engine’s own odds — and shows why the number grows so slowly with the number of rolls, and why it matters most to anyone who doubles after a loss.
- [Dice, priced exactly: the true win chance and return behind every target](https://betkyo.com/en/blog/dice-odds-priced-the-true-win-chance-and-return-behind-every-target/) — A dice screen shows two numbers, a win chance and a multiplier, and multiplying them gives 99% — at some targets. The roll has 9,999 possible results, not 10,000, and the multiplier is cut to two decimals, so the real return moves between 98.03% and 99.00% depending on where the target sits. Here is the exact price of every setting, and the one habit that avoids nearly all of the difference.
- [Your balance, your deposits, your wins — in the chat: Betkyo in Telegram](https://betkyo.com/en/blog/betkyo-in-telegram-your-balance-your-deposits-your-wins-in-the-chat/) — A casino you have to go and look at is a different thing from one that lives in a chat you already have open. This is what changes when it does: money events arrive as confirmations instead of being looked up, a bet is a card you read before you place it, the chat answers plain English, and the first roll costs nothing and needs no account.
- [How many bets before the edge shows, priced: the 40,000 rolls that hide a 1% house edge](https://betkyo.com/en/blog/how-many-bets-before-the-edge-shows-priced-the-40000-rolls-that-hide-a-1-percent-house-edge/) — A 1% house edge is not something a player can see. Each roll swings a hundred times more than it costs, and the swing only shrinks relative to the cost as the square root of the number of bets. On a ×1.98 coin flip the expected loss does not clear two standard deviations until about 40,000 rolls; on a ×100 limbo target it takes 3.9 million. Here is the exact number for every setting, what it is in hours, and why the house never has to wait.
- [The price of an hour: what each game costs per hour at your stake and pace](https://betkyo.com/en/blog/the-price-of-an-hour-what-each-game-costs-per-hour-at-your-stake-and-pace/) — A house edge is a price per bet. Multiply it by your stake and by how many bets an hour you make and you get the only number that compares games honestly: dollars per hour. At $10 a bet, a 1% game at a steady pace costs about the same as a coffee; the same stake on Double costs a dinner. Here is the table, with the communal games’ round timers read from the engines.
- [Doubling $100, priced: the chance of doubling before busting at every stake, every edge and every odds](https://betkyo.com/en/blog/doubling-100-dollars-priced-the-chance-of-doubling-before-busting-at-every-stake-and-edge/) — Walk in with $100 and leave with $200 or nothing: a single all-in bet at ×1.98 gets you to $198 just under half the time. The same game at $1 a bet reaches $200 11% of the time, and at Chinchiro’s 2.6% edge, half a percent. Here is the whole table — why small bets lose more often than big ones, why a 1-in-100 long shot doubles you more often than a coin flip at the same stake, and what the house edge really buys the house.
- [Glossary: casino math and provably fair terms, defined in two sentences each](https://betkyo.com/en/blog/glossary-of-casino-math-and-provably-fair-terms/) — Thirty-two terms that appear across the Journal, each defined in two sentences and linked to the article that uses it with real numbers. Where a term has a specific meaning on this site, the definition says so.
- [Designing Koban Flip: every face is fixed when you buy the coin](https://betkyo.com/en/blog/designing-koban-flip-every-face-is-fixed-when-you-buy-the-coin/) — A coin flip is the simplest game there is, which makes it the hardest to design honestly: there is nowhere for a house edge to hide except in plain sight. Koban Flip pays ×1.96 on a fair coin, lets you ride a streak up to ten flips, and derives every face of the ride from one seed the moment you buy the first coin. Here is what each of those choices costs and why.


## FAQ

**Can I try Dice for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the top payout in Dice?**

The maximum multiplier is ×49.5, at the tightest roll-under target the game offers.

**Is Dice provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/dice/](https://betkyo.com/en/guide/dice/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
