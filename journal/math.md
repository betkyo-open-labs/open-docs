# Math of Luck — summaries

Short answers from the Betkyo Journal's Math of Luck category. Each entry is the article's own summary; the full derivation, tables and sources are on the linked page.

## [Omikuji, priced: six fortunes, a 30.9% hit rate, and the two-大吉 card that pays nothing](https://betkyo.com/en/blog/omikuji-priced-six-fortunes-a-30-9-percent-hit-rate-and-the-two-daikichi-card-that-pays-nothing/)

_2026-10-11 · 6 min_

Omikuji pays when three matching fortune glyphs appear on the nine-cell card. The tiers and their exact odds: **大吉 ×100 at 1 in 1,000**, **中吉 ×20 at 1 in 167**, **小吉 ×8 at 1 in 50**, **吉 ×4 at 1 in 22**, **半吉 ×2 at 1 in 10**, **末吉 ×1.5 at 13.7%**. Some tier hits on **30.9% of cards**; the return is **96.55%**, a **3.45% house edge** — $34.50 per 100 cards at $10, between Bingo and Tairyō on the per-hundred table. The ×1.5 tier contributes more of the return (20.55 points) than the ×100 jackpot (10 points). And the near miss is structural: a card has nine cells and seven glyph kinds capped at two each, so **every losing card shows at least two pairs**, and **46% of losing cards show two 大吉** — 31.8% of all cards, against 0.1% that actually pay ×100.

## [The price of an hour: what each game costs per hour at your stake and pace](https://betkyo.com/en/blog/the-price-of-an-hour-what-each-game-costs-per-hour-at-your-stake-and-pace/)

_2026-10-08 · 6 min_

Expected cost per hour = **stake × bets per hour × house edge**. Per 100 bets of $10 that is **$10 on dice, limbo, plinko, hi-lo and crash targets (1%)**, **$10.60 on baccarat Banker**, **$15 on RPS**, **$20 on Koban Flip**, **$26–28 on Chinchiro, roulette and Sic Bo Big/Small**, **$33–42 on the slots** (Bingo, Tairyō, Hanabi) and **$67 on Double**. The communal games set the pace for you: a Crash round averages **28 s** (10 s betting, ~14 s flight, 3 s break), so $10 a round costs about **$13 an hour**; Wheel runs ~183 spins an hour (**$19**), a Dragon Road seat ~141 hands (**$16**), and Double ~193 spins — **$128 an hour** at the same stake, because its 6.67% edge is paid every 19 seconds. Self-paced games cost whatever pace you set: dice at one bet every four seconds is 900 bets an hour, **$90 an hour at $10** and **$9 at $1**.

## [Doubling $100, priced: the chance of doubling before busting at every stake, every edge and every odds](https://betkyo.com/en/blog/doubling-100-dollars-priced-the-chance-of-doubling-before-busting-at-every-stake-and-edge/)

_2026-10-07 · 7 min_

With a **1% edge** even-money bet (our dice at 50%, ×1.98) one all-in bet reaches $198 **49.995%** of the time; betting to reach **$200** at a fixed stake, the chance is **42.2%** at $10 a bet, **25.9%** at $2, **11.2%** at $1 and **1.6%** at 50 cents. The house edge is paid per bet, so the more bets a session takes, the more of it you pay: at $1 a bet the session lasts about **7,600 bets** on average. At a **2.6% edge** (Chinchiro) $1 bets double you **0.55%** of the time; at **2.78%** (Sic Bo Big/Small) **0.41%**. Odds matter too: at $1 a bet on dice, a **1-in-100 shot at ×100** doubles you **41%** of the time against the coin flip’s 11%, because it settles the question in far fewer bets. The only number that does not change is the average: every path returns 99 cents on the dollar wagered.

## [Chinchiro, priced: the dealer rolls first, the no-hand push, and the exact 2.616% edge](https://betkyo.com/en/blog/chinchiro-priced-the-dealer-rolls-first-and-the-push-that-makes-a-2-6-percent-edge/)

_2026-10-06 · 7 min_

One roll of three dice makes a **point** 5 times in 12, **no hand** 1 time in 2, and a special 1 time in 12. With up to three attempts a side ends with a point **72.9%** of the time, no hand **12.5%**, shigoro or hifumi **4.86%** each, arashi **4.05%**, pinzoro **0.81%**. The dealer rolls first: 9.7% of rounds end in an instant loss on a dealer special, 4.9% in an instant ×3 on dealer hifumi, 12.5% in a **push** on dealer no-hand, and 72.9% in a duel against a dealer point that you beat **40.1%** of the time. Summed over every pair of hands the return is **97.38%** — a house edge of **2.616%**. Under the street rule where a dealer no-hand loses, the same table returns **109.88%** to the player; the push is the whole difference.

