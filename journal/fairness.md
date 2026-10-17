# Fairness Studies — summaries

Short answers from the Betkyo Journal's Fairness Studies category. Each entry is the article's own summary; the full derivation, tables and sources are on the linked page.

## [How the Journal verifies a number: the method behind every figure on this site](https://betkyo.com/en/blog/how-the-journal-verifies-a-number-methodology/)

_2026-09-12 · 7 min_

The Journal has one rule for numbers: **a game figure must exist in engine source before it can be printed.** Writers open the derivation module for the game, read the constant or the function, quote it in a **verified** block that names the file and the symbol, and only then use the number in prose. Return figures are **computed** from the paytable and the outcome distribution, cell by cell, never copied from another site or from our own marketing copy. Historical and scientific figures come from named primary sources listed at the end of each article. When the engine and a human-written page disagree, the engine wins and the page is corrected; that process found a **mispriced Plinko cell** and a **wrong pay-line count** in a game guide, both fixed. The tables behind the figures are published as open data at **betkyo.com/data/**. None of this makes a game fair in the sense of having no edge, and no article claims a licence, a certification or an audit. It makes the numbers checkable, which is the only claim the Journal makes.

## [One rounding, not many: why the verifier matches the server bit for bit](https://betkyo.com/en/blog/one-rounding-not-many-why-the-verifier-matches-the-server-bit-for-bit/)

_2026-09-11 · 8 min_

Every provably fair round on this site turns a **256-bit hash** into a **number between 0 and 1** and then into an outcome. The server does that in Kotlin; the browser verifier does it in JavaScript. Both languages hold numbers as **64-bit doubles with 53 bits of precision**, and a hash has more bits than that, so somewhere a rounding must happen. If the server rounds once and the verifier rounds several times, the two numbers can differ in the last bit, and a game that multiplies by 37 and rounds down can land in a different pocket. The engine avoids this by constructing the number as **two exact pieces added in one operation**: the first four bytes divided by 2³², plus the next bytes divided by 2⁵⁶ or 2⁶⁴, so the only rounding is the single one that Kotlin’s conversion also performs. Crash goes further and never touches a double at all: its crash point is computed with **exact integer arithmetic** on the leading 52 bits, because a floating-point approximation “would disagree with integer division at floor boundaries and make the verifier reject good rounds”. The verifier is not an approximation of the server. It is the same arithmetic, and that is what makes a rejection mean something.

## [One nonce, many numbers: what the cursor counts](https://betkyo.com/en/blog/one-nonce-many-numbers-what-the-cursor-counts/)

_2026-09-11 · 9 min_

On this site a round’s randomness is **HMAC-SHA256(server seed, “client seed-nonce-cursor”)**. The **nonce** counts rounds: it goes up by one each bet, across every original, so no two rounds share it. The **cursor** counts draws inside a round: it starts at 0 and goes up by one for each random number the game needs. A game that needs one number reads cursor 0 and stops. Roulette, Limbo and the lucky bag do that. Sic Bo reads cursors 0, 1 and 2 for its three dice. Bingo reads 0 to 24 to lay out the card and 25 to 62 for the 38 balls. Blackjack reads one cursor per card in deal order, for as many cards as the hand takes. Each cursor gives an independent uniform number, and each game’s published derivation turns those numbers into a pocket, a card or a symbol. Because the whole stream is fixed the moment the seed pair and nonce are, every card of a round already exists before the first one is turned, and after the server seed is revealed you can recompute all of them.

## [What a hash commitment proves, and the three things it cannot](https://betkyo.com/en/blog/what-a-hash-commitment-proves/)

_2026-09-07 · 9 min_

A **hash commitment** is the SHA-256 fingerprint of the house’s server seed, shown to you before any round is played. Because a hash cannot be reversed and no two different seeds share one, publishing it pins the seed down: when the seed is revealed later, hashing it must reproduce the fingerprint you saw. That proves three things. **The seed was fixed before your bets.** **The revealed seed is the committed one.** **Each result follows from that seed, your client seed and the round number by the published function**, which you can recompute in your own browser. It does not prove three others. It cannot show that the server seed was chosen at random rather than picked, which is why the order in which seeds are committed and client seeds are set matters, and why this site’s panel has a boundary described below. It cannot make a game fair in the sense of having no house edge; the return is a separate, published number. And it proves nothing about rounds nobody verifies. The commitment is a receipt for the randomness, not a certificate for the game.

## [When the price feed goes dark: the fairest thing a desk can do is nothing](https://betkyo.com/en/blog/when-the-price-feed-goes-dark/)

_2026-08-07 · 8 min_

If the feed stalls, the desk **pauses symmetrically**: you cannot close and the house cannot liquidate you, because neither should happen on a price nobody can verify. If it stays dark for **ten minutes**, every open position on that market is closed at zero profit and loss and **the full stake is returned**. That decision is made on elapsed time, never on a price — settling on a stale one would be an open invitation to be picked off by anyone who can read the real market elsewhere.

## [Verify a casino round yourself: a step-by-step walkthrough](https://betkyo.com/en/blog/verify-a-casino-round/)

_2026-07-24, revised 2026-09-22 · 11 min_

A provably-fair round is decided by three inputs: a **server seed** (committed as a hash before you bet), **your client seed**, and a **nonce** that counts rounds. Feed them into HMAC-SHA256 and you get the round’s randomness — so after the server seed is revealed, you can recompute any past result and confirm nothing was changed after your bet.

## [Inside drand: the internet’s public dice](https://betkyo.com/en/blog/inside-drand-the-internets-public-dice/)

_2026-07-24 · 10 min_

**drand** is a public randomness beacon: a network of independent nodes that jointly signs each round number with a **threshold BLS signature**, and that signature *is* the random value. No member knows the output early, no minority of members can bias it, and anyone can verify any round against the group’s public key. It is randomness as public infrastructure — one verifiable dice roll, shared by everyone.

## [A short history of trusting randomness: from knucklebones to hash commitments](https://betkyo.com/en/blog/a-short-history-of-trusting-randomness/)

_2026-07-24 · 10 min_

Humanity has trusted randomness in four eras: **divine** (bones, lots, yarrow stalks — the gods answer), **physical** (dice, wheels, shuffles — the object is honest), **institutional** (audited machines, licensed houses — the inspector is honest), and now **mathematical** (commitments, beacons, verifiable functions — no one needs to be honest, because anyone can check).

## [Four ways to prove a random number: commit-reveal, beacons, VRF, certified hardware](https://betkyo.com/en/blog/four-ways-to-prove-a-random-number/)

_2026-07-24 · 12 min_

There are four production-grade answers to “prove this number was random”: **commit-reveal seed pairs** (per-player, free, instant — the provably-fair standard), **public randomness beacons** like drand (one verifiable pulse for everyone), **verifiable random functions** (the number ships with its own cryptographic proof), and **certified hardware RNGs** (institutional trust via testing labs). They prove different things — and none of them proves the odds are good.



---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
