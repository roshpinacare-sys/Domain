# Tick keeper · 2026-10-26T20:01:24.378Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-26T19:22:13.551Z | 45m | fresh 39.2m <= 45m |
| fill-ledger-cron | 2026-10-26T19:36:57.922Z | 45m | fresh 24.4m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 159m ago < 240m |
| twin-audit.yml | 2026-10-26T13:36:02.284Z | 1560m | fresh 385.4m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 159m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 159m ago < 240m |
| office-pulse.yml | 2026-10-26T19:37:29.789Z | 90m | fresh 23.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 159m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | cooldown: dispatched 513m ago < 720m |
| books-revival-t28.yml | 2026-10-26T14:38:48.683Z | 1440m | fresh 322.6m <= 1440m |
| sovereign-tick-cron | 2026-10-26T19:36:57.868Z | 20m | RE-FIRED (book stale 24.4m > 20m) |
| market-grid-cron.yml | 2026-10-26T18:52:10.629Z | 45m | RE-FIRED (book stale 69.2m > 45m) |
| fleet-heartbeat.yml | 2026-10-26T18:09:47.364Z | 90m | RE-FIRED (book stale 111.6m > 90m) |
| cognition-beat.yml | 2026-10-26T18:07:59.386Z | 90m | RE-FIRED (book stale 113.4m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
