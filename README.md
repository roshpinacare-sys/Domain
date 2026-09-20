# SAOS· Domain - the public home of THE WEAVE console

This repository serves the public console of the SAOS ecosystem at
https://roshpinacare-sys.github.io/Domain/ - one complete, comprehensive
console: a single-page app plus the sovereign wallet, the truth gate, the
receipt wall, the content hub and the nine system fronts. No build step,
no tracking, no external dependencies, no CDN assets. Everything it serves
lives in this repository.

## Lineage (honest history)

The operator opened this empty repository on 2026-09-20 and asked for a
clean, complete, professional home. The verified state was ported in full
from the Console repository at commit 8450edc (the R61 complete-map
regime, measured ALL-GREEN at port time): every page, every front, the
wallet, the hub, the receipts, the verification contract. The Console
repository remains untouched and live in parallel - which home becomes
canonical is the operator's recorded decision (agent/state.json, OL-12).

Nothing was invented in the move: the port is byte-faithful except for
the base-path migration (every link relative or rebased to this home's
URL), one typography fix (a stray emoji in the wallet page, against the
site's own language contract), the roast stub now redirecting directly to
the living truth gate, and the honest restart of the truth machines'
history (this home's streak begins here - no imported verdicts).

## What is live here (measured, zero secrets)

Four workflows run inside this repository on its own GITHUB_TOKEN:

- `console-publish` (hourly at :45) - render.mjs re-reads THE WEAVE's
  anchor line from a public Steem RPC node (custom_json `saos.weave.core.v1`,
  posting authority, keyless) and commits `status.json`. The public chain
  is the source of truth: no private repository is read, no credential
  exists, and the death of any other environment cannot take this console
  down.
- `truth-gate` (hourly at :07) - truth/truth-gate-ci.cjs measures the LIVE
  deployed site (site-up, zero broken links, witness freshness, live
  format, bridgehead sanity, complete map, SLO ledger) and commits the
  verdict. A red verdict is committed first, then fails the run in public.
- `agent-verify` (every 2h at :55) - the network verifies the agent
  against `agent/verify/assertions.json` and publishes
  `agent/verify/results.json`.
- `dex-watch` (every 20 min) - scans the public deposit addresses on
  TRON/ETH/SOL/BTC with public RPCs and maintains the open deposit book.

## The machine twin (OL-14 healing, 2026-09-20)

At 12:36Z on 2026-09-20 every private-repo Actions run across the
ecosystem began failing instantly (jobs rejected before any step runs,
no logs generated) — the measured pattern of the Free account's
private-repo Actions minutes being exhausted, while public repositories
kept running on free unlimited minutes (all public proof machines
stayed green through the same window). The sovereign producer machines
that live in the private Zip repository — weave-heart, weave-anchor-lines,
web-publish, weave-ecosystem — stopped, and with them the live books
(saos-live.json, mirror.json) froze at their 12:10Z state.

The twin in this repository is the healing: the same machines, running
the same unmodified scripts from the sovereign home, but hosted here
where Actions minutes are free and unlimited. Each twin workflow checks
out the private Zip repository via the `ZIP_PAT` secret (Actions vault
only — never in code, never in logs), runs the machine, and pushes its
commits back to Zip. The book is never forked: one sovereign home, one
source of truth, one chain.

- `weave-heart` (hourly at :13) — the sovereign heartbeat; verify-only
  while the primary runner is alive, takeover when it is stale
- `weave-anchor-lines` (bi-hourly at :33) — both evidence lines
  (Steem/Hive anchor, zero-gas EVM anchor); while the operator's secrets
  are pending it runs the Steem line in honest dry and the ZERO line in
  keyless verify-only readback
- `web-publish` (every 20 min at :03/:23/:43) — the sovereign storage
  network publisher (posts inbox packages to Steem); honest no-wif skip
  while the secret is pending
- `weave-ecosystem` (daily at 06:30) — the G6 ecosystem unification
  enforcement (full dup scan, committed beacon, honest red on violation)

Cadences are deliberately offset from the original Zip machines so that
if the operator restores billing and the private machines revive, both
homes interleave without ever colliding on the same push. All state
writes go through the canonical secret gate and the chain-aware
idempotency of the machine itself (an already-anchored root is an
ALREADY-ANCHORED honest skip, not an error).

Two secrets are pending operator delivery in this repository's vault
(Settings > Secrets and variables > Actions) for full capability —
until then the twins run honestly degraded and say so in their logs:

1. `WEAVE_STEEM_WIF` — the posting key of the witness account
   (cashmachine). Without it: no Steem/Hive broadcasts (honest dry),
   no SAOS live genesis placement (honest skip).
2. `WEAVE_SEAL_PASSPHRASE` — the seal passphrase of the sovereign
   network key. Without it: no takeover, no ZERO anchor extension
   (keyless readback only). The cloud copy of this secret exists only
   in the private Zip vault, which the API can never read back.

The operator's alternatives are recorded honestly: restoring billing
revives the original private machines instantly (the secrets are already
in their vault), delivering the two secrets here gives the twin full
capability for free, and doing both yields a redundant two-home machine.

## What is a frozen snapshot here (pending activation)

Some data planes on the old home are fed from the ecosystem's private
sovereign repositories: the heart's public mirror (`mirror.json`), the
live ledger book (`saos-live.json`) and the agents registry refresh. On
this home they are frozen at the port timestamp (their freshness
assertions stay suspended with the reason recorded). The DEX engine's
books (`dex/grid.json`, `dex/world.json`, `dex/state.json`,
`dex/credits.json`, `dex/portfolio.json`) are no longer frozen: R63 added
the `dex-mirror` machine (hourly :52, keyless public read) that
re-mirrors them from the live Console mirror into this repository, and
the three assertions that measure their freshness (A34, A36, A37) were
re-armed - truth-gate G11 (`mirror-freshness`) keeps the served book
honest in red.

Activation (operator steps, in order):

1. Secrets: add AGENTS_WATCH_TOKEN (and, when needed, HEADCORNER) under
   Settings > Secrets and variables > Actions, then port agents-watch,
   money-watch and key-verify from the Console repository.
2. Data planes: decide whether the sovereign heart dual-publishes to both
   homes or this home replaces the old one (the publish targets are code
   on the sovereign side, documented as OL-12 in agent/state.json). The
   R63 mirror is a Domain-side pull of already-public data - it does not
   decide this; if the heart ever pushes here directly, the mirror
   becomes a silent no-op (identical files, no writes).
3. Canonical home: optionally attach a custom domain under
   Settings > Pages - the site is base-path agnostic (all links relative),
   so it serves at the domain root; update the sitemap and robots
   prefixes at that point.

## What it contains

- `index.html` - the console SPA (one complete map: live status, network,
  agents, exchange, knowledge and admin views, bilingual)
- `wallet.html` - the sovereign wallet (keys never leave the browser)
- `truth.html` - the truth gate (the public face of the CI truth machine)
- `receipts/` - the receipt wall (every receipt opens in a public
  explorer; historical receipts keep the URLs that were true when they
  were issued)
- `hub/` - the content hub (articles, explainers, guides, fact sheet)
- the nine system fronts, all real measured pages: `money.html` (the
  money path), `net.html` (the live network mirror), `acid.html` (the
  discovery engine), `gate.html` (the operator gate), `defi.html` (the
  DeFi innovation map), `deposits.html` (the liquidity door),
  `readiness.html` (the readiness exam), `sovereign.html` (the sovereign
  verdict), `versus.html` (the honest comparison)
- `acid-engine.js` - the discovery engine that powers acid.html
- `status.json` - the live network status, read back from the chain
- `render.mjs` - the keyless renderer (zero dependencies, plain fetch)
- `truth/` - the CI truth machine (hourly, measures the live site,
  commits its verdict; fresh honest history from this home's first run)
- `agent/` - the bridgehead: state, handoff protocol, requests ledger and
  the verification contract the network runs against the agent
- `assets/og-cover.png` - the social preview image

## How to verify

1. Read `status.json` and note the witness transaction id.
2. Open that transaction on any Steem explorer (link is on the page).
3. The custom_json payload carries the checkpoint root and the covered
   attestation range: the network's own testimony, signed by the posting
   authority of the witness account and validated by the chain itself at
   inclusion.
4. The commit that wrote the status file is one click away, timestamped.

A claim without a receipt is not a claim here.

## What never enters this repository

Keys, tokens, passphrases, wallet balances, treasury maps, internal
documents, or personal information. The renderer runs a secret gate on
every publish and refuses to commit anything matching key or token
patterns.
