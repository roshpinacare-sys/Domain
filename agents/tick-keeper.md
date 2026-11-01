# Tick keeper · 2026-11-01T12:43:38.326Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-01T12:00:03.564Z | 45m | fresh 43.6m <= 45m |
| fill-ledger-cron | 2026-11-01T12:14:28.814Z | 45m | fresh 29.2m <= 45m |
| market-grid-cron.yml | 2026-11-01T12:00:14.294Z | 45m | fresh 43.4m <= 45m |
| twin-audit.yml | 2026-10-31T13:05:46.238Z | 1560m | fresh 1417.9m <= 1560m |
| fleet-heartbeat.yml | 2026-11-01T12:14:35.370Z | 90m | fresh 29.0m <= 90m |
| cognition-beat.yml | 2026-11-01T11:30:46.303Z | 90m | fresh 72.9m <= 90m |
| office-pulse.yml | 2026-11-01T12:01:49.975Z | 90m | fresh 41.8m <= 90m |
| soldiers-curate.yml | 2026-10-29T22:57:54.480Z | 1440m | cooldown: dispatched 669m ago < 720m |
| books-revival-t28.yml | 2026-11-01T08:11:30.036Z | 1440m | fresh 272.1m <= 1440m |
| sovereign-tick-cron | 2026-11-01T10:03:25.487Z | 20m | RE-FIRED (book stale 160.2m > 20m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 14242.1m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 41160.1m > 1560m) |
| public-pulse.yml | 2026-10-31T10:38:00.320Z | 1560m | RE-FIRED (book stale 1565.6m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
