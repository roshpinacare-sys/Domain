# Tick keeper · 2026-10-31T14:33:48.737Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-31T14:28:29.846Z | 45m | fresh 5.3m <= 45m |
| fill-ledger-cron | 2026-10-31T14:04:59.088Z | 45m | fresh 28.8m <= 45m |
| twin-audit.yml | 2026-10-31T13:05:46.238Z | 1560m | fresh 88.0m <= 1560m |
| public-pulse.yml | 2026-10-31T10:38:00.320Z | 1560m | fresh 235.8m <= 1560m |
| fleet-heartbeat.yml | 2026-10-31T13:21:06.501Z | 90m | fresh 72.7m <= 90m |
| cognition-beat.yml | 2026-10-31T13:50:53.163Z | 90m | fresh 42.9m <= 90m |
| office-pulse.yml | 2026-10-31T13:58:07.951Z | 90m | fresh 35.7m <= 90m |
| soldiers-curate.yml | 2026-10-29T22:57:54.480Z | 1440m | cooldown: dispatched 116m ago < 720m |
| books-revival-t28.yml | 2026-10-31T13:55:01.315Z | 1440m | fresh 38.8m <= 1440m |
| sovereign-tick-cron | 2026-10-31T14:04:59.032Z | 20m | RE-FIRED (book stale 28.8m > 20m) |
| market-grid-cron.yml | 2026-10-31T13:01:47.745Z | 45m | RE-FIRED (book stale 92.0m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 12912.3m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 39830.2m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
