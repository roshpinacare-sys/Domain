# dex-core — EXCHANGE CORE (R40, CR-0070)

At: 2026-10-14T05:47:56.013Z · Verdict: **CONSERVATION-BROKEN** · mode: KEYLESS-ATOMIC-INTERNAL · seq: 79 · attestation: `d96cb49d516c33bb`

Feed: FEED-LIVE (router book @ 2026-10-14T04:50:20.073Z) · conservation: **BROKEN** · custody probe: MEASURED @https://api.steemit.com

| Pool | Pair | Kind | Fee | Reserves (a/b µ) | Mid | Verdict |
|---|---|---|---|---|---|---|
| P1 | WSTEEM/STEEM | PEG | 2bps | 54 / 34879 | 645.90740741 | LIVE-INTERNAL |
| P2 | WSBD/SBD | PEG | 2bps | 1831851 / 691563 | 0.37752143 | LIVE-INTERNAL |
| P3 | STEEM/SBD | VOLATILE | 25bps | 1247 / 70244 | 56.33039294 | LIVE-INTERNAL |
| P4 | SAOS/WSTEEM | VOLATILE | 25bps | 0 / 0 | — | PLANNED-NO-CLAIM |
| P5 | WHIVE/HIVE | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P6 | WHBD/HBD | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P7 | WBLURT/BLURT | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P8 | HIVE/STEEM | VOLATILE | 25bps | 0 / 0 | — | PLANNED-NO-CLAIM |
| P9 | WSBD/WHBD | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |

Routes: 4 LIVE-INTERNAL (atomic settlement in our own ledger) · 90 planned/thin (every one names its unlock)

| Route | Path | Quote | Verdict |
|---|---|---|---|
| C-STEEM-SBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-HIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-HBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-BLURT | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-STEEM-WSBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-WHIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-WHBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-WBLURT | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-STEEM-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SBD-STEEM | P3 | 11 STEEM for 772 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-WSBD | P2 | 870 WSBD for 772 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-HIVE-STEEM | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-SBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-HBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-BLURT | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-HIVE-WSBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-WHIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-WHBD | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-WBLURT | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HIVE-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-HBD-STEEM | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HBD-SBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-HBD-HIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-HBD-BLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-HBD-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-HBD-WSBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-HBD-WHIVE | — | — | THIN-DEPTH-NO-QUOTE |
| C-HBD-WHBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-HBD-WBLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-HBD-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-BLURT-STEEM | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-BLURT-SBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-BLURT-HIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-BLURT-HBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-BLURT-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-BLURT-WSBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-BLURT-WHIVE | — | — | THIN-DEPTH-NO-QUOTE |
| C-BLURT-WHBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-BLURT-WBLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-BLURT-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-STEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-SBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-HIVE | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-HBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-BLURT | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-WSBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-WHIVE | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-WHBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-WBLURT | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSTEEM-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WSBD-STEEM | P2→P3 | 196 STEEM for 18318 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-SBD | P2 | 16193 SBD for 18318 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WHIVE-STEEM | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-WHIVE-SBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHIVE-HIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-WHIVE-HBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHIVE-BLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHIVE-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WHIVE-WSBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHIVE-WHBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHIVE-WBLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHIVE-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WHBD-STEEM | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-WHBD-SBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHBD-HIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-WHBD-HBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHBD-BLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHBD-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WHBD-WSBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHBD-WHIVE | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHBD-WBLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-WHBD-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WBLURT-STEEM | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-WBLURT-SBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WBLURT-HIVE | — | — | PLANNED-NO-CLAIM · unlock: the cross-network bridge pair arms when HIVE key material ve |
| C-WBLURT-HBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WBLURT-BLURT | — | — | THIN-DEPTH-NO-QUOTE |
| C-WBLURT-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-WBLURT-WSBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WBLURT-WHIVE | — | — | THIN-DEPTH-NO-QUOTE |
| C-WBLURT-WHBD | — | — | THIN-DEPTH-NO-QUOTE |
| C-WBLURT-SAOS | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-STEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-SBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-HIVE | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-HBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-BLURT | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-WSTEEM | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-WSBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-WHIVE | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-WHBD | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |
| C-SAOS-WBLURT | — | — | PLANNED-NO-CLAIM · unlock: no measured SAOS claim exists in the estate books (dex/credi |

- A1 P3 STEEM/SBD pool mid vs CEX-implied fair: REBALANCE-BOOKED · net 6644623.64bps vs threshold 120bps · EXECUTED in 113µ → 6982µ (edge 6971µ marked to fair)
- A-P1 WSTEEM/STEEM peg guard: PEG-DRIFT-HALT · drift 64490.74%
- A-P2 WSBD/SBD peg guard: PEG-DRIFT-HALT · drift 62.24%
- A2 P8 HIVE/STEEM cross-network bridge: NO-CUSTODY

- Counter-grid P1 WSTEEM/STEEM: anchor 645.90740741 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GRID-TOO-THIN · size 0µ/rung (cap 200bps) · gate OPEN
- Counter-grid P2 WSBD/SBD: anchor 0.37752143 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GATED-ARMED-BROADCAST-READY · size 24424µ/rung (cap 200bps) · gate OPEN
- Counter-grid P3 STEEM/SBD: anchor 56.33039294 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GRID-TOO-THIN · size 0µ/rung (cap 200bps) · gate OPEN

Issuer: SAOS-DEX-ISSUER/1 — identity `d7ff39690365bfa8` · mint law 1:1 against MEASURED-KEYED custody only
Peg-out corridors: STEEM=KEYED-DESK, SBD=KEYED-DESK, HIVE=PLAN-KEYED, HBD=PLAN-KEYED, BLURT=PLAN-KEYED, SAOS=INTERNAL
Observed (adjacent networks — seen, never custody): HIVE 34000µ (OBSERVED-UNCONTROLLED) · HBD 3000µ (OBSERVED-UNCONTROLLED) · BLURT 83000µ (OBSERVED-POST-KEYED)
Custody classes: STEEM=MEASURED-KEYED · SBD=MEASURED-KEYED · HIVE=OBSERVED-UNCONTROLLED · HBD=OBSERVED-UNCONTROLLED · BLURT=OBSERVED-POST-KEYED · SAOS=PLANNED-NO-CLAIM
Vault: minted WSTEEM 14500µ · WSBD 2494800µ · WHIVE 0µ · WHBD 0µ · WBLURT 0µ · redeem is ALWAYS honored 1:1 (burn before payout) — the real-value law

Treasury P&L: fees 304µ (LP revenue) · rebalance edges 14656µ (marked to fair at execution — the LVR defense on our own pool)

Attestation sha256(seq, custody, reserves, minted, claims) = `d96cb49d516c33bb` — recomputable by any node; the cron book commit is the publication.