## [Mines, priced: every multiplier for 1 to 24 mines, the 1% that does not compound, and the first pick that returns 97.5%](https://betkyo.com/en/blog/mines-odds-priced-every-multiplier-for-1-to-24-mines-and-the-first-pick-that-returns-97-5/)

_2026-09-30 · 7 min_

The mines are placed uniformly by the round’s seed pair, so **which tile you pick never matters** — only how many you have opened. After k safe picks with m mines the fair multiplier is **C(25, k) ÷ C(25 − m, k)**, and the engine pays that number floored to two decimals, times 0.99, floored again. Because every rung is priced the same way, the return **does not fall as you go deeper**: cash out after one tile or clear the board and the house keeps about 1% either way — the opposite of a streak game like RPS, where each extra win compounds the edge. The two floors are the whole exception: on small multipliers they cost more than the 1%. **One mine, two picks** pays ×1.06 for a 92% chance and returns **97.52%**, the worst cell in the table; 32 of the 300 mine-and-pick settings return under 98.5%, and 171 round to 99.0%.

## [Rock, paper, scissors, priced: the ×1.97 win, a 1.5% edge per win, and how it compounds](https://betkyo.com/en/blog/rps-priced-the-1-97-win-a-1-5-percent-edge-per-win-and-how-it-compounds/)

_2026-09-29 · 6 min_

The dealer’s hand is a uniform draw from the round’s seed pair, so any throw you choose wins, draws and loses **one time in three**. A draw replays, so the run is decided by the first non-draw: a **coin flip**, 50/50. A win pays **×1.97**, which returns **98.5%** — a house edge of **1.5% per win**, not the 1% the formula was built around (that 1% counts each draw as a round that returned your stake). Every further win multiplies the stake by 1.97 again at the same 50% odds, so the edge compounds: cashing out after **2 wins** (×3.88) returns **97.0%**, after **5** (×29.67) **92.7%**, after **10** (×880.36) **86.0%**. The best price in the game is to bank ×1.97 on the first win and start again.

## [Tairyō, priced: 29% from the reels, 67% from one spin in 386](https://betkyo.com/en/blog/tairyo-priced-29-percent-from-the-reels-67-from-one-spin-in-386/)

_2026-09-28 · 8 min_

Tairyō’s base game returns **29.41%** of the stake from line wins — computed exactly from the reel strips — and nothing else. The other two-thirds comes from free spins, which start when all three of reels 2–4 show a scatter: **1 spin in 385.8**. A free-spin round is worth about **×258** the bet on average, so the total return is about **96.2–96.4%**, above the 95.2% the engine’s own comment records. The round is lopsided: the middle one pays **×56**, **21%** pay under ×10, **4.6%** pay ×1,000 or more and **0.2%** hit the **×2,100** cap. In **77%** of 100-spin sessions the feature never comes, and those sessions return about 29%. Buying the round costs **270×** for about 258× of value (about **95.5%**), and the super buy **720×** for about 686× (**95.3%**) — slightly worse than earning it.

## [Dragon Road, priced: 2,000 tables, four 21-hand streaks a day, and the next hand at 45.86%](https://betkyo.com/en/blog/dragon-road-priced-2000-tables-four-21-hand-streaks-a-day-and-the-next-hand-at-45-86/)

_2026-09-27 · 8 min_

Every Dragon Road round is dealt from a **fresh eight-deck shoe**, so hands are independent: Banker wins **45.86%**, Player **44.62%**, Tie **9.52%**, and ties do not break a streak. That makes a streak’s next decision Banker **50.68%** of the time, whether the streak is two hands long or twenty-one. The fleet deals about **14.2 million rounds a day** across **2,000 tables**, which produces about **4 Banker streaks of 21 or more a day** and **2 Player streaks**; a single table sees a 21-hand Banker streak about once in **490 days**. Within one table’s 90-round road, a Banker run of six or more appears **50%** of the time and ten or more **4%**. The lobby holds the **24 longest** streaks with dealing paused, so the wall always shows 19- to 21-hand dragons: that is selection from 2,000 tables, not a table running hot. The edges are unchanged: Banker **1.06%**, Player **1.24%**, Tie **14.36%**, pairs **10.36%**.

