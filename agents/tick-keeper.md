# Tick keeper · 2026-11-05T12:30:25.554Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-05T11:53:24.681Z | 45m | fresh 37.0m <= 45m |
| twin-audit.yml | 2026-11-04T14:53:03.807Z | 1560m | fresh 1297.4m <= 1560m |
| fleet-heartbeat.yml | 2026-11-05T11:28:57.742Z | 90m | fresh 61.5m <= 90m |
| cognition-beat.yml | 2026-11-05T07:20:37.956Z | 90m | cooldown: dispatched 37m ago < 60m |
| office-pulse.yml | 2026-11-05T12:22:56.209Z | 90m | fresh 7.5m <= 90m |
| soldiers-curate.yml | 2026-11-04T14:51:35.563Z | 1440m | fresh 1298.8m <= 1440m |
| books-revival-t28.yml | 2026-11-05T09:54:39.699Z | 1440m | fresh 155.8m <= 1440m |
| sovereign-tick-cron | 2026-11-05T11:37:27.308Z | 20m | RE-FIRED (book stale 53.0m > 20m) |
| fill-ledger-cron | 2026-11-05T11:37:27.375Z | 45m | RE-FIRED (book stale 53.0m > 45m) |
| market-grid-cron.yml | 2026-11-05T11:28:28.574Z | 45m | RE-FIRED (book stale 61.9m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 19988.9m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 46906.8m > 1560m) |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | RE-FIRED (book stale 4297.0m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
