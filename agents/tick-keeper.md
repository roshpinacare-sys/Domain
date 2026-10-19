# Tick keeper · 2026-10-19T23:27:03.548Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fill-ledger-cron=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| market-grid-cron.yml | 2026-10-19T23:11:38.460Z | 45m | fresh 15.4m <= 45m |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | cooldown: dispatched 138m ago < 240m |
| twin-audit.yml | 2026-10-19T13:59:43.472Z | 1560m | fresh 567.3m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 138m ago < 240m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | fresh 789.0m <= 1560m |
| fleet-heartbeat.yml | 2026-10-19T22:37:33.211Z | 90m | fresh 49.5m <= 90m |
| cognition-beat.yml | 2026-10-19T22:37:04.766Z | 90m | fresh 50.0m <= 90m |
| office-pulse.yml | 2026-10-19T23:07:19.364Z | 90m | fresh 19.7m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 138m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | fresh 1133.1m <= 1440m |
| books-revival-t28.yml | 2026-10-19T21:45:19.882Z | 1440m | fresh 101.7m <= 1440m |
| sovereign-tick-cron | 2026-10-19T21:08:45.305Z | 20m | RE-FIRED (book stale 138.3m > 20m) |
| earn-audit-cron | 2026-10-19T21:08:41.850Z | 45m | RE-FIRED (book stale 138.4m > 45m) |
| fill-ledger-cron | 2026-10-19T22:28:15.235Z | 45m | RE-FIRED (book stale 58.8m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
