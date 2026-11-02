# Tick keeper · 2026-11-02T09:45:47.118Z

STASIS: false · fired: earn-audit-cron=DISPATCHED, market-grid-cron.yml=DISPATCHED, fleet-census-cron.yml=DISPATCHED, self-audience.yml=DISPATCHED, public-pulse.yml=DISPATCHED, cognition-beat.yml=DISPATCHED, audience-analyst.yml=DISPATCHED

| desk | last receipt | law | verdict |
|---|---|---|---|
| sovereign-tick-cron | 2026-11-02T09:30:02.425Z | 20m | fresh 15.7m <= 20m |
| fill-ledger-cron | 2026-11-02T09:30:02.496Z | 45m | fresh 15.7m <= 45m |
| twin-audit.yml | 2026-11-01T14:14:49.341Z | 1560m | fresh 1171.0m <= 1560m |
| fleet-heartbeat.yml | 2026-11-02T08:38:31.069Z | 90m | fresh 67.3m <= 90m |
| office-pulse.yml | 2026-11-02T09:13:04.383Z | 90m | fresh 32.7m <= 90m |
| soldiers-curate.yml | 2026-11-01T13:45:25.210Z | 1440m | fresh 1200.4m <= 1440m |
| books-revival-t28.yml | 2026-11-02T06:53:52.461Z | 1440m | fresh 171.9m <= 1440m |
| earn-audit-cron | 2026-11-02T07:17:36.027Z | 45m | RE-FIRED (book stale 148.2m > 45m) |
| market-grid-cron.yml | 2026-11-02T08:55:15.090Z | 45m | RE-FIRED (book stale 50.5m > 45m) |
| fleet-census-cron.yml | 2026-10-22T15:21:30.286Z | 1560m | RE-FIRED (book stale 15504.3m > 1560m) |
| self-audience.yml | 2026-10-03T22:43:34.930Z | 1560m | RE-FIRED (book stale 42422.2m > 1560m) |
| public-pulse.yml | 2026-10-31T10:38:00.320Z | 1560m | RE-FIRED (book stale 2827.8m > 1560m) |
| cognition-beat.yml | 2026-11-02T08:13:22.791Z | 90m | RE-FIRED (book stale 92.4m > 90m) |
| audience-analyst.yml | — | 1560m | RE-FIRED (no-receipt-yet) |

_the healer obeys the breaker: STASIS halts before any dispatch; cooldown 20m per desk; the arc's own receipts (pushed by the desks) are the only truth measured_
