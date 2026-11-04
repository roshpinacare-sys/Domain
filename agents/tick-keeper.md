# Tick keeper · 2026-11-04T00:40:53.111Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-04T00:22:26.797Z | 20m | cooldown: dispatched 19m ago < 20m |
| fill-ledger-cron | 2026-11-04T00:22:26.866Z | 45m | fresh 18.4m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 19m ago < 240m |
| twin-audit.yml | 2026-11-03T14:40:12.646Z | 1560m | fresh 600.7m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 19m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 19m ago < 240m |
| fleet-heartbeat.yml | 2026-11-03T23:42:28.631Z | 90m | fresh 58.4m <= 90m |
| cognition-beat.yml | 2026-11-03T23:38:31.472Z | 90m | fresh 62.4m <= 90m |
| office-pulse.yml | 2026-11-04T00:26:38.098Z | 90m | fresh 14.3m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 19m ago < 240m |
| soldiers-curate.yml | 2026-11-04T00:00:08.732Z | 1440m | fresh 40.7m <= 1440m |
| books-revival-t28.yml | 2026-11-03T21:17:38.175Z | 1440m | fresh 203.2m <= 1440m |
| earn-audit-cron | 2026-11-03T23:49:24.272Z | 45m | RE-FIRED (book stale 51.5m > 45m) |
| market-grid-cron.yml | 2026-11-03T23:48:15.298Z | 45m | RE-FIRED (book stale 52.6m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
