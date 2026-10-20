# Tick keeper · 2026-10-20T10:17:34.251Z

STASIS: false · fired: sovereign-tick-cron=status 401, earn-audit-cron=status 401, fleet-census-cron.yml=status 401, self-audience.yml=status 401, audience-analyst.yml=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-20T09:33:59.647Z | 45m | fresh 43.6m <= 45m |
| market-grid-cron.yml | 2026-10-20T09:48:29.085Z | 45m | fresh 29.1m <= 45m |
| twin-audit.yml | 2026-10-19T13:59:43.472Z | 1560m | fresh 1217.8m <= 1560m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | fresh 1439.5m <= 1560m |
| fleet-heartbeat.yml | 2026-10-20T09:33:58.540Z | 90m | fresh 43.6m <= 90m |
| cognition-beat.yml | 2026-10-20T09:19:10.740Z | 90m | fresh 58.4m <= 90m |
| office-pulse.yml | 2026-10-20T10:15:51.807Z | 90m | fresh 1.7m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 275m ago < 720m |
| books-revival-t28.yml | 2026-10-20T05:21:57.860Z | 1440m | fresh 295.6m <= 1440m |
| sovereign-tick-cron | 2026-10-20T08:50:41.476Z | 20m | RE-FIRED (book stale 86.9m > 20m) |
| earn-audit-cron | 2026-10-20T09:19:22.068Z | 45m | RE-FIRED (book stale 58.2m > 45m) |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | RE-FIRED (book stale 5731.2m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 23734.0m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
