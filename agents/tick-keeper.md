# Tick keeper · 2026-10-25T19:46:05.008Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-25T19:44:01.030Z | 45m | fresh 2.1m <= 45m |
| fill-ledger-cron | 2026-10-25T19:01:38.186Z | 45m | fresh 44.4m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 45m ago < 240m |
| twin-audit.yml | 2026-10-25T12:00:33.070Z | 1560m | fresh 465.5m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 45m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 45m ago < 240m |
| fleet-heartbeat.yml | 2026-10-25T19:15:01.283Z | 90m | fresh 31.1m <= 90m |
| cognition-beat.yml | 2026-10-25T14:40:03.782Z | 90m | cooldown: dispatched 45m ago < 60m |
| office-pulse.yml | 2026-10-25T19:13:09.326Z | 90m | fresh 32.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 45m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | fresh 1356.1m <= 1440m |
| books-revival-t28.yml | 2026-10-25T17:53:40.682Z | 1440m | fresh 112.4m <= 1440m |
| sovereign-tick-cron | 2026-10-25T19:01:38.134Z | 20m | RE-FIRED (book stale 44.4m > 20m) |
| market-grid-cron.yml | 2026-10-25T18:31:26.455Z | 45m | RE-FIRED (book stale 74.6m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
