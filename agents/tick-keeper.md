# Tick keeper · 2026-11-06T22:26:23.551Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, cognition-beat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-06T22:10:30.797Z | 20m | fresh 15.9m <= 20m |
| earn-audit-cron | 2026-11-06T21:54:23.810Z | 45m | fresh 32.0m <= 45m |
| fill-ledger-cron | 2026-11-06T22:10:30.865Z | 45m | fresh 15.9m <= 45m |
| twin-audit.yml | 2026-11-06T14:37:37.536Z | 1560m | fresh 468.8m <= 1560m |
| fleet-heartbeat.yml | 2026-11-06T21:02:41.894Z | 90m | fresh 83.7m <= 90m |
| office-pulse.yml | 2026-11-06T22:02:47.543Z | 90m | fresh 23.6m <= 90m |
| soldiers-curate.yml | 2026-11-06T14:35:49.490Z | 1440m | fresh 470.6m <= 1440m |
| books-revival-t28.yml | 2026-11-06T18:30:22.079Z | 1440m | fresh 236.0m <= 1440m |
| market-grid-cron.yml | 2026-11-06T21:34:47.067Z | 45m | RE-FIRED (book stale 51.6m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 22024.9m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 48942.8m > 1560m) |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | RE-FIRED (book stale 6333.0m > 1560m) |
| cognition-beat.yml | 2026-11-06T11:04:02.562Z | 90m | RE-FIRED (book stale 682.3m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
