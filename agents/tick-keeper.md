# Tick keeper · 2026-10-25T06:16:19.374Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-25T05:47:52.216Z | 45m | fresh 28.5m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 162m ago < 240m |
| twin-audit.yml | 2026-10-24T11:38:53.262Z | 1560m | fresh 1117.4m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 162m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 162m ago < 240m |
| fleet-heartbeat.yml | 2026-10-25T05:16:55.707Z | 90m | fresh 59.4m <= 90m |
| cognition-beat.yml | 2026-10-25T01:36:18.929Z | 90m | cooldown: dispatched 28m ago < 60m |
| office-pulse.yml | 2026-10-25T06:05:18.585Z | 90m | fresh 11.0m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 162m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | fresh 546.4m <= 1440m |
| books-revival-t28.yml | 2026-10-25T05:23:24.896Z | 1440m | fresh 52.9m <= 1440m |
| sovereign-tick-cron | 2026-10-25T05:47:52.149Z | 20m | RE-FIRED (book stale 28.5m > 20m) |
| earn-audit-cron | 2026-10-25T05:21:37.572Z | 45m | RE-FIRED (book stale 54.7m > 45m) |
| market-grid-cron.yml | 2026-10-25T05:15:46.627Z | 45m | RE-FIRED (book stale 60.5m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
