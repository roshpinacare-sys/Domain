# Tick keeper · 2026-10-20T23:57:11.781Z

STASIS: false · fired: market-grid-cron.yml=status 401, fleet-census-cron.yml=status 401, self-audience.yml=status 401, audience-analyst.yml=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-20T23:42:21.819Z | 20m | fresh 14.8m <= 20m |
| earn-audit-cron | 2026-10-20T23:13:02.431Z | 45m | fresh 44.2m <= 45m |
| fill-ledger-cron | 2026-10-20T23:56:28.895Z | 45m | fresh 0.7m <= 45m |
| twin-audit.yml | 2026-10-20T15:15:48.995Z | 1560m | fresh 521.4m <= 1560m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | cooldown: dispatched 29m ago < 240m |
| fleet-heartbeat.yml | 2026-10-20T23:13:12.337Z | 90m | fresh 44.0m <= 90m |
| cognition-beat.yml | 2026-10-20T20:50:27.004Z | 90m | cooldown: dispatched 29m ago < 60m |
| office-pulse.yml | 2026-10-20T23:28:32.216Z | 90m | fresh 28.7m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 334m ago < 720m |
| books-revival-t28.yml | 2026-10-20T22:41:31.477Z | 1440m | fresh 75.7m <= 1440m |
| market-grid-cron.yml | 2026-10-20T22:43:52.936Z | 45m | RE-FIRED (book stale 73.3m > 45m) |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | RE-FIRED (book stale 6550.8m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 24553.6m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
