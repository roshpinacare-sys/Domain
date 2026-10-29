# Tick keeper · 2026-10-29T15:11:30.442Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-29T14:56:46.581Z | 20m | fresh 14.7m <= 20m |
| earn-audit-cron | 2026-10-29T15:09:46.362Z | 45m | fresh 1.7m <= 45m |
| fill-ledger-cron | 2026-10-29T14:56:46.636Z | 45m | fresh 14.7m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 177m ago < 240m |
| twin-audit.yml | 2026-10-29T13:45:28.829Z | 1560m | fresh 86.0m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 177m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 177m ago < 240m |
| fleet-heartbeat.yml | 2026-10-29T13:42:25.729Z | 90m | fresh 89.1m <= 90m |
| office-pulse.yml | 2026-10-29T14:55:06.970Z | 90m | fresh 16.4m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 177m ago < 240m |
| soldiers-curate.yml | 2026-10-27T22:35:43.061Z | 1440m | cooldown: dispatched 177m ago < 720m |
| books-revival-t28.yml | 2026-10-29T10:26:37.257Z | 1440m | fresh 284.9m <= 1440m |
| market-grid-cron.yml | 2026-10-29T13:41:35.205Z | 45m | RE-FIRED (book stale 89.9m > 45m) |
| cognition-beat.yml | 2026-10-29T10:23:40.858Z | 90m | RE-FIRED (book stale 287.8m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
