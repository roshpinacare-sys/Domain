# Tick keeper · 2026-11-15T22:57:05.682Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-15T22:45:20.835Z | 45m | fresh 11.7m <= 45m |
| fill-ledger-cron | 2026-11-15T22:45:11.979Z | 45m | fresh 11.9m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 61m ago < 240m |
| twin-audit.yml | 2026-11-15T14:19:10.318Z | 1560m | fresh 517.9m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 61m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 61m ago < 240m |
| office-pulse.yml | 2026-11-15T22:43:23.099Z | 90m | fresh 13.7m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 61m ago < 240m |
| soldiers-curate.yml | 2026-11-15T14:16:50.452Z | 1440m | fresh 520.3m <= 1440m |
| books-revival-t28.yml | 2026-11-15T18:01:27.628Z | 1440m | fresh 295.6m <= 1440m |
| sovereign-tick-cron | 2026-11-15T21:55:28.113Z | 20m | RE-FIRED (book stale 61.6m > 20m) |
| market-grid-cron.yml | 2026-11-15T21:38:58.278Z | 45m | RE-FIRED (book stale 78.1m > 45m) |
| fleet-heartbeat.yml | 2026-11-15T21:15:08.132Z | 90m | RE-FIRED (book stale 102.0m > 90m) |
| cognition-beat.yml | 2026-11-15T19:28:35.375Z | 90m | RE-FIRED (book stale 208.5m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
