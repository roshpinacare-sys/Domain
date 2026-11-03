# Tick keeper · 2026-11-03T19:36:03.262Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-03T18:52:21.406Z | 45m | fresh 43.7m <= 45m |
| market-grid-cron.yml | 2026-11-03T18:51:34.370Z | 45m | cooldown: dispatched 44m ago < 60m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 44m ago < 240m |
| twin-audit.yml | 2026-11-03T14:40:12.646Z | 1560m | fresh 295.8m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 44m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 44m ago < 240m |
| fleet-heartbeat.yml | 2026-11-03T18:39:16.374Z | 90m | fresh 56.8m <= 90m |
| cognition-beat.yml | 2026-11-03T16:45:38.498Z | 90m | cooldown: dispatched 44m ago < 60m |
| office-pulse.yml | 2026-11-03T19:14:04.061Z | 90m | fresh 22.0m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 44m ago < 240m |
| soldiers-curate.yml | 2026-11-03T01:13:10.890Z | 1440m | fresh 1102.9m <= 1440m |
| books-revival-t28.yml | 2026-11-03T15:29:14.597Z | 1440m | fresh 246.8m <= 1440m |
| sovereign-tick-cron | 2026-11-03T18:52:21.336Z | 20m | RE-FIRED (book stale 43.7m > 20m) |
| earn-audit-cron | 2026-11-03T18:34:59.077Z | 45m | RE-FIRED (book stale 61.1m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
