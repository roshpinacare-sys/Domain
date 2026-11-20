# Tick keeper · 2026-11-20T12:05:19.597Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-20T11:32:29.500Z | 45m | fresh 32.8m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 116m ago < 240m |
| twin-audit.yml | 2026-11-19T16:04:39.299Z | 1560m | fresh 1200.7m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 116m ago < 240m |
| public-pulse.yml | 2026-11-17T13:52:46.088Z | 1560m | cooldown: dispatched 116m ago < 240m |
| fleet-heartbeat.yml | 2026-11-20T10:59:27.307Z | 90m | fresh 65.9m <= 90m |
| office-pulse.yml | 2026-11-20T11:24:56.278Z | 90m | fresh 40.4m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 116m ago < 240m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 116m ago < 720m |
| books-revival-t28.yml | 2026-11-20T09:12:08.646Z | 1440m | fresh 173.2m <= 1440m |
| sovereign-tick-cron | 2026-11-20T10:08:33.275Z | 20m | RE-FIRED (book stale 116.8m > 20m) |
| earn-audit-cron | 2026-11-20T03:29:15.872Z | 45m | RE-FIRED (book stale 516.1m > 45m) |
| market-grid-cron.yml | 2026-11-20T11:16:19.898Z | 45m | RE-FIRED (book stale 49.0m > 45m) |
| cognition-beat.yml | 2026-11-20T10:26:05.332Z | 90m | RE-FIRED (book stale 99.2m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
