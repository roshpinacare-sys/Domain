# Tick keeper · 2026-11-19T12:33:39.784Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-19T12:03:39.363Z | 45m | fresh 30.0m <= 45m |
| market-grid-cron.yml | 2026-11-19T12:06:10.751Z | 45m | fresh 27.5m <= 45m |
| twin-audit.yml | 2026-11-18T15:59:37.349Z | 1560m | fresh 1234.0m <= 1560m |
| fleet-heartbeat.yml | 2026-11-19T11:26:26.868Z | 90m | fresh 67.2m <= 90m |
| cognition-beat.yml | 2026-11-19T12:05:19.497Z | 90m | fresh 28.3m <= 90m |
| office-pulse.yml | 2026-11-19T12:06:18.531Z | 90m | fresh 27.4m <= 90m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 321m ago < 720m |
| books-revival-t28.yml | 2026-11-19T10:49:02.115Z | 1440m | fresh 104.6m <= 1440m |
| sovereign-tick-cron | 2026-11-19T12:00:16.409Z | 20m | RE-FIRED (book stale 33.4m > 20m) |
| earn-audit-cron | 2026-11-19T10:03:43.846Z | 45m | RE-FIRED (book stale 149.9m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 40152.2m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 67070.1m > 1560m) |
| public-pulse.yml | 2026-11-17T13:52:46.088Z | 1560m | RE-FIRED (book stale 2800.9m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
