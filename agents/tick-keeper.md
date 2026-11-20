# Tick keeper · 2026-11-20T19:52:38.510Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-20T19:36:11.563Z | 45m | fresh 16.4m <= 45m |
| twin-audit.yml | 2026-11-20T15:46:28.189Z | 1560m | fresh 246.2m <= 1560m |
| public-pulse.yml | 2026-11-20T13:37:12.383Z | 1560m | fresh 375.4m <= 1560m |
| cognition-beat.yml | 2026-11-20T18:47:24.575Z | 90m | fresh 65.2m <= 90m |
| office-pulse.yml | 2026-11-20T19:42:11.480Z | 90m | fresh 10.5m <= 90m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 584m ago < 720m |
| books-revival-t28.yml | 2026-11-20T18:02:13.884Z | 1440m | fresh 110.4m <= 1440m |
| sovereign-tick-cron | 2026-11-20T18:52:32.266Z | 20m | RE-FIRED (book stale 60.1m > 20m) |
| earn-audit-cron | 2026-11-20T03:29:15.872Z | 45m | RE-FIRED (book stale 983.4m > 45m) |
| market-grid-cron.yml | 2026-11-20T17:56:44.312Z | 45m | RE-FIRED (book stale 115.9m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 42031.1m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 68949.1m > 1560m) |
| fleet-heartbeat.yml | 2026-11-20T18:02:23.969Z | 90m | RE-FIRED (book stale 110.2m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
