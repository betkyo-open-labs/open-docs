# Crypto — summaries

Short answers from the Betkyo Journal's Crypto category. Each entry is the article's own summary; the full derivation, tables and sources are on the linked page.

## [What the withdraw window checks before it sends](https://betkyo.com/en/blog/what-the-withdraw-window-checks-before-it-sends/)

_2026-09-11 · 7 min_

Before the site sends a withdrawal it runs a short fixed list of checks in the browser and then one more on the server. The **amount** must be a positive number, no more than your **balance** in that coin, and at least the coin’s **minimum withdrawal**, which the window shows next to the **network fee** for the coin you chose. For coins that run on more than one network you must pick the **network**, and the request carries the base coin of that network so the funds cannot be sent down the wrong chain. For coins that use a **destination tag or memo**, the tag is a separate field and is sent alongside the address. If you have enabled a **one-time code**, the window requires a **six-digit code** and sends it with the request; the server verifies it. The request itself is one call, with the amount converted to the coin’s smallest unit, and it either succeeds with a confirmation toast or returns an error that is shown to you unchanged. None of these checks can catch a wrong address, which is why [the address article](https://betkyo.com/en/blog/address-poisoning-the-wrong-address-is-already-in-your-history/) exists.

## [Dust: the balance you cannot withdraw, and why it exists](https://betkyo.com/en/blog/dust-the-balance-you-cannot-withdraw-and-why-it-exists/)

_2026-09-11 · 7 min_

**Dust** is a balance so small that the network fee to move it would cost as much as, or more than, the balance itself. It exists because a blockchain charges for the act of writing a transaction, not for the amount written: on Bitcoin the fee depends on the size of the transaction in bytes, on Ethereum on the gas it uses, and neither knows or cares whether the value inside is a cent or a million. Dust accumulates from rounding, from fees that leave a remainder, from partial withdrawals, and occasionally from strangers, since a tiny unsolicited transfer is the classic first move of [an address-poisoning scam](https://betkyo.com/en/blog/address-poisoning-the-wrong-address-is-already-in-your-history/). Bitcoin nodes will refuse to relay an output below a dust threshold at all, a few hundred satoshis by default. The withdraw window on this site holds a **minimum withdrawal per coin**, stored in the coin’s smallest unit alongside its fee and shown converted to normal units, and a request below it is refused before it is sent. The minimum is not there to keep your money. It is there because a withdrawal smaller than its own fee is a transaction that spends your balance on the network and delivers nothing.

## [Address poisoning: the wrong address is already in your history](https://betkyo.com/en/blog/address-poisoning-the-wrong-address-is-already-in-your-history/)

_2026-09-11 · 7 min_

**Address poisoning** is a scam that plants a look-alike address in your transaction history so that you copy it by mistake. The attacker generates a wallet address whose **first and last few characters match** an address you use often, then sends you a tiny or zero-value transfer from it. The next time you scroll your history for “the address I always send to” and copy it, you copy the attacker’s, and the transfer is final. In **May 2024** a wallet sent **1,155 WBTC**, about seventy million dollars, to a poisoned address in one transaction; the funds were later returned after negotiation, which almost never happens. The defence is a rule, not a tool: **never copy a receiving address from history.** On this site the deposit address is fetched from the wallet service when you open the deposit window, shown with a copy button that writes the exact string and a QR code that encodes it; a destination tag, where a coin needs one, has its own copy button. Copy from there, check more than the ends, and send a small test when the amount is large.

## [When a stablecoin loses the peg: what a casino balance is actually made of](https://betkyo.com/en/blog/when-a-stablecoin-loses-the-peg/)

_2026-09-05 · 9 min_

A **stablecoin** is a token whose issuer promises it can be redeemed for one unit of a currency, usually the US dollar. The promise is not the price: the price is whatever the market pays, and it has broken several times. **TerraUSD (UST)** fell from $1 to under $0.10 in the second week of **May 2022** and never came back. **USD Coin (USDC)** traded as low as about **$0.87** on **11 March 2023** after its issuer disclosed $3.3 billion stuck in the failed Silicon Valley Bank, then recovered within two days. **DAI**, mostly backed by USDC at the time, fell with it. On this site a balance is stored as a **count of coin units** at each coin’s own precision — six decimals for USDT — and the fiat line under it is that count **multiplied by a price map the server sends**; the client code says fiat is “a DISPLAY currency only”. When the price of the coin you hold moves, the number of coins you hold does not, and neither does the size of your bets in coin. What moves is what those coins buy.

## [What a confirmation is, and why your deposit waits for several](https://betkyo.com/en/blog/what-a-confirmation-is/)

_2026-09-01 · 8 min_

A **confirmation** is one block mined on top of the block that contains your transaction. Zero confirmations means the network has seen the transaction; it has not yet agreed on it. Each further block makes reversing it exponentially harder — in the Bitcoin whitepaper’s own calculation, an attacker with 10% of the network has a **20% chance of undoing a one-confirmation transaction and about 0.02% after six**, which is where the “six confirmations” convention comes from. A casino waits before crediting because a deposit that is credited, wagered and then reversed is money the house has already paid out. **The required count is set per coin and printed on the deposit screen next to the address.**

## [Right coin, wrong network: how a deposit goes missing](https://betkyo.com/en/blog/right-coin-wrong-network/)

_2026-09-01 · 8 min_

A token like USDT is not one asset. It is a separate asset on every chain it exists on — TRON, Ethereum, Polygon and others — and a deposit address is valid on **exactly one** of them. Send the Ethereum version to an address that is only being watched on TRON and the coins arrive on a chain nobody is looking at. Some mistakes protect themselves: a TRON address begins with **T**, a Bitcoin address with **1, 3 or bc1**, and a wallet will refuse to send across formats. The dangerous case is the one that looks right — **Ethereum, Polygon and other EVM chains all use the same 0x address**, so a transfer on the wrong one goes through without complaint. This wallet asks you to choose the network **before** it issues an address, and some coins (XRP) need a **destination tag** as well as an address.

## [Where the money sits: hot wallets, cold storage and what “proof of reserves” proves](https://betkyo.com/en/blog/where-the-money-sits/)

_2026-08-07 · 8 min_

A deposit moves coins into someone else’s custody — you now hold a **claim**, not the coins. Operators split holdings into a small **hot wallet** for withdrawals and a large **cold** reserve kept offline, because online keys are the ones that get stolen. **Proof of reserves** shows a venue controls certain assets at a point in time; it does **not** show what it owes, so reserves without a matching liability attestation prove much less than they appear to. The reliable player-side defence is simply not leaving more on any platform than you intend to play with.

## [Where a crypto price comes from: there is no such thing as “the” price](https://betkyo.com/en/blog/where-a-crypto-price-comes-from/)

_2026-08-07 · 8 min_

No single exchange owns the price of a crypto asset — each has its own order book, and they disagree constantly. A **price oracle** aggregates many venues into one published number, usually by taking a **volume-weighted median** rather than an average, because a median cannot be dragged by one broken or manipulated venue. The number that matters for a settled bet is not “the market price” but **which published feed the settlement reads**, and that is a question you should be able to ask any venue.

## [Paying the network, not the house: a player’s guide to crypto fees](https://betkyo.com/en/blog/crypto-fees-for-players/)

_2026-07-24 · 8 min_

Crypto fees are paid to **the network’s miners or validators, not to the casino** — they are the cost of writing to a public ledger. The three habits that minimize them: **pick the cheap rail for the asset** (the same stablecoin can differ enormously between networks), **avoid peak congestion** (fees are an auction), and **withdraw in fewer, larger moves** rather than many small ones. Whatever the network charges, it should be shown to you before you confirm — here, it is.



---

_Part of [Betkyo Open Labs](https://github.com/betkyo-open-labs). Drafted with AI assistance from the Betkyo Journal; every figure is read from the game engine source or the public record and approved by a human editor. Betkyo holds no gambling licence; restricted jurisdictions are listed in its Terms. 18+. Play responsibly._
