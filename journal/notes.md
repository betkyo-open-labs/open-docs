# Game Notes — summaries

Short answers from the Betkyo Journal's Game Notes category. Each entry is the article's own summary; the full derivation, tables and sources are on the linked page.

## [Designing Koban Flip: every face is fixed when you buy the coin](https://betkyo.com/en/blog/designing-koban-flip-every-face-is-fixed-when-you-buy-the-coin/)

_2026-09-11 · 7 min_

**Koban Flip** is a call-the-face game on an Edo-period gold coin: pick omote (front) or ura (back), and a correct call multiplies the pot by **×1.96**. You can cash out after any win or ride the streak, up to **ten flips**, for a ladder that tops out at **×836.68**. The coin is fair, each face has probability one half, and the house edge is exactly the gap between ×2 and ×1.96: **2% per flip**, which is also 2% of the whole ride however long it runs. The design choice that matters most is invisible at the table: one ride is one **seed pair and nonce**, and flip i is derived from cursor i, so **every face of the ride is fixed the moment the first coin is bought**. Your calls decide whether you win; they never decide what the coin shows, and after the seed is revealed all ten faces can be recomputed whether you saw them or not.

## [Designing Fukubukuro: the lucky bag that always pays something](https://betkyo.com/en/blog/designing-fukubukuro-the-lucky-bag-that-always-pays-something/)

_2026-09-11 · 8 min_

