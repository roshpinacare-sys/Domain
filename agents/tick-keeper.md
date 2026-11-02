# Tick keeper · 2026-11-02T02:35:25.800Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-02T02:05:34.417Z | 45m | fresh 29.9m <= 45m |
| fill-ledger-cron | 2026-11-02T02:05:22.843Z | 45m | fresh 30.0m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 221m ago < 240m |
| twin-audit.yml | 2026-11-01T14:14:49.341Z | 1560m | fresh 740.6m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 221m ago < 240m |
| public-pulse.yml | 2026-10-31T10:38:00.320Z | 1560m | cooldown: dispatched 221m ago < 240m |
| cognition-beat.yml | 2026-11-01T20:47:59.735Z | 90m | cooldown: dispatched 30m ago < 60m |
| office-pulse.yml | 2026-11-02T02:20:41.714Z | 90m | fresh 14.7m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 221m ago < 240m |
| soldiers-curate.yml | 2026-11-01T13:45:25.210Z | 1440m | fresh 770.0m <= 1440m |
| books-revival-t28.yml | 2026-11-01T23:55:08.197Z | 1440m | fresh 160.3m <= 1440m |
| sovereign-tick-cron | 2026-11-02T02:05:22.787Z | 20m | RE-FIRED (book stale 30.1m > 20m) |
| market-grid-cron.yml | 2026-11-02T01:49:03.445Z | 45m | RE-FIRED (book stale 46.4m > 45m) |
| fleet-heartbeat.yml | 2026-11-02T01:01:07.874Z | 90m | RE-FIRED (book stale 94.3m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
