# Tick keeper · 2026-10-21T04:59:39.330Z

STASIS: false · fired: sovereign-tick-cron=status 401, fill-ledger-cron=status 401, fleet-census-cron.yml=status 401, self-audience.yml=status 401, public-pulse.yml=status 401, audience-analyst.yml=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-21T04:16:00.113Z | 45m | fresh 43.7m <= 45m |
| market-grid-cron.yml | 2026-10-21T04:16:03.538Z | 45m | fresh 43.6m <= 45m |
| twin-audit.yml | 2026-10-20T15:15:48.995Z | 1560m | fresh 823.8m <= 1560m |
| fleet-heartbeat.yml | 2026-10-21T03:47:13.261Z | 90m | fresh 72.4m <= 90m |
| cognition-beat.yml | 2026-10-21T04:45:18.658Z | 90m | fresh 14.3m <= 90m |
| office-pulse.yml | 2026-10-21T04:45:57.841Z | 90m | fresh 13.7m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 637m ago < 720m |
| books-revival-t28.yml | 2026-10-21T01:00:20.161Z | 1440m | fresh 239.3m <= 1440m |
| sovereign-tick-cron | 2026-10-21T02:49:41.476Z | 20m | RE-FIRED (book stale 130.0m > 20m) |
| fill-ledger-cron | 2026-10-21T03:47:14.332Z | 45m | RE-FIRED (book stale 72.4m > 45m) |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | RE-FIRED (book stale 6853.3m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 24856.1m > 1560m) |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | RE-FIRED (book stale 2561.6m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
