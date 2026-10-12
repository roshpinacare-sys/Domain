# GRID-TRUTH · 2026-10-12T02:27:23.954Z (live RPC, read-only)

The anti-phantom book: every number below was measured from the chain this run.
Drift measured vs previous snapshot: 2026-10-12T01:24:21.939Z

| chain | total effective power | total liquid | locked in orders | accounts alive |
|---|---|---|---|---|
| steem | 4470.097 | 152.546 | 29.028 | 22 |
| hive | 102470.896 | 13036.523 | 0 | 2 |
| blurt | 0 | 0 | 0 | 2 |

## STEEM

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| headcorner | treasury | 2925.656 | 43.99 | 29.028 STEEM+91.195 SBD | 100 | 100 | 2026-10-12 | SP-UNDERFLOOR,TREASURY-UNDERFLOOR,DRIFT-LIQUID |
| cornerstone | legacy-treasury | 839.914 | 49.771 |  | 100 | 100 | 2020-03-28 | INACTIVE |
| haran | worker-active | 78.372 | 0.01 |  | 100 | 88 | 2026-10-11 |  |
| cashmachine | worker-active | 75.24 | 0.01 |  | 100 | 94.1 | 2026-10-11 |  |
| wic | worker-active | 32.656 | 0.01 |  | 100 | 68.3 | 2026-10-11 |  |
| woq | worker-active | 69.989 | 0.01 |  | 100 | 84.7 | 2026-10-11 |  |
| tov | worker-active | 31.185 | 0.209 |  | 100 | 72.9 | 2026-10-11 |  |
| hcsoldier4 | worker-active | 17 | 1 |  | 100 | 13.2 | 2026-10-11 |  |
| hcsoldier5 | worker-active | 17 | 0.2 |  | 100 | 26.2 | 2026-10-11 |  |
| hcsoldier6 | worker-active | 17 | 1 |  | 100 | 8.7 | 2026-10-11 |  |
| spaminator | quarantine-vp-empty | 68.972 | 0 |  | 100 | 100 | 2025-04-25 |  |
| hcsoldier1 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier2 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier3 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| saos | shell | 5.051 | 0 |  | 100 | 100 | 1970-01-01 |  |
| powerspan | shell | 0 | 0 |  | 0 | 100 | 1970-01-01 |  |
| ynet | dead | 0.105 | 0.06 |  | 100 | 100 | 2024-02-10 |  |
| israelnews | worker-active | 93.987 | 0.235 |  | 100 | 87.7 | 2026-10-11 |  |
| lsa | worker-active | 79.82 | 0.01 |  | 100 | 87.4 | 2026-10-11 |  |
| macrame | worker-active | 75.148 | 0.01 |  | 100 | 84.2 | 2026-10-11 |  |
| siq | worker-active | 31.147 | 0.01 |  | 100 | 95.9 | 2026-10-11 |  |
| wog | worker-active | 11.855 | 0.01 |  | 100 | 15.8 | 2026-10-11 |  |

## HIVE

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | treasury-primary | 102445.492 | 13036.489 |  | 100 | 100 | 2026-08-19 | INACTIVE,DRIFT-POWER |
| headcorner | worker-active | 25.404 | 0.034 |  | 100 | 0 | 2026-10-10 |  |

## BLURT

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | connect-target | — | — | — | — | — | — | RPC-DEAD |
| headcorner | worker-active | — | — | — | — | — | — | RPC-DEAD |

## ALERTS (13)

- steem:headcorner SP-UNDERFLOOR — effective 2925.656 SP below floor 3000 — arming waves must respect the treasury floor
- steem:headcorner TREASURY-UNDERFLOOR — liquid 43.99 + locked-in-orders 29.028 = 73.018 below floor 90
- steem:headcorner DRIFT-LIQUID — available (liquid+locked) 52.094 -> 73.018 (delta +20.924 STEEM) — verify this movement is ours (grid lane / arming) else investigate
- steem:cornerstone INACTIVE — last post 2388.7d ago (role expects activity)
- steem:hcsoldier1 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier2 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier3 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- hive:cornerstone INACTIVE — last post 53.1d ago (role expects activity)
- hive:cornerstone DRIFT-POWER — eff power 102442.853 -> 102445.492 (delta +2.639 HIVEP) — expected only from arming/delegation, else investigate
- k blurt K-FALLBACK — dynamic global properties unavailable, naive /1e6 in use, numbers may be off by ~1612x
- blurt:cornerstone RPC-DEAD — Unexpected token 'S', "Server is "... is not valid JSON
- blurt:headcorner RPC-DEAD — Unexpected token 'S', "Server is "... is not valid JSON
- roster BANNED-CAPITAL-INFLOW — banned account "headcorner" holds 244.203 SP delegated IN — capital lane violated the ban, reclaim or justify

