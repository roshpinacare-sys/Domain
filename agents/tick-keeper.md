# Tick keeper · 2026-10-22T20:21:35.169Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | fresh 300.1m <= 1560m |
| twin-audit.yml | 2026-10-22T12:28:38.419Z | 1560m | fresh 472.9m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 150m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | fresh 300.1m <= 1560m |
| office-pulse.yml | 2026-10-22T20:17:44.095Z | 90m | fresh 3.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 150m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 462m ago < 720m |
| books-revival-t28.yml | 2026-10-22T19:32:37.033Z | 1440m | fresh 49.0m <= 1440m |
| sovereign-tick-cron | 2026-10-22T18:38:44.031Z | 20m | RE-FIRED (book stale 102.9m > 20m) |
| earn-audit-cron | 2026-10-22T18:38:38.890Z | 45m | RE-FIRED (book stale 102.9m > 45m) |
| fill-ledger-cron | 2026-10-22T18:38:44.089Z | 45m | RE-FIRED (book stale 102.9m > 45m) |
| market-grid-cron.yml | 2026-10-22T18:38:56.557Z | 45m | RE-FIRED (book stale 102.6m > 45m) |
| fleet-heartbeat.yml | 2026-10-22T18:46:55.449Z | 90m | RE-FIRED (book stale 94.7m > 90m) |
| cognition-beat.yml | 2026-10-22T12:20:57.347Z | 90m | RE-FIRED (book stale 480.6m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
