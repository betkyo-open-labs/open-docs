# Glossary — casino maths and provably fair terms

**House edge** — The share of each bet the game keeps on average, as a percentage of the stake. A 1% edge returns 99 cents per dollar wagered over many bets. Betkyo publishes the edge of every game, derived from the engine source.

**Return to player (RTP)** — 100% minus the house edge: the long-run share of stakes paid back as winnings.

**Provably fair** — A commitment scheme for game results: the server publishes a hash of its seed before you bet, you supply a client seed, each result is a public function of (server seed, client seed, nonce), and the server seed is revealed afterwards so every round can be recomputed. It proves results, not custody.

**Server seed** — The secret the casino commits to (by hash) before a seed period starts and reveals when it ends.

**Client seed** — A value the player supplies or changes; it enters every result so the server cannot fix outcomes in advance without your input.

**Nonce** — A counter that increases with each bet under the same seed pair, so no two rounds share an input.

**Cursor** — The position inside the hash stream from which a round takes its bytes; multi-draw games (cards, Keno, Plinko) consume several bytes per round.

**Hash commitment** — Publishing hash(x) before revealing x. Anyone can later check that the revealed x matches; nobody can change x after committing.

**Verifier** — A program that recomputes a round from its revealed inputs. Betkyo's runs in the browser and as a CLI (provably-fair-verifier).

**Hot wallet** — An online wallet a casino uses to pay withdrawals quickly. It holds the operational float and is the usual target of thefts; it is separate from the games and from cold storage.

**Cold storage** — Keys kept offline. Funds there cannot be moved by a compromised online service.

**Custody** — Who controls the keys that can spend a balance. Not provable from outside; a different promise from provably fair.

**Variance** — How far a session's result typically lands from its expectation. High-variance games (long shots, jackpots) swing more at the same edge.

**Gambler's ruin** — The classic problem of reaching a target bankroll before busting at a fixed stake; with any house edge the chance falls as the number of bets rises.

**Martingale** — Doubling the stake after each loss. It does not change the expected loss; it moves the loss into a rare large one bounded by the table limit or the bankroll.

**Near miss** — A losing outcome that looks close to a win. On many games it is structural: the engine paints losing cards from the same symbols as winning ones.

**Multiplier** — The payout as a multiple of the stake (×2 returns the stake plus one stake of profit).

**Floored multiplier** — A multiplier rounded down to cents. Flooring is why some games return slightly under their nominal edge at certain settings.

**Paytable** — The table of outcomes and their multipliers for a game or setting; Betkyo exports these as data (odds-data).

**Expected value** — The average result of a bet over many repetitions: Σ probability × payout minus the stake.

**Infinite shoe** — A card model in which each card is drawn independently from a fresh deck, so counting is impossible; Betkyo's card originals derive cards this way from the seed stream.

**Edge sorting** — Reading asymmetric card backs to learn a card's value before it is dealt; ruled cheating in Ivey v Genting (UK Supreme Court, 2017).

**Singleton** — In a flawed 2003 scratch ticket, a visible number that appeared exactly once; three in a row marked a winner about 90% of the time (Mohan Srivastava).

**IndexNow / canonical** — Not game terms: web-publishing plumbing that tells search engines a page is live and which URL is the original.



---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
