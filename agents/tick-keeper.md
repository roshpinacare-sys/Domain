# Tick keeper · 2026-11-10T16:04:16.144Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-10T15:46:11.809Z | 45m | fresh 18.1m <= 45m |
| fill-ledger-cron | 2026-11-10T15:46:23.138Z | 45m | fresh 17.9m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 156m ago < 240m |
| twin-audit.yml | 2026-11-10T15:15:20.091Z | 1560m | fresh 48.9m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 156m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 156m ago < 240m |
| office-pulse.yml | 2026-11-10T16:02:23.603Z | 90m | fresh 1.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 156m ago < 240m |
| soldiers-curate.yml | 2026-11-08T22:27:34.580Z | 1440m | cooldown: dispatched 156m ago < 720m |
| books-revival-t28.yml | 2026-11-10T13:01:51.510Z | 1440m | fresh 182.4m <= 1440m |
| sovereign-tick-cron | 2026-11-10T13:28:08.573Z | 20m | RE-FIRED (book stale 156.1m > 20m) |
| market-grid-cron.yml | 2026-11-10T14:54:43.239Z | 45m | RE-FIRED (book stale 69.5m > 45m) |
| fleet-heartbeat.yml | 2026-11-10T14:03:59.701Z | 90m | RE-FIRED (book stale 120.3m > 90m) |
| cognition-beat.yml | 2026-11-10T12:35:45.383Z | 90m | RE-FIRED (book stale 208.5m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
