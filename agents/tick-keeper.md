# Tick keeper · 2026-10-20T01:23:04.134Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| twin-audit.yml | 2026-10-19T13:59:43.472Z | 1560m | fresh 683.3m <= 1560m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | fresh 905.0m <= 1560m |
| fleet-heartbeat.yml | 2026-10-20T01:15:50.334Z | 90m | cooldown: dispatched 57m ago < 60m |
| cognition-beat.yml | 2026-10-19T22:37:04.766Z | 90m | cooldown: dispatched 57m ago < 60m |
| office-pulse.yml | 2026-10-20T01:17:01.986Z | 90m | fresh 6.0m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | fresh 1249.1m <= 1440m |
| books-revival-t28.yml | 2026-10-20T00:41:30.908Z | 1440m | fresh 41.6m <= 1440m |
| sovereign-tick-cron | 2026-10-20T00:25:57.684Z | 20m | RE-FIRED (book stale 57.1m > 20m) |
| earn-audit-cron | 2026-10-20T00:25:05.568Z | 45m | RE-FIRED (book stale 58.0m > 45m) |
| fill-ledger-cron | 2026-10-20T00:35:13.651Z | 45m | RE-FIRED (book stale 47.8m > 45m) |
| market-grid-cron.yml | 2026-10-20T00:37:43.023Z | 45m | RE-FIRED (book stale 45.4m > 45m) |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | RE-FIRED (book stale 5196.7m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 23199.5m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
