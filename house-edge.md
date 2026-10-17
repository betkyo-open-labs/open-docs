# House edge of every Betkyo game

The edges below are the exact figures computed in the Journal's game articles, read from the engine source. Expected cost per bet = stake × edge; per hour = stake × bets per hour × edge. Source and derivation: [The price of an hour: what each game costs per hour at your stake and pace](https://betkyo.com/en/blog/the-price-of-an-hour-what-each-game-costs-per-hour-at-your-stake-and-pace/).

## Expected cost of 100 bets at $10

| GAME | HOUSE EDGE | PER 100 BETS |
| --- | --- | --- |
| Blackjack, basic strategy | 0.57% | $5.70 |
| Dice · Limbo · Crash targets · Plinko · Hi-Lo · Pagoda (Hard) | 1.00% | $10.00 |
| Wheel | 1.04% | $10.40 |
| Baccarat, Banker | 1.06% | $10.60 |
| Keno (all 40 tables) | 0.93–1.35% | $9.30–13.50 |
| RPS (per decided round) | 1.50% | $15.00 |
| Koban Flip | 2.00% | $20.00 |
| Casino Hold’em (of the ante) | ≈2.2% | ≈$22 |
| Chinchiro | 2.62% | $26.20 |
| Roulette (single zero) | 2.70% | $27.00 |
| Video poker 8/5, best hold | 2.70% | $27.00 |
| Sic Bo, Big / Small | 2.78% | $27.80 |
| Bingo | 3.34% | $33.40 |
| Tairyō | ≈3.7% | ≈$37 |
| Hanabi | 4.19% | $41.90 |
| Double, any colour | 6.67% | $66.70 |

_Mines runs 1.0–2.5% depending on the rung (small multipliers cost more); dice between its round targets runs up to 1.97%. Expected cost is the average over many sessions — any one hour can land far from it, which is the subject of the risk-of-ruin and doubling pieces._

## Communal games: round length and cost per hour at $10 a round

| GAME | ROUND | ROUNDS / HOUR | EDGE | COST / HOUR |
| --- | --- | --- | --- | --- |
| Crash | 10 s betting + 0.9 s lock + ~14.3 s flight + 3 s break ≈ 28 s | ≈128 | 1.00% | ≈$13 |
| Dragon Road (one table) | 20 s betting + 1.5 s lock + 4 s result = 25.5 s | ≈141 | 1.16% (Banker) | ≈$16 |
| Wheel | 10 s betting + 0.7 s lock + 9 s spin = 19.7 s | ≈183 | 1.04% | ≈$19 |
| Double | 12 s betting + 0.7 s lock + 6 s result = 18.7 s | ≈193 | 6.67% | ≈$128 |

_Crash’s flight is the only variable: the multiplier doubles every 10 seconds and the round busts at a point with P(bust > x) = 0.99 ÷ x, so the average flight is ≈14.3 s; one round in a hundred busts instantly. Dragon Road Player is 1.37%, Tie 14.3%._

## Dice at a 50% target (1% edge): cost per hour by stake and pace

| PACE | BETS / HOUR | $1 A BET | $10 A BET | $100 A BET |
| --- | --- | --- | --- | --- |
| One bet every 30 s | 120 | $1.20 | $12 | $120 |
| One bet every 10 s | 360 | $3.60 | $36 | $360 |
| One bet every 4 s | 900 | $9.00 | $90 | $900 |
| Auto-bet, one per second | 3,600 | $36 | $360 | $3,600 |

_Multiply any cell by the edge ratio for another game: ×2.7 for roulette, ×4.19 for Hanabi, ×6.67 for Double. Auto-bet at $10 on Double would be about $2,400 an hour._



---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
