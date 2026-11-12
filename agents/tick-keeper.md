# Tick keeper · 2026-11-12T20:55:04.623Z

STASIS: false · fired: sovereign-tick-cron=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| earn-audit-cron | 2026-11-12T20:30:08.534Z | 45m | fresh 24.9m <= 45m |
| fill-ledger-cron | 2026-11-12T20:29:56.208Z | 45m | fresh 25.1m <= 45m |
| market-grid-cron.yml | 2026-11-12T20:24:15.771Z | 45m | fresh 30.8m <= 45m |
| twin-audit.yml | 2026-11-12T15:37:14.656Z | 1560m | fresh 317.8m <= 1560m |
| fleet-heartbeat.yml | 2026-11-12T20:25:11.412Z | 90m | fresh 29.9m <= 90m |
| cognition-beat.yml | 2026-11-12T13:12:21.764Z | 90m | cooldown: dispatched 25m ago < 60m |
| office-pulse.yml | 2026-11-12T20:35:07.525Z | 90m | fresh 20.0m <= 90m |
| soldiers-curate.yml | 2026-11-11T14:41:46.403Z | 1440m | cooldown: dispatched 245m ago < 720m |
| books-revival-t28.yml | 2026-11-12T13:17:49.952Z | 1440m | fresh 457.2m <= 1440m |
| sovereign-tick-cron | 2026-11-12T20:29:56.135Z | 20m | RE-FIRED (book stale 25.1m > 20m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 30573.6m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 57491.5m > 1560m) |
| public-pulse.yml | 2026-11-02T12:53:25.625Z | 1560m | RE-FIRED (book stale 14881.6m > 1560m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