## [Hanabi, priced exactly: every symbol, the free-spin ladder and the 95.81% return](https://betkyo.com/en/blog/hanabi-odds-priced-exactly-every-symbol-the-free-spin-ladder-and-the-95-81-return/)

_2026-09-26 · 8 min_

Hanabi returns **95.81%** of the stake, computed exactly from its symbol weights, not simulated; the engine header’s **96.1%** was simulation noise and the in-game guide now shows the exact figure. Line wins supply **66.17%**, scatter pays **2.87%** and the free-spin feature **26.77%**. The feature triggers on **1 base spin in 83.8**, lasts **10.5 spins** on average and pays **×22.44** the bet on average but **×16.8** in the middle case. About **33.4%** of spins pay something, but **11.7%** pay less than the bet, so only **21.7%** return at least the stake. Over 100 spins the expected loss is **4.2 bets**; a session ends ahead **36%** of the time and the median session is **12.9 bets** down.

## [Dice, priced exactly: the true win chance and return behind every target](https://betkyo.com/en/blog/dice-odds-priced-the-true-win-chance-and-return-behind-every-target/)

_2026-09-25 · 7 min_

Each roll is one of **9,999 equally likely results, 0.01 to 99.99**. Roll under 50 wins on 4,999 of them, so the true chance is **49.995%**, not 50%, and a result of exactly 50.00 loses both Under and Over. The multiplier is 0.99 ÷ the shown chance **floored to two decimals**. Where that division lands exactly, as at 50 (×1.98), 25 (×3.96) or 10 (×9.90), the true return is **98.91–99.00%**; where it does not, the floor adds cost — **target 80 pays ×1.23 and returns 98.40%**, and **97.06 pays ×1.01 and returns 98.03%**, the worst setting on the slider. Across all 9,601 slider positions from 2.00 to 98.00 the average return is **98.72%**. **Typing the multiplier instead of dragging the slider** picks the target that prices cleanly: ×2 returns **98.99%**, ×10 **98.91%**, ×49.5 **98.51%**.

## [Bingo, priced exactly: every line count from zero to twelve and the return behind 38 balls](https://betkyo.com/en/blog/bingo-odds-priced-exactly-every-line-count-from-zero-to-twelve-and-the-return-behind-38-balls/)

_2026-09-24 · 8 min_

Solo bingo here draws **38 of 75 balls** against one 5×5 card with a free centre and pays by completed lines out of 12. Exactly: **62.82%** of cards complete no line, **28.60%** one (×1.5), **7.06%** two (×4), **1.29%** three (×12), **0.20%** four (×30), **0.029%** five (×100), **0.0041%** six (×200) and **1 in 155,000** seven or more (×500). The return is **96.66%** and the hit rate **37.18%**, a shade above the simulated 96.5% and 37.1% in the design notes. A line through the free star completes **6.07%** of the time, a line without it **2.91%**; the average card completes **0.48 lines** and has **12.2 of its 24 numbers** marked. **Eleven lines is impossible** — an unmarked number always breaks a row and a column, so counts fall two at a time — and all twelve happens once in **2.67 billion** cards.

## [Pagoda, priced: nine floors, three difficulties and the cents the ladder drops](https://betkyo.com/en/blog/pagoda-odds-priced-nine-floors-three-difficulties-and-the-cents-the-ladder-drops/)

_2026-09-23 · 8 min_

On this engine’s Pagoda a floor has **4, 3 or 2 tiles** (Easy, Medium, Hard) with exactly one trap, so a floor is cleared **75%, 66.7% or 50%** of the time and the top of nine floors is reached **7.5%, 2.6% or 0.2%** of the time — 1 in 13, 1 in 38 and 1 in 512. The ladder is **0.99 × (tiles ÷ (tiles − 1))ᵏ**, floored to cents: **Easy ×1.32 … ×13.18, Medium ×1.48 … ×38.05, Hard ×1.98 … ×506.88**. Because of the flooring the return is **exactly 99.00% on every Hard rung**, between **98.72% and 99.00%** on Easy, and between **98.67% and 98.99%** on Medium; the cheapest rungs on the board are Medium floors one and two, at 98.67%. Climbing changes swing, not price: a Hard cash-out after nine floors pays 506.88 times the stake and swings by 22 stakes per round.

