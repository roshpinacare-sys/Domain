# Tick keeper · 2026-11-11T01:26:54.023Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-11T01:10:14.825Z | 45m | fresh 16.7m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 115m ago < 240m |
| twin-audit.yml | 2026-11-10T15:15:20.091Z | 1560m | fresh 611.6m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 115m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 115m ago < 240m |
| cognition-beat.yml | 2026-11-11T00:52:33.250Z | 90m | fresh 34.3m <= 90m |
| office-pulse.yml | 2026-11-11T01:18:15.315Z | 90m | fresh 8.6m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 115m ago < 240m |
| soldiers-curate.yml | 2026-11-10T23:42:32.472Z | 1440m | cooldown: dispatched 719m ago < 720m |
| books-revival-t28.yml | 2026-11-11T00:55:05.644Z | 1440m | fresh 31.8m <= 1440m |
| sovereign-tick-cron | 2026-11-10T23:33:48.597Z | 20m | RE-FIRED (book stale 113.1m > 20m) |
| fill-ledger-cron | 2026-11-10T23:40:21.041Z | 45m | RE-FIRED (book stale 106.5m > 45m) |
| market-grid-cron.yml | 2026-11-10T23:42:47.256Z | 45m | RE-FIRED (book stale 104.1m > 45m) |
| fleet-heartbeat.yml | 2026-11-10T23:42:05.301Z | 90m | RE-FIRED (book stale 104.8m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
