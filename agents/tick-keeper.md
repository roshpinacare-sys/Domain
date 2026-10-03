# Tick keeper · 2026-10-03T22:18:37.142Z

STASIS: false · fired: sovereign-tick-cron=status 404, market-grid-cron=status 404

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-03T21:55:45.550Z | 45m | fresh 22.9m <= 45m |
| fill-ledger-cron | 2026-10-03T21:52:35.139Z | 45m | fresh 26.0m <= 45m |
| sovereign-tick-cron | 2026-10-03T21:35:25.128Z | 20m | RE-FIRED (book stale 43.2m > 20m) |
| market-grid-cron | 2026-10-03T18:41:15.465Z | 120m | RE-FIRED (book stale 217.4m > 120m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
