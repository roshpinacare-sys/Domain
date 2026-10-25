# Tick keeper · 2026-10-25T00:53:39.303Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-25T00:39:22.682Z | 20m | fresh 14.3m <= 20m |
| fill-ledger-cron | 2026-10-25T00:39:22.751Z | 45m | fresh 14.3m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 106m ago < 240m |
| twin-audit.yml | 2026-10-24T11:38:53.262Z | 1560m | fresh 794.8m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 106m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 106m ago < 240m |
| fleet-heartbeat.yml | 2026-10-24T23:41:11.673Z | 90m | fresh 72.5m <= 90m |
| cognition-beat.yml | 2026-10-24T23:40:11.442Z | 90m | fresh 73.5m <= 90m |
| office-pulse.yml | 2026-10-25T00:34:15.126Z | 90m | fresh 19.4m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 106m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | fresh 223.7m <= 1440m |
| books-revival-t28.yml | 2026-10-25T00:33:32.927Z | 1440m | fresh 20.1m <= 1440m |
| earn-audit-cron | 2026-10-24T23:52:34.356Z | 45m | RE-FIRED (book stale 61.1m > 45m) |
| market-grid-cron.yml | 2026-10-24T23:41:12.948Z | 45m | RE-FIRED (book stale 72.4m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
