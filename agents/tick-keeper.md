# Tick keeper · 2026-11-01T06:23:19.812Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, earn-audit-cron=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-11-01T05:55:45.230Z | 45m | fresh 27.6m <= 45m |
| market-grid-cron.yml | 2026-11-01T05:55:41.491Z | 45m | cooldown: dispatched 27m ago < 60m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 173m ago < 240m |
| twin-audit.yml | 2026-10-31T13:05:46.238Z | 1560m | fresh 1037.6m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 173m ago < 240m |
| public-pulse.yml | 2026-10-31T10:38:00.320Z | 1560m | fresh 1185.3m <= 1560m |
| fleet-heartbeat.yml | 2026-11-01T05:56:30.938Z | 90m | cooldown: dispatched 27m ago < 60m |
| cognition-beat.yml | 2026-11-01T02:31:57.845Z | 90m | cooldown: dispatched 27m ago < 60m |
| office-pulse.yml | 2026-11-01T05:47:35.509Z | 90m | fresh 35.7m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 173m ago < 240m |
| soldiers-curate.yml | 2026-10-29T22:57:54.480Z | 1440m | cooldown: dispatched 289m ago < 720m |
| books-revival-t28.yml | 2026-11-01T01:29:34.350Z | 1440m | fresh 293.8m <= 1440m |
| sovereign-tick-cron | 2026-11-01T05:55:45.152Z | 20m | RE-FIRED (book stale 27.6m > 20m) |
| earn-audit-cron | 2026-11-01T05:26:02.419Z | 45m | RE-FIRED (book stale 57.3m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
