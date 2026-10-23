# Tick keeper · 2026-10-23T11:50:56.964Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-23T11:36:04.582Z | 45m | fresh 14.9m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | fresh 1229.4m <= 1560m |
| twin-audit.yml | 2026-10-22T12:28:38.419Z | 1560m | fresh 1402.3m <= 1560m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | fresh 1229.4m <= 1560m |
| cognition-beat.yml | 2026-10-23T10:28:46.752Z | 90m | fresh 82.2m <= 90m |
| office-pulse.yml | 2026-10-23T11:30:58.403Z | 90m | fresh 20.0m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 620m ago < 720m |
| books-revival-t28.yml | 2026-10-23T06:33:31.591Z | 1440m | fresh 317.4m <= 1440m |
| sovereign-tick-cron | 2026-10-23T09:37:18.371Z | 20m | RE-FIRED (book stale 133.6m > 20m) |
| earn-audit-cron | 2026-10-23T10:37:41.894Z | 45m | RE-FIRED (book stale 73.3m > 45m) |
| market-grid-cron.yml | 2026-10-23T10:37:45.752Z | 45m | RE-FIRED (book stale 73.2m > 45m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 28147.4m > 1560m) |
| fleet-heartbeat.yml | 2026-10-23T09:37:58.215Z | 90m | RE-FIRED (book stale 133.0m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
