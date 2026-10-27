# Tick keeper · 2026-10-27T05:15:43.223Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-27T04:53:13.197Z | 45m | fresh 22.5m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 111m ago < 240m |
| twin-audit.yml | 2026-10-26T13:36:02.284Z | 1560m | fresh 939.7m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 111m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 111m ago < 240m |
| office-pulse.yml | 2026-10-27T04:59:25.772Z | 90m | fresh 16.3m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 111m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | cooldown: dispatched 322m ago < 720m |
| books-revival-t28.yml | 2026-10-27T00:06:15.662Z | 1440m | fresh 309.5m <= 1440m |
| sovereign-tick-cron | 2026-10-27T03:09:53.482Z | 20m | RE-FIRED (book stale 125.8m > 20m) |
| earn-audit-cron | 2026-10-27T03:24:25.169Z | 45m | RE-FIRED (book stale 111.3m > 45m) |
| market-grid-cron.yml | 2026-10-27T02:55:05.896Z | 45m | RE-FIRED (book stale 140.6m > 45m) |
| fleet-heartbeat.yml | 2026-10-27T03:26:16.216Z | 90m | RE-FIRED (book stale 109.5m > 90m) |
| cognition-beat.yml | 2026-10-27T03:24:21.449Z | 90m | RE-FIRED (book stale 111.4m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
