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

## What is a frozen snapshot here (pending activation)

Some data planes on the old home are fed from the ecosystem's private
sovereign repositories: the heart's public mirror (`mirror.json`), the
live ledger book (`saos-live.json`), the DEX engine's books
(`dex/world.json`, `dex/grid.json`) and the agents registry refresh. On
this home they are frozen at the port timestamp, and the three
verification assertions that measure their freshness (A34, A36, A37) are
honestly suspended in `agent/verify/assertions.json` with the reason
recorded - they re-arm the moment a feed lands here.

Activation (operator steps, in order):

1. Secrets: add AGENTS_WATCH_TOKEN (and, when needed, HEADCORNER) under
   Settings > Secrets and variables > Actions, then port agents-watch,
   money-watch and key-verify from the Console repository.
2. Data planes: decide whether the sovereign heart dual-publishes to both
   homes or this home replaces the old one (the publish targets are code
   on the sovereign side, documented as OL-12 in agent/state.json).
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
