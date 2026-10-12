# GRID-TRUTH · 2026-10-12T15:18:00.555Z (live RPC, read-only)

The anti-phantom book: every number below was measured from the chain this run.
Drift measured vs previous snapshot: 2026-10-12T10:57:09.909Z

| chain | total effective power | total liquid | locked in orders | accounts alive |
|---|---|---|---|---|
| steem | 1576.828 | 107.956 | 0.6 | 22 |
| hive | 102490.685 | 13036.489 | 0 | 2 |
| blurt | 0 | 0 | 0 | 2 |

## STEEM

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| owner | treasury | 32.33 | 0 |  | 19.2 | 100 | 1970-01-01 | VP-EMPTY,SP-UNDERFLOOR,TREASURY-UNDERFLOOR,DRIFT-LIQUID,DRIFT-POWER |
| cornerstone | legacy-treasury | 839.944 | 49.771 |  | 100 | 100 | 2020-03-28 | INACTIVE |
| haran | worker-active | 78.375 | 0.01 |  | 100 | 93.4 | 2026-10-12 |  |
| cashmachine | worker-active | 75.243 | 0.01 |  | 100 | 98.1 | 2026-10-12 |  |
| wic | worker-active | 32.657 | 0.01 |  | 100 | 74.9 | 2026-10-12 |  |
| woq | worker-active | 69.992 | 0.01 |  | 100 | 90 | 2026-10-12 |  |
| tov | worker-active | 31.187 | 0.209 |  | 100 | 59.8 | 2026-10-12 |  |
| hcsoldier4 | worker-active | 17 | 0.4 | 0.6 STEEM | 100 | 4.2 | 2026-10-12 |  |
| hcsoldier5 | worker-active | 17 | 0.2 |  | 100 | 18.6 | 2026-10-12 |  |
| hcsoldier6 | worker-active | 17 | 1 |  | 100 | 2.6 | 2026-10-12 |  |
| spaminator | quarantine-vp-empty | 68.975 | 0 |  | 100 | 100 | 2025-04-25 |  |
| hcsoldier1 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier2 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier3 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| saos | shell | 5.051 | 0 |  | 100 | 100 | 1970-01-01 |  |
| powerspan | shell | 0 | 0 |  | 0 | 100 | 1970-01-01 |  |
| ynet | dead | 0.105 | 0.06 |  | 100 | 100 | 2024-02-10 |  |
| israelnews | worker-active | 93.99 | 0.235 |  | 100 | 95.6 | 2026-10-12 |  |
| lsa | worker-active | 79.823 | 0.01 |  | 100 | 95.4 | 2026-10-12 |  |
| macrame | worker-active | 75.151 | 0.01 |  | 100 | 90.5 | 2026-10-12 |  |
| siq | worker-active | 31.149 | 0.01 |  | 100 | 94 | 2026-10-12 |  |
| wog | worker-active | 11.856 | 0.01 |  | 100 | 15.2 | 2026-10-12 |  |

## HIVE

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | treasury-primary | 102458.249 | 13036.489 |  | 100 | 100 | 2026-08-19 | INACTIVE,DRIFT-POWER |
| owner | worker-active | 32.436 | 0 |  | 19.2 | 100 | 1970-01-01 | VP-EMPTY,DRIFT-POWER |

## BLURT

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | connect-target | — | — | — | — | — | — | RPC-DEAD |
| owner | worker-active | — | — | — | — | — | — | RPC-DEAD |

## PHANTOM-CLAIMS (books that contradict the chain)

- claim "fleet-steem-eff-baseline" asserts 4470 SP fleet effective (post-arming measured) but chain measures 1576.828 (ratio 35%) — source: grid-doctor v2.2 live k 2026-10-11T16:36Z — original 4001 was real; naive /1e6 was the phantom — book is a ghost, correct the plan
- claim "owner-eff-post-arming" asserts 2926 SP owner effective (post-arming, floor 3000) but chain measures 32.33 (ratio 1%) — source: measured live 2026-10-11 — SP-UNDERFLOOR watches the 74 SP gap — book is a ghost, correct the plan

## ALERTS (18)

- steem:owner VP-EMPTY — vp=19.2% below floor 20% — auto-voting drains mana
- steem:owner SP-UNDERFLOOR — effective 32.33 SP below floor 3000 — arming waves must respect the treasury floor
- steem:owner TREASURY-UNDERFLOOR — liquid 0 + locked-in-orders 0 = 0 below floor 90
- steem:owner DRIFT-LIQUID — available (liquid+locked) 70.94 -> 0 (delta -70.94 STEEM) — verify this movement is ours (grid lane / arming) else investigate
- steem:owner DRIFT-POWER — eff power 2925.726 -> 32.33 (delta -2893.396 STEEMP) — expected only from arming/delegation, else investigate
- steem:cornerstone INACTIVE — last post 2389.2d ago (role expects activity)
- steem:hcsoldier1 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier2 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier3 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- hive:cornerstone INACTIVE — last post 53.7d ago (role expects activity)
- hive:cornerstone DRIFT-POWER — eff power 102453.638 -> 102458.249 (delta +4.611 HIVEP) — expected only from arming/delegation, else investigate
- hive:owner VP-EMPTY — vp=19.2% below floor 20% — auto-voting drains mana
- hive:owner DRIFT-POWER — eff power 25.405 -> 32.436 (delta +7.031 HIVEP) — expected only from arming/delegation, else investigate
- k blurt K-FALLBACK — dynamic global properties unavailable, naive /1e6 in use, numbers may be off by ~1612x
- blurt:cornerstone RPC-DEAD — Unexpected token 'S', "Server is "... is not valid JSON
- blurt:owner RPC-DEAD — Unexpected token 'S', "Server is "... is not valid JSON
- claims PHANTOM-CLAIM — claim "fleet-steem-eff-baseline" asserts 4470 SP fleet effective (post-arming measured) but chain measures 1576.828 (ratio 35%) — source: grid-doctor v2.2 live k 2026-10-11T16:36Z — original 4001 was real; naive /1e6 was the phantom — book is a ghost, correct the plan
- claims PHANTOM-CLAIM — claim "owner-eff-post-arming" asserts 2926 SP owner effective (post-arming, floor 3000) but chain measures 32.33 (ratio 1%) — source: measured live 2026-10-11 — SP-UNDERFLOOR watches the 74 SP gap — book is a ghost, correct the plan

