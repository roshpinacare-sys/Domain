# Tick keeper · 2026-11-20T16:32:06.703Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-20T16:15:16.545Z | 45m | fresh 16.8m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 116m ago < 240m |
| twin-audit.yml | 2026-11-20T15:46:28.189Z | 1560m | fresh 45.6m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 116m ago < 240m |
| public-pulse.yml | 2026-11-20T13:37:12.383Z | 1560m | fresh 174.9m <= 1560m |
| fleet-heartbeat.yml | 2026-11-20T15:42:06.320Z | 90m | fresh 50.0m <= 90m |
| office-pulse.yml | 2026-11-20T16:25:24.579Z | 90m | fresh 6.7m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 116m ago < 240m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 383m ago < 720m |
| books-revival-t28.yml | 2026-11-20T09:12:08.646Z | 1440m | fresh 440.0m <= 1440m |
| sovereign-tick-cron | 2026-11-20T14:35:19.346Z | 20m | RE-FIRED (book stale 116.8m > 20m) |
| earn-audit-cron | 2026-11-20T03:29:15.872Z | 45m | RE-FIRED (book stale 782.8m > 45m) |
| market-grid-cron.yml | 2026-11-20T14:36:07.598Z | 45m | RE-FIRED (book stale 116.0m > 45m) |
| cognition-beat.yml | 2026-11-20T10:26:05.332Z | 90m | RE-FIRED (book stale 366.0m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
