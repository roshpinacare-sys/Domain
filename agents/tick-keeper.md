# Tick keeper · 2026-10-19T13:42:46.515Z

STASIS: false · fired: market-grid-cron.yml=DISPATCHED, cognition-beat.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-10-19T13:28:28.579Z | 20m | fresh 14.3m <= 20m |
| earn-audit-cron | 2026-10-19T13:15:44.576Z | 45m | fresh 27.0m <= 45m |
| fill-ledger-cron | 2026-10-19T13:28:28.623Z | 45m | fresh 14.3m <= 45m |
| fleet-census-cron.yml | 2026-10-16T10:46:22.288Z | 1560m | cooldown: dispatched 188m ago < 240m |
| twin-audit.yml | 2026-10-19T13:15:46.309Z | 1560m | fresh 27.0m <= 1560m |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | cooldown: dispatched 188m ago < 240m |
| public-pulse.yml | 2026-10-19T10:18:03.809Z | 1560m | fresh 204.7m <= 1560m |
| fleet-heartbeat.yml | 2026-10-19T12:59:02.768Z | 90m | fresh 43.7m <= 90m |
| office-pulse.yml | 2026-10-19T13:28:56.004Z | 90m | fresh 13.8m <= 90m |
| audience-analyst.yml | — | 1560m | cooldown: dispatched 188m ago < 240m |
| soldiers-curate.yml | 2026-10-19T04:33:59.967Z | 1440m | cooldown: dispatched 556m ago < 720m |
| books-revival-t28.yml | 2026-10-19T10:19:25.399Z | 1440m | cooldown: dispatched 556m ago < 720m |
| market-grid-cron.yml | — | 45m | RE-FIRED (no-receipt-yet) |
| cognition-beat.yml | 2026-10-19T11:12:38.171Z | 90m | RE-FIRED (book stale 150.1m > 90m) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
