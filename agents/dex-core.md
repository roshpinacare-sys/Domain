# dex-core — EXCHANGE CORE (R40, CR-0070)

At: 2026-10-21T22:52:35.276Z · Verdict: **CONSERVATION-BROKEN** · mode: KEYLESS-ATOMIC-INTERNAL · seq: 368 · attestation: `8453308bc1c818bd`

Feed: FEED-LIVE (router book @ 2026-10-21T22:08:27.101Z) · conservation: **BROKEN** · custody probe: MEASURED @https://api.steemit.com

| Pool | Pair | Kind | Fee | Reserves (a/b µ) | Mid | Verdict |
|---|---|---|---|---|---|---|
| P1 | WSTEEM/STEEM | PEG | 2bps | 16617 / 1030429 | 62.01053138 | LIVE-INTERNAL |
| P2 | WSBD/SBD | PEG | 2bps | 3816129 / 2511573 | 0.65814678 | LIVE-INTERNAL |
| P3 | STEEM/SBD | VOLATILE | 25bps | 1494203 / 157829 | 0.10562755 | LIVE-INTERNAL |
| P4 | SAOS/WSTEEM | VOLATILE | 25bps | 0 / 0 | — | PLANNED-NO-CLAIM |
| P5 | WHIVE/HIVE | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P6 | WHBD/HBD | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P7 | WBLURT/BLURT | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P8 | HIVE/STEEM | VOLATILE | 25bps | 0 / 0 | — | PLANNED-NO-CLAIM |
| P9 | WSBD/WHBD | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |

Routes: 12 LIVE-INTERNAL (atomic settlement in our own ledger) · 70 planned/thin (every one names its unlock)

| Route | Path | Quote | Verdict |
|---|---|---|---|
| C-STEEM-SBD | P3 | 1078 SBD for 10304 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-STEEM-WSTEEM | P1 | 642 WSTEEM for 10304 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-STEEM-WSBD | P3→P2 | 1122 WSBD for 10304 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-STEEM | P3 | 14754 STEEM for 1578 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-WSTEEM | P3→P1 | 907 WSTEEM for 1578 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-WSBD | P2 | 1642 WSBD for 1578 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
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
| C-WSTEEM-STEEM | P1 | 2563 STEEM for 166 µ WSTEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSTEEM-SBD | P1→P3 | 269 SBD for 166 µ WSTEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSTEEM-WSBD | P1→P3→P2 | 280 WSBD for 166 µ WSTEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-STEEM | P2→P3 | 280678 STEEM for 38161 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-SBD | P2 | 36596 SBD for 38161 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-WSTEEM | P2→P3→P1 | 9515 WSTEEM for 38161 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
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

- A1 P3 STEEM/SBD pool mid vs CEX-implied fair: CANDIDATE-FOK · net 358.69bps vs threshold 120bps
- A-P1 WSTEEM/STEEM peg guard: PEG-DRIFT-HALT · drift 6101.05%
- A-P2 WSBD/SBD peg guard: PEG-DRIFT-HALT · drift 34.18%
- A2 P8 HIVE/STEEM cross-network bridge: NO-CUSTODY

- Counter-grid P1 WSTEEM/STEEM: anchor 62.01053138 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GRID-TOO-THIN · size 0µ/rung (cap 200bps) · gate OPEN
- Counter-grid P2 WSBD/SBD: anchor 0.65814678 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GATED-ARMED-BROADCAST-READY · size 50881µ/rung (cap 200bps) · gate OPEN
- Counter-grid P3 STEEM/SBD: anchor 0.10562755 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GATED-ARMED-BROADCAST-READY · size 19922µ/rung (cap 200bps) · gate OPEN

Issuer: SAOS-DEX-ISSUER/1 — identity `d7ff39690365bfa8` · mint law 1:1 against MEASURED-KEYED custody only
Peg-out corridors: STEEM=KEYED-DESK, SBD=KEYED-DESK, HIVE=PLAN-KEYED, HBD=PLAN-KEYED, BLURT=PLAN-KEYED, SAOS=INTERNAL
Observed (adjacent networks — seen, never custody): HIVE 34000µ (OBSERVED-UNCONTROLLED) · HBD 3000µ (OBSERVED-UNCONTROLLED) · BLURT 83000µ (OBSERVED-POST-KEYED)
Custody classes: STEEM=MEASURED-KEYED · SBD=MEASURED-KEYED · HIVE=OBSERVED-UNCONTROLLED · HBD=OBSERVED-UNCONTROLLED · BLURT=OBSERVED-POST-KEYED · SAOS=PLANNED-NO-CLAIM
Vault: minted WSTEEM 761900µ · WSBD 6314850µ · WHIVE 0µ · WHBD 0µ · WBLURT 0µ · redeem is ALWAYS honored 1:1 (burn before payout) — the real-value law

Treasury P&L: fees 2458µ (LP revenue) · rebalance edges 15510µ (marked to fair at execution — the LVR defense on our own pool)

Attestation sha256(seq, custody, reserves, minted, claims) = `8453308bc1c818bd` — recomputable by any node; the cron book commit is the publication.

