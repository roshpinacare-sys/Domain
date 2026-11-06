# Tick keeper · 2026-11-06T11:54:35.494Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-06T11:38:16.638Z | 20m | fresh 16.3m <= 20m |
| fill-ledger-cron | 2026-11-06T11:38:16.708Z | 45m | fresh 16.3m <= 45m |
| market-grid-cron.yml | 2026-11-06T11:27:18.476Z | 45m | fresh 27.3m <= 45m |
| twin-audit.yml | 2026-11-05T14:58:33.807Z | 1560m | fresh 1256.0m <= 1560m |
| fleet-heartbeat.yml | 2026-11-06T11:04:12.917Z | 90m | fresh 50.4m <= 90m |
| cognition-beat.yml | 2026-11-06T11:04:02.562Z | 90m | fresh 50.5m <= 90m |
| office-pulse.yml | 2026-11-06T11:31:31.588Z | 90m | fresh 23.1m <= 90m |
| soldiers-curate.yml | 2026-11-04T14:51:35.563Z | 1440m | cooldown: dispatched 144m ago < 720m |
| books-revival-t28.yml | 2026-11-06T11:33:54.435Z | 1440m | fresh 20.7m <= 1440m |
| earn-audit-cron | 2026-11-06T11:04:03.211Z | 45m | RE-FIRED (book stale 50.5m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 21393.1m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 48311.0m > 1560m) |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | RE-FIRED (book stale 5701.2m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
