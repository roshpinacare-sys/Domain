# dex-core — EXCHANGE CORE (R40, CR-0070)

At: 2026-10-04T11:07:32.074Z · Verdict: **MESH-SETTLED** · mode: KEYLESS-ATOMIC-INTERNAL (mesh batch) · seq: 9 · attestation: `d6d5c769bf229029`

Feed: FEED-LIVE (router book @ 2026-10-04T08:48:34.143Z) · conservation: **OK** · custody probe: unreachable (booked custody stands)

| Pool | Pair | Kind | Fee | Reserves (a/b µ) | Mid | Verdict |
|---|---|---|---|---|---|---|
| P1 | WSTEEM/STEEM | PEG | 2bps | 383782 / 393775 | 1.02603822 | LIVE-INTERNAL |
| P2 | WSBD/SBD | PEG | 2bps | 27450 / 27450 | 1 | LIVE-INTERNAL |
| P3 | STEEM/SBD | VOLATILE | 25bps | 1555100 / 163980 | 0.1054466 | LIVE-INTERNAL |
| P4 | SAOS/WSTEEM | VOLATILE | 25bps | 0 / 0 | — | PLANNED-NO-CLAIM |

Routes: 12 LIVE-INTERNAL (atomic settlement in our own ledger) · 4 planned/thin (every one names its unlock)

| Route | Path | Quote | Verdict |
|---|---|---|---|
| C-STEEM-SBD | P3 | 407 SBD for 3887 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-STEEM-WSTEEM | P1 | 3883 WSTEEM for 3887 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-STEEM-WSBD | P3→P2 | 406 WSBD for 3887 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-STEEM | P3 | 28 STEEM for 274 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-WSTEEM | P3→P1 | 27 WSTEEM for 274 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-WSBD | P2 | 273 WSBD for 274 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSTEEM-STEEM | P1 | 3883 STEEM for 3887 µ WSTEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSTEEM-SBD | P1→P3 | 407 SBD for 3887 µ WSTEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSTEEM-WSBD | P1→P3→P2 | 406 WSBD for 3887 µ WSTEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-STEEM | P2→P3 | 28 STEEM for 274 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-SBD | P2 | 273 SBD for 274 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-WSTEEM | P2→P3→P1 | 27 WSTEEM for 274 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-SAOS-STEEM | — | — | PLANNED-NO-CLAIM · unlock: a measured SAOS claim in the vault (dex/credits.json is empt |
| C-SAOS-SBD | — | — | PLANNED-NO-CLAIM · unlock: a measured SAOS claim in the vault (dex/credits.json is empt |
| C-SAOS-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: a measured SAOS claim in the vault (dex/credits.json is empt |
| C-SAOS-WSBD | — | — | PLANNED-NO-CLAIM · unlock: a measured SAOS claim in the vault (dex/credits.json is empt |

- A1 P3 STEEM/SBD pool mid vs CEX-implied fair: BELOW-FLOOR · net -34.99bps vs threshold 120bps
- A-P1 WSTEEM/STEEM peg guard: PEG-OK · drift 0%
- A-P2 WSBD/SBD peg guard: PEG-OK · drift 0%

- Counter-grid P1 WSTEEM/STEEM: anchor 1 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · PLAN-POOL-GATED-NOT-BROADCAST
- Counter-grid P2 WSBD/SBD: anchor 1 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · PLAN-POOL-GATED-NOT-BROADCAST
- Counter-grid P3 STEEM/SBD: anchor 0.1054466 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · PLAN-POOL-GATED-NOT-BROADCAST

Vault: minted WSTEEM 777550µ (reserve ratio 1) · WSBD 54900µ (ratio 1) · redeem is ALWAYS honored 1:1 — the real-value law

Treasury P&L: fees 0µ (LP revenue) · rebalance edges 0µ (marked to fair at execution — the LVR defense on our own pool)

Attestation sha256(seq, custody, reserves, minted, claims) = `d6d5c769bf229029` — recomputable by any node; the cron book commit is the publication.

