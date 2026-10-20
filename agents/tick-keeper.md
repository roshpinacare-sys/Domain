# Tick keeper · 2026-10-20T11:45:23.913Z

STASIS: false · fired: earn-audit-cron=status 401, market-grid-cron.yml=status 401, cognition-beat.yml=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-20T11:31:50.062Z | 20m | fresh 13.6m <= 20m |
| fill-ledger-cron | 2026-10-20T11:31:50.144Z | 45m | fresh 13.6m <= 45m |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | cooldown: dispatched 87m ago < 240m |
| twin-audit.yml | 2026-10-19T13:59:43.472Z | 1560m | fresh 1305.7m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 87m ago < 240m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | fresh 1527.3m <= 1560m |
| fleet-heartbeat.yml | 2026-10-20T10:46:27.160Z | 90m | fresh 58.9m <= 90m |
| office-pulse.yml | 2026-10-20T11:43:11.929Z | 90m | fresh 2.2m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 87m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 363m ago < 720m |
| books-revival-t28.yml | 2026-10-20T10:26:56.710Z | 1440m | fresh 78.5m <= 1440m |
| earn-audit-cron | 2026-10-20T10:31:57.189Z | 45m | RE-FIRED (book stale 73.4m > 45m) |
| market-grid-cron.yml | 2026-10-20T10:46:37.515Z | 45m | RE-FIRED (book stale 58.8m > 45m) |
| cognition-beat.yml | 2026-10-20T09:19:10.740Z | 90m | RE-FIRED (book stale 146.2m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