## [Roulette hit rates, priced: how long a number takes and what a streak is worth](https://betkyo.com/en/blog/roulette-hit-rates-priced-how-long-a-number-takes-and-what-a-streak-is-worth/)

_2026-09-22 · 8 min_

On this engine’s European roulette every pocket lands **1 in 37** per spin. A straight-up number takes **37 spins on average but only 26 to have a 50% chance of appearing**; it is absent from **100 spins 6.5% of the time** and from 200 spins 0.4%. Red comes up **five times in a row 2.7%** of the time and **ten times in a row 0.07%**; an even-money bet loses **eight in a row 0.48%**, roughly once every 207 spins. Zero has landed at least once in 37 spins **63.7%** of the time — so it is absent from a full wheel’s worth of spins more than a third of the time. Every bet returns **97.30%**, but the swing is not the same: over 100 one-unit spins the expected loss is 2.7 units on every bet, while the standard deviation is about **10 units on red**, 14 on a dozen and **58 on a straight-up number**.

## [Wheel odds, priced: 48 slots, five multipliers and the 1% edge](https://betkyo.com/en/blog/wheel-odds-priced-48-slots-five-multipliers-and-the-1-percent-edge/)

_2026-09-21 · 8 min_

On this engine’s Wheel there are **48 slots**: **25 pay nothing, 13 pay ×1.5, 7 pay ×2, 2 pay ×3 and 1 pays ×8**. The wheel lands on a paying slot **23 times in 48, 47.92%**, and on the ×8 **once in 48, 2.08%**. The multipliers add up to 47.5, so a spin returns **47.5 ÷ 48 = 98.96% of the stake** and the house edge is **1.04%** — close to limbo and crash, well under roulette’s 2.7%. The return is lopsided: the single ×8 slot carries a sixth of it, and a wheel without it would return 82.3%. The ×8 arrives a median of **once every 33 spins** and on average once in 48; **36% of 48-spin sessions never see it**. A round is about **19.7 seconds**, so an hour is close to 183 spins and a flat one-unit stake costs about **1.9 units an hour** on average, against a swing of roughly 19 units.

## [Double odds, priced: red, black and the ×14 green](https://betkyo.com/en/blog/double-odds-priced-red-black-and-the-14x-green/)

_2026-09-20 · 8 min_

On this engine’s Double the wheel has **15 tiles**: **7 red, 7 black and 1 green**. Red or black wins **7 in 15, 46.67%**, and pays **×2**; green wins **1 in 15, 6.67%**, and pays **×14**. Both work out to the same return, **14 ÷ 15 = 93.33% of the stake**, so the house edge is **6.67% on every colour** — green is not the bad bet, it is the same bet with fifteen times the swing. Staking two colours at once hedges the swing but not the price: red and black together still return 93.33% and lose both stakes on the one green in fifteen. Green shows up a median of **once every 11 rounds** and on average once in 15; the chance of no green in 30 rounds is **12.6%** and in 100 rounds **0.10%**. A round lasts about **18.7 seconds**, so an hour is close to 192 spins, and a flat one-unit bet on any colour costs about **12.8 units an hour** on average.

## [Crash odds, priced: the chance of every cash-out target](https://betkyo.com/en/blog/crash-odds-priced-the-chance-of-every-cash-out-target/)

_2026-09-19 · 9 min_

On this engine a crash bet with an auto cash-out at target x is paid when the round busts **strictly above** x, and the chance of that is exactly **0.99 ÷ x**: **90.00% at ×1.10, 49.50% at ×2, 9.90% at ×10, 0.99% at ×100** and **0.0099%, one in 10,101, at ×9,999.99**, the highest target that can ever pay. Multiply by the payout and every target returns **99.00%** — a flat 1% house edge, the same as limbo. The bust itself lands on **×1.00 in exactly 1% of rounds**, between ×1.01 and ×1.99 in 49.25%, at ×10 or higher in 9.90%, and on the ×10,000 cap once in 10,101. The curve doubles every ten seconds, so ×2 arrives at 10.0 s, ×10 at 33.2 s and ×100 at 66.4 s; the median round ends just under ten seconds in.

## [Limbo odds, priced: the win chance behind every target multiplier](https://betkyo.com/en/blog/limbo-odds-priced-the-win-chance-behind-every-target-multiplier/)

_2026-09-18, revised 2026-09-25 · 8 min_

