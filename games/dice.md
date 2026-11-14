# Dice

Dice is the purest expression of a crypto original: pick a target, roll under it, get paid. The lower your target, the rarer the win and the bigger the multiplier — up to ×49.5.
Rounds resolve instantly: one roll, one result, fixed by the committed seed pair before you roll.

## How a round works

1. Set your bet amount.
2. Choose your roll-under target — the payout multiplier updates live as you move it.
3. Roll. If the result lands under your target, you win the shown multiplier.
4. Every roll in your round history carries its commitment hash and nonce.

## How a round is derived

Every Dice round is derived from a server seed committed by SHA-256 hash before you bet, your client seed and a nonce. The open verifier implements the same derivation: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [That number again, priced: 119 dice rolls, 8 roulette spins and the birthday problem](https://betkyo.com/en/blog/that-number-again-priced-119-dice-rolls-8-roulette-spins-and-the-birthday-problem/) — A number that comes back feels like a message. On a 37-pocket wheel it is the default: some number has more likely than not repeated by the eighth spin, and almost every 16-spin history strip shows one. Here are the main kinds of repeat, priced exactly from our own dice and roulette engines, and the reason coincidences grow with the square of a session’s length.
- [The longest losing streak, priced: what 100, 1,000 and 10,000 dice rolls will show you](https://betkyo.com/en/blog/the-longest-losing-streak-priced-what-100-1000-and-10000-dice-rolls-will-show-you/) — Ten losses in a row at a coin-flip bet sounds like a sign that something is wrong. Across a thousand rolls it is closer to a coin flip itself: 41 %. This piece prices the longest losing run you should expect at every common dice target, exactly, from the engine’s own odds — and shows why the number grows so slowly with the number of rolls, and why it matters most to anyone who doubles after a loss.
- [Dice, priced exactly: the true win chance and return behind every target](https://betkyo.com/en/blog/dice-odds-priced-the-true-win-chance-and-return-behind-every-target/) — A dice screen shows two numbers, a win chance and a multiplier, and multiplying them gives 99% — at some targets. The roll has 9,999 possible results, not 10,000, and the multiplier is cut to two decimals, so the real return moves between 98.03% and 99.00% depending on where the target sits. Here is the exact price of every setting, and the one habit that avoids nearly all of the difference.
- [How long $100 lasts, priced: the median number of $1 bets at dice ×2, dice ×10 and limbo ×100](https://betkyo.com/en/blog/how-long-100-dollars-lasts-priced-the-median-bet-count-at-x2-x10-and-x100/) — Divide $100 by a cost of about a cent a bet and you get roughly 10,000 bets: close to the true average, and further than most bankrolls ever get. Played $1 at a time until it is gone, half are spent by bet 6,712 at dice ×2, 1,940 at dice ×10 and 200 at limbo ×100. Here is the whole distribution, exactly, and why a long shot changes the shape of a session far more than its price.
- [An AI host that is not allowed to say a number: how Betkyo’s Telegram chat turns a sentence into a bet](https://betkyo.com/en/blog/an-ai-host-that-is-not-allowed-to-say-a-number-how-betkyos-telegram-chat-turns-a-sentence-into-a-bet/) — Ask a chat AI for a number and it will give you one, whether or not it knows. That is a charming flaw in a trivia game and a disqualifying one anywhere near money. So the AI in Betkyo’s Telegram chat has one job, reading what you meant, and one thing it is never allowed to do.
- [Your balance, your deposits, your wins — in the chat: Betkyo in Telegram](https://betkyo.com/en/blog/betkyo-in-telegram-your-balance-your-deposits-your-wins-in-the-chat/) — A casino you have to go and look at is a different thing from one that lives in a chat you already have open. This is what changes when it does: money events arrive as confirmations instead of being looked up, a bet is a card you read before you place it, the chat answers plain English, and the first roll costs nothing and needs no account.
- [How many bets before the edge shows, priced: the 40,000 rolls that hide a 1% house edge](https://betkyo.com/en/blog/how-many-bets-before-the-edge-shows-priced-the-40000-rolls-that-hide-a-1-percent-house-edge/) — A 1% house edge is not something a player can see. Each roll swings a hundred times more than it costs, and the swing only shrinks relative to the cost as the square root of the number of bets. On a ×1.98 coin flip the expected loss does not clear two standard deviations until about 40,000 rolls; on a ×100 limbo target it takes 3.9 million. Here is the exact number for every setting, what it is in hours, and why the house never has to wait.
- [The price of an hour: what each game costs per hour at your stake and pace](https://betkyo.com/en/blog/the-price-of-an-hour-what-each-game-costs-per-hour-at-your-stake-and-pace/) — A house edge is a price per bet. Multiply it by your stake and by how many bets an hour you make and you get the only number that compares games honestly: dollars per hour. At $10 a bet, a 1% game at a steady pace costs about the same as a coffee; the same stake on Double costs a dinner. Here is the table, with the communal games’ round timers read from the engines.


## FAQ

**Can I try Dice for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**What is the top payout in Dice?**

The maximum multiplier is ×49.5, at the tightest roll-under target the game offers.

**Is Dice provably fair?**

Yes. Every Betkyo original commits to its randomness before you bet: a server seed fixed by its SHA-256 hash and mixed with your own client seed, or, for the shared-round games, a hash chain published in advance. The fairness page explains the exact scheme.


Guide on the site: [https://betkyo.com/en/guide/dice/](https://betkyo.com/en/guide/dice/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
