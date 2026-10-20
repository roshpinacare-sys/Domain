# Tick keeper · 2026-10-20T16:55:29.556Z

STASIS: false · fired: sovereign-tick-cron=status 401, earn-audit-cron=status 401, market-grid-cron.yml=status 401, public-pulse.yml=status 401, cognition-beat.yml=status 401

| desk | last receipt | law | verdict |
|---|---|---|---|
| fill-ledger-cron | 2026-10-20T16:30:05.427Z | 45m | fresh 25.4m <= 45m |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | cooldown: dispatched 101m ago < 240m |
| twin-audit.yml | 2026-10-20T15:15:48.995Z | 1560m | fresh 99.7m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 101m ago < 240m |
| fleet-heartbeat.yml | 2026-10-20T15:41:42.151Z | 90m | fresh 73.8m <= 90m |
| office-pulse.yml | 2026-10-20T16:29:13.346Z | 90m | fresh 26.3m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 101m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 673m ago < 720m |
| books-revival-t28.yml | 2026-10-20T15:23:43.669Z | 1440m | fresh 91.8m <= 1440m |
| sovereign-tick-cron | 2026-10-20T15:24:04.928Z | 20m | RE-FIRED (book stale 91.4m > 20m) |
| earn-audit-cron | 2026-10-20T15:41:37.783Z | 45m | RE-FIRED (book stale 73.9m > 45m) |
| market-grid-cron.yml | 2026-10-20T15:56:32.783Z | 45m | RE-FIRED (book stale 58.9m > 45m) |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | RE-FIRED (book stale 1837.4m > 1560m) |
| cognition-beat.yml | 2026-10-20T12:05:01.804Z | 90m | RE-FIRED (book stale 290.5m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
