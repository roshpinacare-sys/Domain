# Tick keeper · 2026-10-23T21:35:00.694Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, cognition-beat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-23T21:20:48.309Z | 20m | fresh 14.2m <= 20m |
| fill-ledger-cron | 2026-10-23T21:20:48.363Z | 45m | fresh 14.2m <= 45m |
| twin-audit.yml | 2026-10-23T12:09:50.923Z | 1560m | fresh 565.2m <= 1560m |
| fleet-heartbeat.yml | 2026-10-23T21:05:38.650Z | 90m | fresh 29.4m <= 90m |
| office-pulse.yml | 2026-10-23T21:16:33.432Z | 90m | fresh 18.5m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 478m ago < 720m |
| books-revival-t28.yml | 2026-10-23T20:39:55.222Z | 1440m | fresh 55.1m <= 1440m |
| earn-audit-cron | 2026-10-23T20:21:15.482Z | 45m | RE-FIRED (book stale 73.8m > 45m) |
| market-grid-cron.yml | 2026-10-23T20:21:24.428Z | 45m | RE-FIRED (book stale 73.6m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 1813.5m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 28731.4m > 1560m) |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 1813.5m > 1560m) |
| cognition-beat.yml | 2026-10-23T19:31:28.328Z | 90m | RE-FIRED (book stale 123.5m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
