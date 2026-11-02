# Tick keeper · 2026-11-02T18:00:46.231Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-02T17:43:39.657Z | 20m | fresh 17.1m <= 20m |
| earn-audit-cron | 2026-11-02T17:46:39.598Z | 45m | fresh 14.1m <= 45m |
| fill-ledger-cron | 2026-11-02T17:43:39.700Z | 45m | fresh 17.1m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 137m ago < 240m |
| twin-audit.yml | 2026-11-02T16:33:51.322Z | 1560m | fresh 86.9m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 137m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | fresh 307.3m <= 1560m |
| fleet-heartbeat.yml | 2026-11-02T17:09:54.864Z | 90m | fresh 50.9m <= 90m |
| office-pulse.yml | 2026-11-02T17:46:07.481Z | 90m | fresh 14.6m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 137m ago < 240m |
| soldiers-curate.yml | 2026-11-02T16:31:11.775Z | 1440m | cooldown: dispatched 137m ago < 720m |
| books-revival-t28.yml | 2026-11-02T17:27:12.957Z | 1440m | fresh 33.6m <= 1440m |
| market-grid-cron.yml | 2026-11-02T17:09:42.028Z | 45m | RE-FIRED (book stale 51.1m > 45m) |
| cognition-beat.yml | 2026-11-02T15:43:38.967Z | 90m | RE-FIRED (book stale 137.1m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
