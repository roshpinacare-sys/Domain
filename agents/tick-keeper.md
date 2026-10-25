# Tick keeper · 2026-10-25T16:34:14.072Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-25T16:07:56.299Z | 45m | fresh 26.3m <= 45m |
| market-grid-cron.yml | 2026-10-25T16:07:56.433Z | 45m | fresh 26.3m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 99m ago < 240m |
| twin-audit.yml | 2026-10-25T12:00:33.070Z | 1560m | fresh 273.7m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 99m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 99m ago < 240m |
| office-pulse.yml | 2026-10-25T15:50:42.656Z | 90m | fresh 43.5m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 99m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | fresh 1164.3m <= 1440m |
| books-revival-t28.yml | 2026-10-25T14:35:28.817Z | 1440m | fresh 118.8m <= 1440m |
| sovereign-tick-cron | 2026-10-25T14:36:03.405Z | 20m | RE-FIRED (book stale 118.2m > 20m) |
| earn-audit-cron | 2026-10-25T14:40:16.675Z | 45m | RE-FIRED (book stale 114.0m > 45m) |
| fleet-heartbeat.yml | 2026-10-25T14:35:17.733Z | 90m | RE-FIRED (book stale 118.9m > 90m) |
| cognition-beat.yml | 2026-10-25T14:40:03.782Z | 90m | RE-FIRED (book stale 114.2m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
