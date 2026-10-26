# Tick keeper · 2026-10-26T17:21:43.931Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-26T17:01:28.347Z | 45m | fresh 20.3m <= 45m |
| market-grid-cron.yml | 2026-10-26T16:50:06.796Z | 45m | fresh 31.6m <= 45m |
| twin-audit.yml | 2026-10-26T13:36:02.284Z | 1560m | fresh 225.7m <= 1560m |
| fleet-heartbeat.yml | 2026-10-26T16:11:25.551Z | 90m | fresh 70.3m <= 90m |
| cognition-beat.yml | 2026-10-26T16:04:21.806Z | 90m | fresh 77.4m <= 90m |
| office-pulse.yml | 2026-10-26T17:09:34.704Z | 90m | fresh 12.2m <= 90m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | cooldown: dispatched 354m ago < 720m |
| books-revival-t28.yml | 2026-10-26T14:38:48.683Z | 1440m | fresh 162.9m <= 1440m |
| sovereign-tick-cron | 2026-10-26T17:01:28.295Z | 20m | RE-FIRED (book stale 20.3m > 20m) |
| earn-audit-cron | 2026-10-26T16:20:38.903Z | 45m | RE-FIRED (book stale 61.1m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 5880.2m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 32798.2m > 1560m) |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 5880.2m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
