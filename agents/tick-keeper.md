# Tick keeper · 2026-10-29T16:55:47.884Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, cognition-beat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-29T16:40:58.469Z | 20m | fresh 14.8m <= 20m |
| earn-audit-cron | 2026-10-29T16:40:42.650Z | 45m | fresh 15.1m <= 45m |
| fill-ledger-cron | 2026-10-29T16:40:58.544Z | 45m | fresh 14.8m <= 45m |
| twin-audit.yml | 2026-10-29T13:45:28.829Z | 1560m | fresh 190.3m <= 1560m |
| fleet-heartbeat.yml | 2026-10-29T15:56:38.894Z | 90m | fresh 59.1m <= 90m |
| office-pulse.yml | 2026-10-29T16:38:32.633Z | 90m | fresh 17.3m <= 90m |
| soldiers-curate.yml | 2026-10-27T22:35:43.061Z | 1440m | cooldown: dispatched 281m ago < 720m |
| books-revival-t28.yml | 2026-10-29T10:26:37.257Z | 1440m | fresh 389.2m <= 1440m |
| market-grid-cron.yml | 2026-10-29T15:11:43.275Z | 45m | RE-FIRED (book stale 104.1m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 10174.3m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 37092.2m > 1560m) |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 10174.3m > 1560m) |
| cognition-beat.yml | 2026-10-29T10:23:40.858Z | 90m | RE-FIRED (book stale 392.1m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
