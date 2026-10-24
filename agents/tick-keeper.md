# Tick keeper · 2026-10-24T00:48:49.695Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 193m ago < 240m |
| twin-audit.yml | 2026-10-23T12:09:50.923Z | 1560m | fresh 759.0m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 193m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 193m ago < 240m |
| fleet-heartbeat.yml | 2026-10-24T00:04:32.876Z | 90m | fresh 44.3m <= 90m |
| cognition-beat.yml | 2026-10-23T19:31:28.328Z | 90m | cooldown: dispatched 59m ago < 60m |
| office-pulse.yml | 2026-10-24T00:30:22.205Z | 90m | fresh 18.5m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 193m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 671m ago < 720m |
| books-revival-t28.yml | 2026-10-23T23:33:09.724Z | 1440m | fresh 75.7m <= 1440m |
| sovereign-tick-cron | 2026-10-23T23:49:36.983Z | 20m | RE-FIRED (book stale 59.2m > 20m) |
| earn-audit-cron | 2026-10-23T23:49:45.725Z | 45m | RE-FIRED (book stale 59.1m > 45m) |
| fill-ledger-cron | 2026-10-23T23:59:20.419Z | 45m | RE-FIRED (book stale 49.5m > 45m) |
| market-grid-cron.yml | 2026-10-24T00:00:58.054Z | 45m | RE-FIRED (book stale 47.9m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
