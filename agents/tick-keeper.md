# Tick keeper · 2026-10-25T11:44:19.293Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-heartbeat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-25T11:10:58.812Z | 45m | fresh 33.3m <= 45m |
| fill-ledger-cron | 2026-10-25T11:11:02.737Z | 45m | fresh 33.3m <= 45m |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 210m ago < 240m |
| twin-audit.yml | 2026-10-24T11:38:53.262Z | 1560m | fresh 1445.4m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 210m ago < 240m |
| public-pulse.yml | 2026-10-22T15:21:30.286Z | 1560m | cooldown: dispatched 210m ago < 240m |
| cognition-beat.yml | 2026-10-25T01:36:18.929Z | 90m | cooldown: dispatched 33m ago < 60m |
| office-pulse.yml | 2026-10-25T11:34:13.210Z | 90m | fresh 10.1m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 210m ago < 240m |
| soldiers-curate.yml | 2026-10-24T21:09:57.526Z | 1440m | fresh 874.4m <= 1440m |
| books-revival-t28.yml | 2026-10-25T10:14:40.910Z | 1440m | fresh 89.6m <= 1440m |
| sovereign-tick-cron | 2026-10-25T11:11:02.696Z | 20m | RE-FIRED (book stale 33.3m > 20m) |
| market-grid-cron.yml | 2026-10-25T10:42:03.418Z | 45m | RE-FIRED (book stale 62.3m > 45m) |
| fleet-heartbeat.yml | 2026-10-25T10:09:09.440Z | 90m | RE-FIRED (book stale 95.2m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
