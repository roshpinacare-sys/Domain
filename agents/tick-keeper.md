# Tick keeper · 2026-11-01T01:34:16.340Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED, soldiers-curate.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-01T01:17:28.625Z | 20m | fresh 16.8m <= 20m |
| earn-audit-cron | 2026-11-01T01:17:00.975Z | 45m | fresh 17.3m <= 45m |
| fill-ledger-cron | 2026-11-01T01:17:28.698Z | 45m | fresh 16.8m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 126m ago < 240m |
| twin-audit.yml | 2026-10-31T13:05:46.238Z | 1560m | fresh 748.5m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 126m ago < 240m |
| public-pulse.yml | 2026-10-31T10:38:00.320Z | 1560m | fresh 896.3m <= 1560m |
| office-pulse.yml | 2026-11-01T01:30:29.254Z | 90m | fresh 3.8m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 126m ago < 240m |
| books-revival-t28.yml | 2026-11-01T01:29:34.350Z | 1440m | fresh 4.7m <= 1440m |
| market-grid-cron.yml | 2026-11-01T00:24:51.988Z | 45m | RE-FIRED (book stale 69.4m > 45m) |
| fleet-heartbeat.yml | 2026-10-31T23:42:28.591Z | 90m | RE-FIRED (book stale 111.8m > 90m) |
| cognition-beat.yml | 2026-10-31T13:50:53.163Z | 90m | RE-FIRED (book stale 703.4m > 90m) |
| soldiers-curate.yml | 2026-10-29T22:57:54.480Z | 1440m | RE-FIRED (book stale 3036.4m > 1440m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
