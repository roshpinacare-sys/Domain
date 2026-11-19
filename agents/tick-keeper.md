# Tick keeper · 2026-11-19T03:39:30.597Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 32m ago < 240m |
| twin-audit.yml | 2026-11-18T15:59:37.349Z | 1560m | fresh 699.9m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 32m ago < 240m |
| public-pulse.yml | 2026-11-17T13:52:46.088Z | 1560m | cooldown: dispatched 32m ago < 240m |
| fleet-heartbeat.yml | 2026-11-19T03:07:44.849Z | 90m | cooldown: dispatched 32m ago < 60m |
| cognition-beat.yml | 2026-11-18T23:19:21.669Z | 90m | cooldown: dispatched 32m ago < 60m |
| office-pulse.yml | 2026-11-19T03:35:33.656Z | 90m | fresh 3.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 32m ago < 240m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 677m ago < 720m |
| books-revival-t28.yml | 2026-11-19T02:49:59.053Z | 1440m | fresh 49.5m <= 1440m |
| sovereign-tick-cron | 2026-11-19T02:53:13.125Z | 20m | RE-FIRED (book stale 46.3m > 20m) |
| earn-audit-cron | 2026-11-17T07:04:20.239Z | 45m | RE-FIRED (book stale 2675.2m > 45m) |
| fill-ledger-cron | 2026-11-19T02:53:13.187Z | 45m | RE-FIRED (book stale 46.3m > 45m) |
| market-grid-cron.yml | 2026-11-19T02:47:02.498Z | 45m | RE-FIRED (book stale 52.5m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
