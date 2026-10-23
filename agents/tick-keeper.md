# Tick keeper · 2026-10-23T03:28:56.208Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-23T03:14:15.277Z | 20m | fresh 14.7m <= 20m |
| fill-ledger-cron | 2026-10-23T03:14:15.327Z | 45m | fresh 14.7m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | fresh 727.4m <= 1560m |
| twin-audit.yml | 2026-10-22T12:28:38.419Z | 1560m | fresh 900.3m <= 1560m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | fresh 727.4m <= 1560m |
| cognition-beat.yml | 2026-10-23T03:14:02.791Z | 90m | fresh 14.9m <= 90m |
| office-pulse.yml | 2026-10-23T03:15:35.581Z | 90m | fresh 13.3m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 118m ago < 720m |
| books-revival-t28.yml | 2026-10-23T00:59:40.338Z | 1440m | fresh 149.3m <= 1440m |
| earn-audit-cron | 2026-10-23T02:30:38.407Z | 45m | RE-FIRED (book stale 58.3m > 45m) |
| market-grid-cron.yml | 2026-10-23T02:31:01.579Z | 45m | RE-FIRED (book stale 57.9m > 45m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 27645.4m > 1560m) |
| fleet-heartbeat.yml | 2026-10-23T01:54:58.801Z | 90m | RE-FIRED (book stale 94.0m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
