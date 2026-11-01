# Tick keeper · 2026-11-01T03:29:29.587Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-01T03:00:14.336Z | 45m | fresh 29.3m <= 45m |
| fill-ledger-cron | 2026-11-01T03:00:29.159Z | 45m | fresh 29.0m <= 45m |
| twin-audit.yml | 2026-10-31T13:05:46.238Z | 1560m | fresh 863.7m <= 1560m |
| public-pulse.yml | 2026-10-31T10:38:00.320Z | 1560m | fresh 1011.5m <= 1560m |
| cognition-beat.yml | 2026-11-01T02:31:57.845Z | 90m | fresh 57.5m <= 90m |
| office-pulse.yml | 2026-11-01T02:55:18.870Z | 90m | fresh 34.2m <= 90m |
| soldiers-curate.yml | 2026-10-29T22:57:54.480Z | 1440m | cooldown: dispatched 115m ago < 720m |
| books-revival-t28.yml | 2026-11-01T01:29:34.350Z | 1440m | fresh 119.9m <= 1440m |
| sovereign-tick-cron | 2026-11-01T03:00:29.091Z | 20m | RE-FIRED (book stale 29.0m > 20m) |
| market-grid-cron.yml | 2026-11-01T01:35:06.859Z | 45m | RE-FIRED (book stale 114.4m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 13688.0m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 40605.9m > 1560m) |
| fleet-heartbeat.yml | 2026-11-01T01:34:56.326Z | 90m | RE-FIRED (book stale 114.6m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
