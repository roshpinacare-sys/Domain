# Tick keeper · 2026-10-22T01:37:15.568Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, fill-ledger-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-10-22T01:06:33.718Z | 45m | fresh 30.7m <= 45m |
| twin-audit.yml | 2026-10-21T12:26:33.920Z | 1560m | fresh 790.7m <= 1560m |
| fleet-heartbeat.yml | 2026-10-22T01:21:27.645Z | 90m | fresh 15.8m <= 90m |
| cognition-beat.yml | 2026-10-22T00:53:54.138Z | 90m | fresh 43.4m <= 90m |
| office-pulse.yml | 2026-10-22T01:21:59.686Z | 90m | fresh 15.3m <= 90m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 187m ago < 720m |
| books-revival-t28.yml | 2026-10-22T00:15:32.092Z | 1440m | fresh 81.7m <= 1440m |
| sovereign-tick-cron | 2026-10-21T21:24:40.636Z | 20m | RE-FIRED (book stale 252.6m > 20m) |
| fill-ledger-cron | 2026-10-22T00:51:44.526Z | 45m | RE-FIRED (book stale 45.5m > 45m) |
| market-grid-cron.yml | — | 45m | RE-FIRED (no-receipt-yet) |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | RE-FIRED (book stale 8090.9m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 26093.7m > 1560m) |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | RE-FIRED (book stale 3799.2m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