On this engine’s limbo the win chance at any target is **99 divided by the target**: **90.00% at ×1.10, 49.50% at ×2, 9.90% at ×10, 0.99% at ×100** and **0.0099%, one in 10,101, at the ×10,000 cap**. Because the target is also the payout, every target returns exactly **99.00% of the stake** and the house edge is **1.00% at every multiplier**, from ×1.01 to ×10,000 — no target is better value than another, only more volatile. The rounding in the engine’s formula changes the number you see, not the odds you get. The number lands below ×1.01, where nothing can win, **1.98% of the time**; its median is **×1.98**; it reaches ×10 or more once in ten rounds and ×100 or more once in a hundred. Chasing ×100 at one bet a round, you have a **63% chance of at least one hit in 100 rounds** and a 5% chance of none in 300.

## [Keno odds, priced: the chance of every hit count from one pick to ten](https://betkyo.com/en/blog/keno-odds-priced-the-chance-of-every-hit-count-from-one-pick-to-ten/)

_2026-09-17 · 9 min_

On this engine’s keno — **40 numbers, 10 drawn without replacement, up to 10 picks** — the chance of any hit count depends only on how many numbers you mark, never on which ones or which risk level. **You hit one quarter of your picks on average**: a ten-pick ticket averages 2.5 hits and lands on exactly two 31.07% of the time. Missing everything runs from **75.00% with one pick to 3.54% with ten**. Hitting every number you marked is **1 in 4 for one pick, 1 in 2,611 for five, 1 in 18,278 for six and 1 in 847,660,528 for ten**. The ×1,000 top cell on a ten-pick ticket is therefore worth **0.00012% of the stake** — about one ten-thousandth of one percent — and the other 99% of the return is paid out of the ordinary hit counts. All forty payout tables return between **98.65% and 99.07%**; the risk level moves how often a ticket beats its stake (from 1.21% to 79.58%), not the odds of hitting.

## [Hi-Lo, priced: the exact odds behind every card and every button](https://betkyo.com/en/blog/hi-lo-odds-priced-every-rank-every-button/)

_2026-09-16, revised 2026-09-18 · 8 min_

Hi-Lo deals one card drawn uniformly from thirteen ranks, and suits never matter. **“Higher or same” on a card of rank r wins (14 − r) times in 13, and “Lower or same” wins r times in 13** — the current rank pays on both sides, which is why the two figures add up to more than one. At an Ace or a King that overlap is split out into a **“Same” button worth 1 in 13**. The fair price of any call is exactly **13 ÷ (number of winning ranks)**, and since version 3 of the engine that exact figure is what a run accumulates: the payout is the product of the exact step odds times the configured return, floored **once** at four decimals. At the 1% setting every button costs **between 1.0000% and 1.0038%** of the stake, whichever side you call, and a run of ten straight ×1.08 calls reaches **×2.2042 with a 44.91% chance at a 1.0012% edge** — the ladder no longer gets dearer as it climbs. Skipping a card is free, limited to 52 per run, and changes nothing about the card that follows.

## [Baccarat, priced: what Banker, Player, Tie and the pair bets cost](https://betkyo.com/en/blog/baccarat-house-edge-priced-banker-player-tie-and-the-pair-bets/)

_2026-09-15 · 8 min_

On this engine’s baccarat — standard punto banco drawing rules, **Player 1:1, Banker 0.95:1, Tie 8:1, either pair 11:1**, ties returning Player and Banker stakes — the demo deal draws every card independently, and on that deal the exact odds are **Banker 45.84%, Player 44.61%, Tie 9.54%**. That makes the house edge **1.06% on Banker, 1.23% on Player, 14.12% on Tie and 7.69% on each pair bet**. Banker wins more often because it draws its third card after seeing Player’s; paid even money it would return **+1.23%** to the player, so the 5% commission is what turns it into a house bet — any commission above **2.68%** does. A standard eight-deck shoe moves the Banker and Player figures by less than a hundredth of a point but raises the pair bet’s edge to **10.36%**. Banker is the cheapest spot on the table; every spot still costs money.

## [The martingale, priced: what doubling after a loss really buys on a single-zero wheel](https://betkyo.com/en/blog/the-martingale-priced-doubling-on-a-single-zero-wheel/)

_2026-09-14 · 8 min_

