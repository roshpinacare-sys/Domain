# dex-core — EXCHANGE CORE (R40, CR-0070)

At: 2026-11-20T21:15:41.645Z · Verdict: **EXCHANGE-CORE-LIVE** · mode: KEYLESS-ATOMIC-INTERNAL · seq: 3126 · attestation: `5b55639ba5538341`

Feed: FEED-LIVE (router book @ 2026-11-20T20:42:17.836Z) · conservation: **OK** · custody probe: unreachable (booked custody stands)

| Pool | Pair | Kind | Fee | Reserves (a/b µ) | Mid | Verdict |
|---|---|---|---|---|---|---|
| P1 | WSTEEM/STEEM | PEG | 2bps | 197 / 6644724 | 33729.56345178 | LIVE-INTERNAL |
| P2 | WSBD/SBD | PEG | 2bps | 4811951 / 1598930 | 0.3322831 | LIVE-INTERNAL |
| P3 | STEEM/SBD | VOLATILE | 25bps | 298766 / 817153 | 2.73509368 | LIVE-INTERNAL |
| P4 | SAOS/WSTEEM | VOLATILE | 25bps | 0 / 0 | — | PLANNED-NO-CLAIM |
| P5 | WHIVE/HIVE | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P6 | WHBD/HBD | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P7 | WBLURT/BLURT | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |
| P8 | HIVE/STEEM | VOLATILE | 25bps | 0 / 0 | — | PLANNED-NO-CLAIM |
| P9 | WSBD/WHBD | PEG | 2bps | 0 / 0 | — | AWAITING-CUSTODY |

Routes: 6 LIVE-INTERNAL (atomic settlement in our own ledger) · 80 planned/thin (every one names its unlock)

| Route | Path | Quote | Verdict |
|---|---|---|---|
| C-STEEM-SBD | P3 | 8068 SBD for 2987 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-STEEM-WSBD | P3→P2 | 9331 WSBD for 2987 µ STEEM (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-STEEM | P3 | 2950 STEEM for 8171 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-SBD-WSBD | P2 | 9450 WSBD for 8171 µ SBD (~1% first-hop depth) | LIVE-INTERNAL |
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
| C-WSBD-STEEM | P2→P3 | 14368 STEEM for 48119 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
| C-WSBD-SBD | P2 | 41388 SBD for 48119 µ WSBD (~1% first-hop depth) | LIVE-INTERNAL |
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

- A1 P3 STEEM/SBD pool mid vs CEX-implied fair: FEED-STALE
- A-P1 WSTEEM/STEEM peg guard: PEG-DRIFT-HALT · drift 3372856.34%
- A-P2 WSBD/SBD peg guard: PEG-DRIFT-HALT · drift 66.77%
- A2 P8 HIVE/STEEM cross-network bridge: FEED-STALE

- Counter-grid P1 WSTEEM/STEEM: anchor 33729.56345178 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GRID-TOO-THIN · size 0µ/rung (cap 200bps) · gate OPEN
- Counter-grid P2 WSBD/SBD: anchor 0.3322831 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GATED-ARMED-BROADCAST-READY · size 64159µ/rung (cap 200bps) · gate OPEN
- Counter-grid P3 STEEM/SBD: anchor 2.73509368 (POOL-MID (our side of the book)) · skew 50bps · spacing 0.42% · rungs 6 · GATED-ARMED-BROADCAST-READY · size 3983µ/rung (cap 200bps) · gate OPEN

Issuer: SAOS-DEX-ISSUER/1 — identity `d7ff39690365bfa8` · mint law 1:1 against MEASURED-KEYED custody only
Peg-out corridors: STEEM=KEYED-DESK, SBD=KEYED-DESK, HIVE=PLAN-KEYED, HBD=PLAN-KEYED, BLURT=PLAN-KEYED, SAOS=INTERNAL
Observed (adjacent networks — seen, never custody): HIVE 110000µ (OBSERVED-UNCONTROLLED) · BLURT 83000µ (OBSERVED-POST-KEYED)
Custody classes: STEEM=MEASURED-KEYED · SBD=MEASURED-KEYED · HIVE=OBSERVED-UNCONTROLLED · HBD=OBSERVED-UNCONTROLLED · BLURT=OBSERVED-POST-KEYED · SAOS=PLANNED-NO-CLAIM
Vault: minted WSTEEM 761900µ · WSBD 6314850µ · WHIVE 0µ · WHBD 0µ · WBLURT 0µ · redeem is ALWAYS honored 1:1 (burn before payout) — the real-value law

Treasury P&L: fees 22454µ (LP revenue) · rebalance edges 311029µ (marked to fair at execution — the LVR defense on our own pool)

Attestation sha256(seq, custody, reserves, minted, claims) = `5b55639ba5538341` — recomputable by any node; the cron book commit is the publication.

