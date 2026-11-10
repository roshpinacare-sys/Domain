# Tick keeper · 2026-11-10T23:31:20.962Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-10T23:28:45.958Z | 45m | fresh 2.6m <= 45m |
| fill-ledger-cron | 2026-11-10T23:28:52.417Z | 45m | fresh 2.5m <= 45m |
| twin-audit.yml | 2026-11-10T15:15:20.091Z | 1560m | fresh 496.0m <= 1560m |
| fleet-heartbeat.yml | 2026-11-10T23:28:14.818Z | 90m | fresh 3.1m <= 90m |
| cognition-beat.yml | 2026-11-10T22:05:32.928Z | 90m | fresh 85.8m <= 90m |
| office-pulse.yml | 2026-11-10T23:25:08.566Z | 90m | fresh 6.2m <= 90m |
| soldiers-curate.yml | 2026-11-08T22:27:34.580Z | 1440m | cooldown: dispatched 603m ago < 720m |
| books-revival-t28.yml | 2026-11-10T20:37:41.158Z | 1440m | fresh 173.7m <= 1440m |
| sovereign-tick-cron | 2026-11-10T21:48:35.264Z | 20m | RE-FIRED (book stale 102.8m > 20m) |
| market-grid-cron.yml | 2026-11-10T21:48:30.157Z | 45m | RE-FIRED (book stale 102.8m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 27849.8m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 54767.8m > 1560m) |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | RE-FIRED (book stale 12157.9m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