The martingale doubles the stake after every loss on an even-money bet, so the first win recovers all previous losses plus one unit. On this engine’s **single-zero roulette** (red, black, odd, even, low and high win **18 of 37** and pay ×2) the arithmetic is exact: **a series of 10 doublings needs a bankroll of 1,023 units, busts once in about 784 series, and loses 0.31 units per series on average.** A session aiming for **+100 units** with that bankroll **succeeds 88.0% of the time**, and its expected result is still **−28.7 units**, because the 12% of sessions that bust lose far more than the others win. Losing streaks are not rare: **a run of 10 or more losses happens somewhere in 1,000 spins 46.2% of the time.** Every version of the system, at any depth, loses exactly **1/37 — 2.70% — of the total amount it stakes**; doubling changes how the loss is distributed, never its size.

## [Blackjack basic strategy, priced: the exact chart for this table’s rules](https://betkyo.com/en/blog/blackjack-basic-strategy-chart-priced-on-an-infinite-shoe/)

_2026-09-14 · 10 min_

For this engine’s rules — **infinite shoe, dealer stands on all 17s, blackjack pays 3:2, double on any first two cards including after a split, one split, split aces get one card, dealer peeks, no surrender** — the correct play is: **stand on hard 17 and up; stand on 13 to 16 against a dealer 2 to 6 and hit them against 7 or higher; stand on 12 only against 4, 5 and 6; double 11 against everything but an ace, 10 against 2 to 9, and 9 against 3 to 6; always split aces and eights; never split tens or fives.** Played exactly, the game returns **99.43%** of what is staked, computed for this article. The closest call on the chart is **hard 16 against a ten**: hitting loses 0.5398 of a bet on average and standing 0.5404, a difference of six ten-thousandths. The most expensive common mistakes cost far more: splitting tens against a six gives up 0.128 of a bet each time, and standing on soft 18 against a nine gives up 0.083.

## [Low pair or high cards: the video poker hold, priced on the 8/5 table](https://betkyo.com/en/blog/low-pair-or-high-cards-the-video-poker-hold-priced-on-the-8-5-table/)

_2026-09-13 · 8 min_

On this engine’s **8/5 Jacks or Better** table, the expected value of each hold, computed by enumerating every possible draw: **a low pair (sixes) returns 0.81 units** against **0.49 for keeping a king and a queen** instead; **a pair of jacks returns 1.53** against **1.06 for breaking it to draw at a four-flush**; **a made flush returns 5.00** against **1.31 for three to the royal**; and **four to the royal returns 19.45**, which beats keeping a **made straight at 4.00** but not a **made straight flush at 50**. Two pair (2.51) beats holding either pair alone (0.82); a full house (8.00) beats holding the trips (4.25). None of these are opinions: the deck has 47 unseen cards and the draws are countable, so each number is the average payout over every draw, weighted equally. The gap between the right hold and the tempting one is typically 0.3 to 0.5 units per hand, which on a game that returns about 97.3% at best is the difference between the published price and a much worse one.

## [Glossary: casino math and provably fair terms, defined in two sentences each](https://betkyo.com/en/blog/glossary-of-casino-math-and-provably-fair-terms/)

_2026-09-12 · 10 min_

The words that do the work in gambling mathematics are few. **Return to player (RTP)** is the average share of stakes a game pays back; the **house edge** is one minus that. **Volatility** is how far individual results spread around the average, and it is the thing a “risk level” changes when the return does not. **Provably fair** is a commitment scheme: the house publishes a **hash** of its **server seed** before play, you supply a **client seed**, a **nonce** counts rounds and a **cursor** counts draws within a round, and after the seed is revealed every result can be recomputed. **Variance**, **expected value**, **risk of ruin** and the **Kelly criterion** describe what happens to a bankroll over many rounds. The rest of this page defines each of these and the terms around them, with a link to where the Journal uses the number.

## [Dealer bust odds by upcard, on an infinite shoe](https://betkyo.com/en/blog/dealer-bust-odds-by-upcard-on-an-infinite-shoe/)

_2026-09-11 · 8 min_

