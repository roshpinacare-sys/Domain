# Tick keeper · 2026-11-19T22:04:51.565Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| twin-audit.yml | 2026-11-19T16:04:39.299Z | 1560m | fresh 360.2m <= 1560m |
| fleet-heartbeat.yml | 2026-11-19T21:48:10.562Z | 90m | fresh 16.7m <= 90m |
| cognition-beat.yml | 2026-11-19T20:57:17.241Z | 90m | fresh 67.6m <= 90m |
| office-pulse.yml | 2026-11-19T21:56:18.792Z | 90m | fresh 8.5m <= 90m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 150m ago < 720m |
| books-revival-t28.yml | 2026-11-19T19:10:45.639Z | 1440m | fresh 174.1m <= 1440m |
| sovereign-tick-cron | 2026-11-19T19:35:00.165Z | 20m | RE-FIRED (book stale 149.9m > 20m) |
| earn-audit-cron | 2026-11-19T10:03:43.846Z | 45m | RE-FIRED (book stale 721.1m > 45m) |
| fill-ledger-cron | 2026-11-19T20:55:46.731Z | 45m | RE-FIRED (book stale 69.1m > 45m) |
| market-grid-cron.yml | 2026-11-19T20:58:37.277Z | 45m | RE-FIRED (book stale 66.2m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 40723.4m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 67641.3m > 1560m) |
| public-pulse.yml | 2026-11-17T13:52:46.088Z | 1560m | RE-FIRED (book stale 3372.1m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
