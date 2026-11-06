# Tick keeper · 2026-11-06T14:08:04.664Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-06T13:34:34.688Z | 45m | fresh 33.5m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 133m ago < 240m |
| twin-audit.yml | 2026-11-05T14:58:33.807Z | 1560m | fresh 1389.5m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 133m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 133m ago < 240m |
| fleet-heartbeat.yml | 2026-11-06T13:51:10.478Z | 90m | fresh 16.9m <= 90m |
| office-pulse.yml | 2026-11-06T13:35:11.490Z | 90m | fresh 32.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 133m ago < 240m |
| soldiers-curate.yml | 2026-11-04T14:51:35.563Z | 1440m | cooldown: dispatched 277m ago < 720m |
| books-revival-t28.yml | 2026-11-06T11:33:54.435Z | 1440m | fresh 154.2m <= 1440m |
| sovereign-tick-cron | 2026-11-06T13:17:47.012Z | 20m | RE-FIRED (book stale 50.3m > 20m) |
| fill-ledger-cron | 2026-11-06T13:17:47.068Z | 45m | RE-FIRED (book stale 50.3m > 45m) |
| market-grid-cron.yml | 2026-11-06T12:45:35.135Z | 45m | RE-FIRED (book stale 82.5m > 45m) |
| cognition-beat.yml | 2026-11-06T11:04:02.562Z | 90m | RE-FIRED (book stale 184.0m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
