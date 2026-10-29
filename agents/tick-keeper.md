# Tick keeper · 2026-10-29T18:53:38.716Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-29T18:24:23.057Z | 45m | fresh 29.3m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 117m ago < 240m |
| twin-audit.yml | 2026-10-29T13:45:28.829Z | 1560m | fresh 308.2m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 117m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 117m ago < 240m |
| fleet-heartbeat.yml | 2026-10-29T17:25:04.674Z | 90m | fresh 88.6m <= 90m |
| office-pulse.yml | 2026-10-29T18:17:29.878Z | 90m | fresh 36.1m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 117m ago < 240m |
| soldiers-curate.yml | 2026-10-27T22:35:43.061Z | 1440m | cooldown: dispatched 399m ago < 720m |
| books-revival-t28.yml | 2026-10-29T17:05:42.586Z | 1440m | fresh 107.9m <= 1440m |
| sovereign-tick-cron | 2026-10-29T17:06:02.041Z | 20m | RE-FIRED (book stale 107.6m > 20m) |
| fill-ledger-cron | 2026-10-29T17:24:57.481Z | 45m | RE-FIRED (book stale 88.7m > 45m) |
| market-grid-cron.yml | 2026-10-29T16:56:06.163Z | 45m | RE-FIRED (book stale 117.5m > 45m) |
| cognition-beat.yml | 2026-10-29T17:03:37.849Z | 90m | RE-FIRED (book stale 110.0m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
