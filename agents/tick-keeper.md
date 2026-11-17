# Tick keeper · 2026-11-17T14:38:01.951Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-17T14:23:14.231Z | 45m | fresh 14.8m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 31m ago < 240m |
| twin-audit.yml | 2026-11-16T16:27:17.816Z | 1560m | fresh 1330.7m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 31m ago < 240m |
| public-pulse.yml | 2026-11-17T13:52:46.088Z | 1560m | fresh 45.3m <= 1560m |
| cognition-beat.yml | 2026-11-17T11:19:06.012Z | 90m | cooldown: dispatched 31m ago < 60m |
| office-pulse.yml | 2026-11-17T14:34:47.786Z | 90m | fresh 3.2m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 31m ago < 240m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 31m ago < 720m |
| books-revival-t28.yml | 2026-11-17T13:54:21.004Z | 1440m | fresh 43.7m <= 1440m |
| sovereign-tick-cron | 2026-11-17T13:49:55.869Z | 20m | RE-FIRED (book stale 48.1m > 20m) |
| earn-audit-cron | 2026-11-17T07:04:20.239Z | 45m | RE-FIRED (book stale 453.7m > 45m) |
| market-grid-cron.yml | 2026-11-17T13:49:36.876Z | 45m | RE-FIRED (book stale 48.4m > 45m) |
| fleet-heartbeat.yml | 2026-11-17T12:59:06.245Z | 90m | RE-FIRED (book stale 98.9m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
