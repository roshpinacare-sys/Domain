# Tick keeper · 2026-10-26T06:23:24.853Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-26T06:01:11.971Z | 45m | fresh 22.2m <= 45m |
| market-grid-cron.yml | 2026-10-26T06:01:30.477Z | 45m | cooldown: dispatched 22m ago < 60m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 22m ago < 240m |
| twin-audit.yml | 2026-10-25T12:00:33.070Z | 1560m | fresh 1102.9m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 22m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 22m ago < 240m |
| fleet-heartbeat.yml | 2026-10-26T05:34:20.465Z | 90m | fresh 49.1m <= 90m |
| cognition-beat.yml | 2026-10-25T14:40:03.782Z | 90m | cooldown: dispatched 22m ago < 60m |
| office-pulse.yml | 2026-10-26T06:07:56.194Z | 90m | fresh 15.5m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 22m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | cooldown: dispatched 544m ago < 720m |
| books-revival-t28.yml | 2026-10-26T01:46:21.344Z | 1440m | fresh 277.1m <= 1440m |
| sovereign-tick-cron | 2026-10-26T06:01:11.921Z | 20m | RE-FIRED (book stale 22.2m > 20m) |
| earn-audit-cron | 2026-10-26T05:16:53.857Z | 45m | RE-FIRED (book stale 66.5m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
