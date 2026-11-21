# Tick keeper · 2026-11-21T09:21:56.322Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-21T09:05:47.993Z | 45m | fresh 16.1m <= 45m |
| twin-audit.yml | 2026-11-20T15:46:28.189Z | 1560m | fresh 1055.5m <= 1560m |
| public-pulse.yml | 2026-11-20T13:37:12.383Z | 1560m | fresh 1184.7m <= 1560m |
| cognition-beat.yml | 2026-11-21T08:43:52.704Z | 90m | fresh 38.1m <= 90m |
| office-pulse.yml | 2026-11-21T08:57:57.709Z | 90m | fresh 24.0m <= 90m |
| soldiers-curate.yml | 2026-11-15T23:09:20.256Z | 1440m | cooldown: dispatched 552m ago < 720m |
| books-revival-t28.yml | 2026-11-21T07:43:44.034Z | 1440m | fresh 98.2m <= 1440m |
| sovereign-tick-cron | 2026-11-21T06:23:15.944Z | 20m | RE-FIRED (book stale 178.7m > 20m) |
| earn-audit-cron | 2026-11-21T06:55:55.923Z | 45m | RE-FIRED (book stale 146.0m > 45m) |
| market-grid-cron.yml | 2026-11-21T06:55:56.068Z | 45m | RE-FIRED (book stale 146.0m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 42840.4m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 69758.4m > 1560m) |
| fleet-heartbeat.yml | 2026-11-21T07:40:26.421Z | 90m | RE-FIRED (book stale 101.5m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
