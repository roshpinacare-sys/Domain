# Tick keeper · 2026-11-21T04:14:14.149Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-21T03:58:33.739Z | 20m | fresh 15.7m <= 20m |
| fill-ledger-cron | 2026-11-21T03:58:33.803Z | 45m | fresh 15.7m <= 45m |
| twin-audit.yml | 2026-11-20T15:46:28.189Z | 1560m | fresh 747.8m <= 1560m |
| public-pulse.yml | 2026-11-20T13:37:12.383Z | 1560m | fresh 877.0m <= 1560m |
| fleet-heartbeat.yml | 2026-11-21T02:53:54.693Z | 90m | fresh 80.3m <= 90m |
| cognition-beat.yml | 2026-11-21T03:42:27.894Z | 90m | fresh 31.8m <= 90m |
| office-pulse.yml | 2026-11-21T03:45:56.577Z | 90m | fresh 28.3m <= 90m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 244m ago < 720m |
| books-revival-t28.yml | 2026-11-21T00:17:56.120Z | 1440m | fresh 236.3m <= 1440m |
| earn-audit-cron | 2026-11-21T00:10:03.193Z | 45m | RE-FIRED (book stale 244.2m > 45m) |
| market-grid-cron.yml | 2026-11-21T02:47:57.657Z | 45m | RE-FIRED (book stale 86.3m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 42532.7m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 69450.7m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