On this engine every blackjack card is drawn independently with each rank equally likely and tens four times as likely, an **infinite shoe**, and the dealer **stands on all 17s**. Under those rules the dealer’s chance of busting from each upcard is exact: about **35% from a 2**, rising to **42% from a 6**, then falling sharply to **26% from a 7**, **21% from a 10** and **12% from an ace**. Across all upcards the dealer busts on about **28%** of hands. The cliff between 6 and 7 is the whole shape of basic strategy: against a 2 to 6 the dealer is likely to bust, so a player with a stiff hand stands and lets it happen; against a 7 or higher the dealer usually makes a hand, so the player must take a card even at the risk of busting. Those player risks are exact too: hitting a hard 16 busts **61.5%** of the time, a hard 12 **30.8%**. Nothing in the table depends on what was dealt before, because an infinite shoe has no memory, which is also why [counting has nothing to count here](https://betkyo.com/en/blog/mit-blackjack-team/).

## [Casino Hold’em priced: the qualifying rule and the ante bonus](https://betkyo.com/en/blog/casino-holdem-priced-the-qualifying-rule-and-the-ante-bonus/)

_2026-09-11 · 8 min_

In **Casino Hold’em** you post an **ante**, receive two cards against the dealer’s two, see a three-card flop, and then either **call for twice the ante** or fold. The turn and river are dealt only if you call. Two rules set the price. First, the **dealer must qualify with a pair of fours or better**; if the dealer does not, your ante is paid by the **bonus table** and the call is returned, whatever you hold. Second, when you win a qualified showdown the ante is paid by the same bonus table rather than at even money: **×101 for a royal flush, ×21 for a straight flush, ×11 for four of a kind, ×4 for a full house, ×3 for a flush, ×2 for a straight or less**, all total-return, with the call paid at 1:1 on top. A tie pushes both bets. The engine header states a **house edge of about 2.2%** of the ante with sound calling. On this site every card of the hand comes from one seed pair and nonce in a fixed order, player, player, dealer, dealer, flop, turn, river, and the turn and river cursors are only read if you call, so a folded hand can still be fully replayed after the seed is revealed.

## [Plinko, priced: why the middle bucket pays ×0.2 and the edge pays ×1,000](https://betkyo.com/en/blog/plinko-priced-the-binomial-behind-every-board/)

_2026-09-04 · 9 min_

A Plinko ball bounces left or right at every row with equal chance, so the bucket it lands in is a **binomial count**: on a board with n rows, bucket k is reached with probability **C(n, k) ÷ 2ⁿ**. On the 16-row board the centre bucket takes **19.6%** of drops and each ×1,000 edge bucket **1 in 65,536**. Weighting the engine’s multiplier tables by those probabilities, **every one of the 27 boards returns about 99%** of what is dropped — the risk setting changes how the 1% is collected, not how much. Low risk pays close to ×1 most of the time; high risk pays ×0.2 on most drops and hands the difference to the edges. The multipliers are read from the game source (plinko/plinkoApi.ts); the probabilities are arithmetic.

## [Sic Bo’s cheapest bet and its dearest: Big, Small and the triple tax](https://betkyo.com/en/blog/sic-bo-big-small-and-the-triple-tax/)

_2026-09-03 · 8 min_

**Big** and **Small** are the cheapest bets on a Sic Bo table and every other box is worse. Both pay **×2** total return and lose on any triple, so they win on **105 of the 216** possible rolls (48.61%) and return **97.22%** — a house edge of **2.78%**. That entire edge is the six triples: without the “lose on any triple” rule the bets would win exactly half the time and return 100%. The dearest boxes are the totals of **9 and 12** and the **doubles**, at about **81%** return. Every multiplier here is read from the engine source (`sicbo/derive.ts`), where the paytable is stated as Macau-standard.

## [3:2 or 6:5: the one number that decides a blackjack table](https://betkyo.com/en/blog/three-to-two-or-six-to-five/)

_2026-09-01 · 9 min_

A natural blackjack pays **3:2** here — ×2.5 on your stake. Tables paying **6:5** hand back ×2.2 for the same hand. That gap looks like a detail and is the single most expensive rule in the game: on our engine’s infinite shoe a natural arrives on **8/169 of hands (4.73%)**, so paying 6:5 instead of 3:2 costs **0.3 × 4.73% ≈ 1.42% of every initial stake** — roughly triple the entire house edge of a good 3:2 game. The engine’s rules are printed in its header: dealer stands on all 17s, doubles on any first two cards, one split, no insurance, no surrender, **about 99.5% with basic play**.

## [The price of one more flip: how a 2% fee becomes 18%](https://betkyo.com/en/blog/the-price-of-one-more-flip/)

_2026-09-01 · 8 min_

A fair coin paid at **×1.96 instead of ×2** costs you 2% on one flip. But a streak game multiplies, so the fee multiplies with it: after ten straight calls the ladder pays **×836.68** where a fair coin would pay ×1,024 — **81.71% of fair value, an 18.3% cost**. The arithmetic is just 0.98 raised to the tenth power. Every rung you climb is priced the same way, which means the decision to ride on is never neutral even though each individual flip looks nearly free.

## [Why ten mines pays the same as fifteen: the ×3,236,072 full clear](https://betkyo.com/en/blog/the-biggest-number-on-the-site/)

_2026-09-01 · 8 min_

Fugu’s multiplier is the **inverse of your survival probability, times 0.99**. For a full clear, that probability is 1 over the number of ways to place the mines — so the payout is **C(25, m) × 0.99**. Because C(25,10) and C(25,15) are both 3,268,760, ten mines and fifteen mines pay the identical **×3,236,072.40**. The same symmetry pairs 5 with 20 (×52,598.70) and 1 with 24 (×24.75). And because the formula divides 0.99 by the odds at every step, **every pick costs the same 1%** — the mine count changes the ride, never the price.

## [8/5 Jacks or Better: the one game here you can play wrong](https://betkyo.com/en/blog/nine-six-jacks-or-better/)

_2026-08-31, revised 2026-09-13 · 9 min_

Our video poker is **“8/5” Jacks or Better**: the full house pays ×8 and the flush ×5, the two cells that name the format, up to a **×800 royal flush** — and the engine header puts the return at **about 97.3% with optimal play**. Until 10 September 2026 the demo dealt the full-pay 9/6 table (about 99.5%); the engine changed, so this article changed with it. The qualifier is still the whole game. Video poker is the only original in this catalog where a decision after the bet — which of the five cards to hold — changes the return, and consistently wrong holds can cost several points of it. The paytable is on screen; the strategy is on you.

## [What a keno risk level actually changes — and what it does not](https://betkyo.com/en/blog/what-a-keno-risk-level-changes/)

_2026-08-28 · 9 min_

The risk level does **not** change how likely you are to hit numbers, and it barely changes what the game returns: all forty payout tables in our engine compute to between **98.65% and 99.07%** of stake. What it changes is the shape of the outcome. Picking six numbers, **Low** returns more than your stake on 47.40% of tickets and **High** on 2.58%, and the standard deviation of the payout runs from 1.69 to 16.45 stakes across the same four levels. You are choosing volatility, not value.

## [Risk of ruin: why a 99% game still empties a bankroll](https://betkyo.com/en/blog/risk-of-ruin/)

_2026-08-07 · 8 min_

House edge is the **speed** you lose at; variance is the **spread** around that speed — and ruin is decided by the spread. A game returning 99% is not gentle if you are betting a fifth of your bankroll a spin: you can go broke long before the 1% ever matters. The two levers that actually move your survival odds are **bet size relative to bankroll** and **number of bets**, and only one of them is under your control after you sit down.

## [What ×1000 leverage actually means: the one number that decides everything](https://betkyo.com/en/blog/what-1000x-leverage-actually-means/)

_2026-08-07 · 9 min_

Leverage does not change your odds; it changes **how far the price may move before you are out**. Your liquidation price sits **1 ÷ leverage** away from entry — 50% away at ×2, 1% away at ×100, and **0.1% away at ×1000**. That is the whole mechanism. Everything else people say about leverage is a consequence of that one fraction, including the fact that your loss can never exceed the amount you put in.

## [The Kelly criterion: the formula that tells most gamblers to bet nothing](https://betkyo.com/en/blog/bet-sizing-and-the-kelly-criterion/)

_2026-08-07 · 7 min_

Kelly gives the fraction of a bankroll to stake that maximises long-run growth: **f\* = (bp − q) ÷ b**, where b is the odds received, p your chance of winning and q = 1 − p. It only ever returns a positive fraction when you hold an **edge**. On a house game you do not, so the formula returns **zero or negative** — the mathematically optimal stake is nothing. That is not a trick answer; it is the reason casino play should be budgeted as entertainment rather than sized as an investment.

## [Andar Bahar’s random ×5 boosts don’t change the house edge — here’s the proof](https://betkyo.com/en/blog/andar-bahar-boost-math/)

_2026-07-24 · 8 min_

The boosts are already priced in. Bets lock **before** the boosts are revealed, the boost draw is independent of the race, and its long-run expectation is a fixed **×1.31** — so the base side-bet payouts are set low on purpose, and the boosted long-run return lands at **94–97%** on every bucket, every round. Boosts change variance, never expected value.



---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
