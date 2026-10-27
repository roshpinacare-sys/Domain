# Tick keeper · 2026-10-27T16:43:35.981Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-27T16:03:19.104Z | 45m | fresh 40.3m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 200m ago < 240m |
| twin-audit.yml | 2026-10-27T12:41:19.040Z | 1560m | fresh 242.3m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 200m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 200m ago < 240m |
| fleet-heartbeat.yml | 2026-10-27T15:52:24.274Z | 90m | fresh 51.2m <= 90m |
| office-pulse.yml | 2026-10-27T16:28:47.276Z | 90m | fresh 14.8m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 200m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | cooldown: dispatched 200m ago < 720m |
| books-revival-t28.yml | 2026-10-27T11:01:48.408Z | 1440m | fresh 341.8m <= 1440m |
| sovereign-tick-cron | 2026-10-27T16:03:19.038Z | 20m | RE-FIRED (book stale 40.3m > 20m) |
| earn-audit-cron | 2026-10-27T15:23:05.813Z | 45m | RE-FIRED (book stale 80.5m > 45m) |
| market-grid-cron.yml | 2026-10-27T15:34:21.116Z | 45m | RE-FIRED (book stale 69.2m > 45m) |
| cognition-beat.yml | 2026-10-27T15:07:45.342Z | 90m | RE-FIRED (book stale 95.8m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
