# Fugu

A minefield with a Tokyo menu: reveal tiles, dodge the fugu, and watch your multiplier climb with every safe pick.
You choose when to stop — every safe tile raises the cash-out, every reveal risks the fish.

## How a round works

1. Set your bet amount and board risk.
2. Reveal tiles one at a time — each safe tile multiplies your pot.
3. Cash out any time, or keep revealing. Hit a fugu and the round ends at zero.

## Verify a round

Every Fugu round is derived from a committed server seed, your client seed and a nonce. After the server seed is revealed you can recompute the round with the open verifier: [provably-fair-verifier](https://github.com/betkyo-open-labs/provably-fair-verifier) (also on npm as `betkyo-provably-fair-verifier`). The scheme is explained at [https://betkyo.com/en/fairness/](https://betkyo.com/en/fairness/).

## Odds and derivations

- [Why ten mines pays the same as fifteen: the ×3,236,072 full clear](https://betkyo.com/en/blog/the-biggest-number-on-the-site/) — Fugu is a 5×5 minefield. Clear every safe tile with ten mines on the board and the ladder reads ×3,236,072 — the largest number anywhere on this site. Clear it with fifteen mines and it reads exactly the same. That is not a coincidence, and the reason it happens tells you what every pick in the game actually costs.


## FAQ

**Can I try Fugu for free?**

Yes. Every Betkyo original can be played free with fun money — no account or deposit needed. Sign in only when you want to play with crypto.

**Is there a maximum win in Fugu?**

The multiplier keeps compounding while your picks stay safe — a full clear reaches ×3,236,072 — but the payout is bounded by the table maximum profit shown with the bet limits. Once a round reaches it the figure stops rising and the game says so.

**Is Fugu provably fair?**

Yes. Every Betkyo original publishes verifiable fairness data for each round, so you can check results yourself. The fairness page explains the exact scheme and walks through a verification.


Guide on the site: [https://betkyo.com/en/guide/fugu/](https://betkyo.com/en/guide/fugu/)


---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
