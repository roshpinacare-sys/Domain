# Tick keeper · 2026-10-20T06:06:50.847Z

STASIS: false · fired: sovereign-tick-cron=status 401, earn-audit-cron=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-20T05:42:15.921Z | 45m | fresh 24.6m <= 45m |
| market-grid-cron.yml | 2026-10-20T05:41:05.019Z | 45m | cooldown: dispatched 24m ago < 60m |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | cooldown: dispatched 24m ago < 240m |
| twin-audit.yml | 2026-10-19T13:59:43.472Z | 1560m | fresh 967.1m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 24m ago < 240m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | fresh 1188.8m <= 1560m |
| fleet-heartbeat.yml | 2026-10-20T05:27:33.013Z | 90m | fresh 39.3m <= 90m |
| cognition-beat.yml | 2026-10-19T22:37:04.766Z | 90m | cooldown: dispatched 24m ago < 60m |
| office-pulse.yml | 2026-10-20T05:26:28.167Z | 90m | fresh 40.4m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 24m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 24m ago < 720m |
| books-revival-t28.yml | 2026-10-20T05:21:57.860Z | 1440m | fresh 44.9m <= 1440m |
| sovereign-tick-cron | 2026-10-20T05:42:15.864Z | 20m | RE-FIRED (book stale 24.6m > 20m) |
| earn-audit-cron | 2026-10-20T05:13:05.051Z | 45m | RE-FIRED (book stale 53.8m > 45m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
