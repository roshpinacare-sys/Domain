# Tick keeper · 2026-10-21T15:00:30.806Z

STASIS: false · fired: sovereign-tick-cron=status 401, market-grid-cron.yml=status 401, fleet-census-cron.yml=status 401, self-audience.yml=status 401, public-pulse.yml=status 401, audience-analyst.yml=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-21T14:45:32.200Z | 45m | fresh 15.0m <= 45m |
| fill-ledger-cron | 2026-10-21T14:45:44.456Z | 45m | fresh 14.8m <= 45m |
| twin-audit.yml | 2026-10-21T12:26:33.920Z | 1560m | fresh 153.9m <= 1560m |
| fleet-heartbeat.yml | 2026-10-21T14:15:47.569Z | 90m | fresh 44.7m <= 90m |
| cognition-beat.yml | 2026-10-21T14:30:16.256Z | 90m | fresh 30.2m <= 90m |
| office-pulse.yml | 2026-10-21T14:41:06.578Z | 90m | fresh 19.4m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 283m ago < 720m |
| books-revival-t28.yml | 2026-10-21T12:27:36.040Z | 1440m | fresh 152.9m <= 1440m |
| sovereign-tick-cron | 2026-10-21T14:30:36.462Z | 20m | RE-FIRED (book stale 29.9m > 20m) |
| market-grid-cron.yml | 2026-10-21T13:46:44.652Z | 45m | RE-FIRED (book stale 73.8m > 45m) |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | RE-FIRED (book stale 7454.1m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 25456.9m > 1560m) |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | RE-FIRED (book stale 3162.4m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
