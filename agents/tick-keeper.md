# Tick keeper · 2026-10-26T08:30:52.693Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-26T08:15:55.324Z | 20m | fresh 15.0m <= 20m |
| earn-audit-cron | 2026-10-26T08:16:12.173Z | 45m | fresh 14.7m <= 45m |
| fill-ledger-cron | 2026-10-26T08:15:55.387Z | 45m | fresh 15.0m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 149m ago < 240m |
| twin-audit.yml | 2026-10-25T12:00:33.070Z | 1560m | fresh 1230.3m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 149m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 149m ago < 240m |
| office-pulse.yml | 2026-10-26T08:13:42.761Z | 90m | fresh 17.2m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 149m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | cooldown: dispatched 671m ago < 720m |
| books-revival-t28.yml | 2026-10-26T07:01:55.385Z | 1440m | fresh 89.0m <= 1440m |
| market-grid-cron.yml | 2026-10-26T07:43:50.492Z | 45m | RE-FIRED (book stale 47.0m > 45m) |
| fleet-heartbeat.yml | 2026-10-26T07:00:06.830Z | 90m | RE-FIRED (book stale 90.8m > 90m) |
| cognition-beat.yml | 2026-10-26T06:54:51.080Z | 90m | RE-FIRED (book stale 96.0m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
