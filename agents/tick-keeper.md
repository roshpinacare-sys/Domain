# Tick keeper · 2026-11-07T00:55:10.581Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-07T00:24:03.126Z | 45m | fresh 31.1m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 148m ago < 240m |
| twin-audit.yml | 2026-11-06T14:37:37.536Z | 1560m | fresh 617.6m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 148m ago < 240m |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | cooldown: dispatched 148m ago < 240m |
| fleet-heartbeat.yml | 2026-11-06T23:52:49.636Z | 90m | fresh 62.3m <= 90m |
| office-pulse.yml | 2026-11-07T00:51:18.708Z | 90m | fresh 3.9m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 148m ago < 240m |
| soldiers-curate.yml | 2026-11-06T14:35:49.490Z | 1440m | fresh 619.4m <= 1440m |
| books-revival-t28.yml | 2026-11-06T23:33:19.932Z | 1440m | fresh 81.8m <= 1440m |
| sovereign-tick-cron | 2026-11-06T23:16:10.771Z | 20m | RE-FIRED (book stale 99.0m > 20m) |
| earn-audit-cron | 2026-11-06T23:16:41.090Z | 45m | RE-FIRED (book stale 98.5m > 45m) |
| market-grid-cron.yml | 2026-11-07T00:06:38.771Z | 45m | RE-FIRED (book stale 48.5m > 45m) |
| cognition-beat.yml | 2026-11-06T11:04:02.562Z | 90m | RE-FIRED (book stale 831.1m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
