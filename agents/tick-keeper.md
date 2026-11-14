# Tick keeper · 2026-11-14T04:20:31.497Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-14T04:04:02.110Z | 20m | fresh 16.5m <= 20m |
| fill-ledger-cron | 2026-11-14T04:04:02.182Z | 45m | fresh 16.5m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 115m ago < 240m |
| twin-audit.yml | 2026-11-13T14:55:16.521Z | 1560m | fresh 805.2m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 115m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 115m ago < 240m |
| fleet-heartbeat.yml | 2026-11-14T03:32:14.555Z | 90m | fresh 48.3m <= 90m |
| office-pulse.yml | 2026-11-14T04:02:35.584Z | 90m | fresh 17.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 115m ago < 240m |
| soldiers-curate.yml | 2026-11-13T07:26:27.911Z | 1440m | fresh 1254.1m <= 1440m |
| books-revival-t28.yml | 2026-11-13T23:55:56.920Z | 1440m | fresh 264.6m <= 1440m |
| earn-audit-cron | 2026-11-14T02:25:17.622Z | 45m | RE-FIRED (book stale 115.2m > 45m) |
| market-grid-cron.yml | 2026-11-14T03:30:57.553Z | 45m | RE-FIRED (book stale 49.6m > 45m) |
| cognition-beat.yml | 2026-11-14T02:08:33.226Z | 90m | RE-FIRED (book stale 132.0m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
