# Tick keeper · 2026-10-26T21:26:18.924Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-26T20:43:27.882Z | 45m | fresh 42.9m <= 45m |
| market-grid-cron.yml | 2026-10-26T20:44:22.545Z | 45m | fresh 41.9m <= 45m |
| twin-audit.yml | 2026-10-26T13:36:02.284Z | 1560m | fresh 470.3m <= 1560m |
| fleet-heartbeat.yml | 2026-10-26T20:08:14.023Z | 90m | fresh 78.1m <= 90m |
| cognition-beat.yml | 2026-10-26T20:08:30.077Z | 90m | fresh 77.8m <= 90m |
| office-pulse.yml | 2026-10-26T21:01:49.204Z | 90m | fresh 24.5m <= 90m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | cooldown: dispatched 598m ago < 720m |
| books-revival-t28.yml | 2026-10-26T20:10:30.660Z | 1440m | fresh 75.8m <= 1440m |
| sovereign-tick-cron | 2026-10-26T20:02:10.386Z | 20m | RE-FIRED (book stale 84.1m > 20m) |
| earn-audit-cron | 2026-10-26T20:38:38.645Z | 45m | RE-FIRED (book stale 47.7m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 6124.8m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 33042.7m > 1560m) |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 6124.8m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