**Fukubukuro** (福袋, “lucky bag”) is a one-draw game: pay the bag price, open it, and receive an item worth a fixed multiple of that price. There are two bags. **Ume**, the balanced bag, holds eight items from a ×0.20 hand towel to a ×100 golden maneki-neko and returns **96.6%** of the price on average. **Matsu**, the wild bag, holds seven items from ×0.10 chopsticks to a ×250 phoenix and returns **96.78%**. Every open pays something, because the cheapest item in each bag is still worth a fraction of the price; the gamble is which item, and the odds are an **integer weight table in millionths** that the engine rolls with a single number, cursor 0 of the round’s hash. Ume returns at least the price on about **26%** of opens and Matsu on about **16%**, so the two bags are two shapes at nearly the same price, exactly like [keno’s risk levels](https://betkyo.com/en/blog/what-a-keno-risk-level-changes/). The reel animation after you open is theatre; the money settled the moment the bag did.

## [A roulette bet is a string: self-describing keys and the ×36 table](https://betkyo.com/en/blog/a-roulette-bet-is-a-string-self-describing-keys-and-the-36-table/)

_2026-09-11 · 7 min_

On this site a roulette bet is a **self-describing key**: a short string such as n:17 for a straight, sp:16-17 for a split, co:16-17-19-20 for a corner, dz:2 for the second dozen or ev:red for red. The engine decodes each key into the set of pockets it covers, checks that the set is the right size for its kind and lies on the table, and settles the spin by asking one question per key: is the pocket in the set? The multipliers are total-return and match the standard European table, ×36 for a straight down to ×2 for an even chance, and they share one property that the design makes visible: **multiplier × pockets covered = 36 for every kind of bet**. On a single-zero wheel with 37 pockets that means every bet, from a straight to red, returns 36 ÷ 37 = **97.30%** and carries the same **2.7%** edge, including the first-four bet that on other layouts is the worst on the table. The pocket itself is floor(u × 37) from cursor 0 of the round’s hash, so one spin settles any number of keys at once.

## [Designing Bingo: 38 balls, 12 lines, and why the centre star is worth a whole ball](https://betkyo.com/en/blog/designing-bingo-38-balls-12-lines/)

_2026-09-07 · 9 min_

**Bingo** here is 75-ball solo bingo: one 5×5 card, a free centre, **38 balls drawn** from 75, and a payout that depends on **how many of the 12 lines** (5 rows, 5 columns, 2 diagonals) are complete. Completing 1 line returns **×1.5**, 2 lines **×4**, 3 **×12**, 4 **×30**, 5 **×100**, 6 **×200** and 7 or more **×500**. Every number on the card is drawn with probability **38/75 = 50.67%**, so a line that avoids the centre completes about **2.9%** of the time and a line through the free star about **6.1%**: the star is worth one ball. The engine header reports, from a million simulated rounds, that **62.9%** of cards complete no line, **28.6%** one, **7.05%** two, and that the game returns **about 96.5%** with a **37.1%** hit rate. The card and the balls come from the same committed seed pair as every other original, so a round can be replayed exactly.

## [Designing Hanabi: a slot whose free spins build ×1, ×2, ×3, ×5 — and what its source file admits](https://betkyo.com/en/blog/designing-hanabi-the-firework-ladder/)

_2026-09-03, revised 2026-09-26 · 9 min_

**Hanabi** (花火) is a 5×3, ten-line festival slot whose every reel stop is one weighted draw from the committed seed pair. The nine symbols carry weights of **3, 2, 4, 5, 6, 8, 9, 12, 12** (61 in total), so a 祭 scatter lands on any given cell with probability 2/61 and three or more of them on a base spin — the free-spin trigger — happens on about **1 spin in 84**, which is the “≈ 1 in 83” the engine header measured. The feature starts at **10 free spins**, retriggers add 4 up to a cap of **22**, and the win multiplier climbs through the feature: spins 1–2 pay **×1**, 3–4 pay **×2**, 5–7 pay **×3**, and every spin from the eighth onward pays **×5**. A round can never return more than **×2,000** the total bet. The header states the calibrated return as **96.1%** with a **33.5%** hit rate; those two figures come from the engine’s own three-million-round simulation, not from this article.

## [Two rides, two curves: what Limbo and Crash actually charge](https://betkyo.com/en/blog/two-rides-two-curves/)

_2026-09-01, revised 2026-09-19 · 9 min_

Limbo and Crash are not the same maths. **Limbo returns exactly 99% at every target** — cash out at ×1.5 or ×1,000 and the price is identical. **Crash also returns exactly 99%** once the settlement rule is applied: a cash-out pays only when the bust point is strictly above it, and under that rule the chance a target of T hundredths pays is 99 ÷ T, the same price at every target. (Corrected 2026-09-19 — the first version of this article priced Crash from the chance the curve *reaches* a multiplier, 99 ÷ (100x − 1), and concluded short rides were fractionally cheaper. The strict rule removes that hundredth, and with it the gap.) Neither figure is published by us as marketing: both fall straight out of the functions in the engine, which this article prints in full.

## [Designing Tairyō: what a slot’s paytable is actually promising you](https://betkyo.com/en/blog/designing-tairyo-what-a-paytable-promises/)

_2026-08-07 · 8 min_

Tairyō is a **5×3 reel game on 10 fixed paylines** with a hard win cap of **×2,100 of total bet**. The paytable pays only left-to-right from reel one, so a symbol landing on reels two to five without reel one pays nothing — which is most of what makes a spin look close and pay zero. The advertised top prize is real but rare; the numbers that decide your session are the small ones near the bottom of the table.

## [Why our fee rises with leverage — and why we show you the curve](https://betkyo.com/en/blog/why-a-fee-should-rise-with-leverage/)

_2026-08-07 · 7 min_

The house takes a share of **positive net profit only** — nothing on a loss, a liquidation or a voided position. That share **scales with the boost you chose**: 2% at ×1, rising on a log curve to 10% at ×1000. A flat rate would have made low-leverage players subsidise high-leverage ones, because a ×1000 position puts far more variance on the house than a ×2 one. The exact percentage for your rung is shown in the ticket **before** you open.

## [Designing Pagoda’s ladder: a game with no bad button](https://betkyo.com/en/blog/pagoda-design-notes/)

_2026-07-24, revised 2026-09-23 · 8 min_

Pagoda pays **exactly 99% expected return at every cash-out point** — floor one or floor nine, cautious or greedy, the price is identical. The trick is a single 1% haircut on an otherwise fair ladder: each floor multiplies by t/(t−1) (the fair odds of dodging one trap among t tiles), and 0.99 is applied **once**, not per floor. Climbing changes your variance, never your expected value.



---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
