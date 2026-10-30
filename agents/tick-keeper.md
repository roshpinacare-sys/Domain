# Tick keeper · 2026-10-30T16:43:31.409Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-30T16:03:07.521Z | 45m | fresh 40.4m <= 45m |
| fill-ledger-cron | 2026-10-30T16:03:10.797Z | 45m | fresh 40.3m <= 45m |
| twin-audit.yml | 2026-10-30T13:40:13.491Z | 1560m | fresh 183.3m <= 1560m |
| fleet-heartbeat.yml | 2026-10-30T15:18:56.368Z | 90m | fresh 84.6m <= 90m |
| cognition-beat.yml | 2026-10-30T08:56:55.494Z | 90m | cooldown: dispatched 40m ago < 60m |
| office-pulse.yml | 2026-10-30T16:34:47.002Z | 90m | fresh 8.7m <= 90m |
| soldiers-curate.yml | 2026-10-29T22:57:54.480Z | 1440m | fresh 1065.6m <= 1440m |
| books-revival-t28.yml | 2026-10-30T16:16:13.350Z | 1440m | fresh 27.3m <= 1440m |
| sovereign-tick-cron | 2026-10-30T16:03:10.733Z | 20m | RE-FIRED (book stale 40.3m > 20m) |
| market-grid-cron.yml | 2026-10-30T15:47:20.923Z | 45m | RE-FIRED (book stale 56.2m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 11602.0m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 38519.9m > 1560m) |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 11602.0m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
