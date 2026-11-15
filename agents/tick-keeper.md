# Tick keeper · 2026-11-15T05:09:47.662Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-15T04:53:23.806Z | 20m | fresh 16.4m <= 20m |
| earn-audit-cron | 2026-11-15T04:37:18.400Z | 45m | fresh 32.5m <= 45m |
| fill-ledger-cron | 2026-11-15T04:53:23.855Z | 45m | fresh 16.4m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 141m ago < 240m |
| twin-audit.yml | 2026-11-14T13:48:34.874Z | 1560m | fresh 921.2m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 141m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 141m ago < 240m |
| office-pulse.yml | 2026-11-15T05:08:28.395Z | 90m | fresh 1.3m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 141m ago < 240m |
| soldiers-curate.yml | 2026-11-14T13:46:18.013Z | 1440m | fresh 923.5m <= 1440m |
| books-revival-t28.yml | 2026-11-15T03:07:19.463Z | 1440m | fresh 122.5m <= 1440m |
| market-grid-cron.yml | 2026-11-15T02:48:08.999Z | 45m | RE-FIRED (book stale 141.6m > 45m) |
| fleet-heartbeat.yml | 2026-11-15T03:00:02.271Z | 90m | RE-FIRED (book stale 129.8m > 90m) |
| cognition-beat.yml | 2026-11-14T23:20:35.751Z | 90m | RE-FIRED (book stale 349.2m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
