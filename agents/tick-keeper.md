# Tick keeper · 2026-11-14T19:14:20.868Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-14T18:30:54.075Z | 45m | fresh 43.4m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 190m ago < 240m |
| twin-audit.yml | 2026-11-14T13:48:34.874Z | 1560m | fresh 325.8m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 190m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 190m ago < 240m |
| cognition-beat.yml | 2026-11-14T18:14:05.333Z | 90m | fresh 60.3m <= 90m |
| office-pulse.yml | 2026-11-14T18:34:23.033Z | 90m | fresh 40.0m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 190m ago < 240m |
| soldiers-curate.yml | 2026-11-14T13:46:18.013Z | 1440m | cooldown: dispatched 646m ago < 720m |
| books-revival-t28.yml | 2026-11-14T14:32:49.653Z | 1440m | fresh 281.5m <= 1440m |
| sovereign-tick-cron | 2026-11-14T18:30:54.000Z | 20m | RE-FIRED (book stale 43.4m > 20m) |
| earn-audit-cron | 2026-11-14T17:57:38.972Z | 45m | RE-FIRED (book stale 76.7m > 45m) |
| market-grid-cron.yml | 2026-11-14T18:28:04.429Z | 45m | RE-FIRED (book stale 46.3m > 45m) |
| fleet-heartbeat.yml | 2026-11-14T17:17:25.649Z | 90m | RE-FIRED (book stale 116.9m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
