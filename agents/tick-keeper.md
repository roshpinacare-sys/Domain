# Tick keeper · 2026-10-20T17:18:09.406Z

STASIS: false · fired: sovereign-tick-cron=status 401, fleet-heartbeat.yml=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-20T17:09:27.054Z | 45m | fresh 8.7m <= 45m |
| fill-ledger-cron | 2026-10-20T16:55:57.751Z | 45m | fresh 22.2m <= 45m |
| market-grid-cron.yml | 2026-10-20T15:56:32.783Z | 45m | cooldown: dispatched 22m ago < 60m |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | cooldown: dispatched 124m ago < 240m |
| twin-audit.yml | 2026-10-20T15:15:48.995Z | 1560m | fresh 122.3m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 124m ago < 240m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | cooldown: dispatched 22m ago < 240m |
| cognition-beat.yml | 2026-10-20T12:05:01.804Z | 90m | cooldown: dispatched 22m ago < 60m |
| office-pulse.yml | 2026-10-20T17:10:10.434Z | 90m | fresh 8.0m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 124m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 695m ago < 720m |
| books-revival-t28.yml | 2026-10-20T15:23:43.669Z | 1440m | fresh 114.4m <= 1440m |
| sovereign-tick-cron | 2026-10-20T16:55:57.687Z | 20m | RE-FIRED (book stale 22.2m > 20m) |
| fleet-heartbeat.yml | 2026-10-20T15:41:42.151Z | 90m | RE-FIRED (book stale 96.5m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
