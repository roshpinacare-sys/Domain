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

- `weave-heart` (hourly at :13) — the sovereign heartbeat; refuses honestly
  (measured: even ledger verification needs the sealed network key) until
  WEAVE_SEAL_PASSPHRASE arrives, then full verify/takeover
- `weave-anchor-lines` (bi-hourly at :33) — both evidence lines
  (Steem/Hive anchor, zero-gas EVM anchor); refuses honestly until the
  passphrase arrives (measured: even --verify-only needs the seal), then
  Steem runs full with WEAVE_STEEM_WIF or honest-dry without it
- `web-publish` (every 20 min at :03/:23/:43) — the sovereign storage
  network publisher (posts inbox packages to Steem); green no-op while
  the inbox is empty, honest no-wif skip once packages arrive
- `weave-ecosystem` (daily at 06:30) — the G6 ecosystem unification
  enforcement (full dup scan, committed beacon, honest red on violation);
  full capability, verified working end-to-end (dup=0.011 committed to
  Zip from this twin on 2026-09-21T00:00:42Z)
- `dex-beat` (bi-hourly at :53, r68) — the DEX engine heartbeat from the
  sovereign saos-dex home. Secretless for the operator: it needs only the
  vault PATs (ZIP_PAT for the chain home, WEAVE_OPS_PAT for the public
  publish). Shift-guarded: cloud-beat advances the chain unconditionally,
  so the twin first asks the network whether the original's last run
  succeeded within 3h — alive means verify-only, dead means takeover.
  Revived world.json end-to-end on 2026-09-21 (chain advanced and
  published to Console; this home's :52 dex-mirror carries it here)
- `dex-grid` (daily at 03:48, r68) — the outer grid (THE-REAL-GRID) from
  the sovereign saos-dex home. Refuses honestly until STEEM_ACTIVE_WIF
  arrives (below): running keyless would publish a false DISARMED-NO-KEY
  verdict while the true state is armed (the key lives in the private
  saos-dex vault, which secrets never cross). Shift-guarded on schedule
  (23h window); a fuel-landing dispatch (money-watch) or a manual dispatch
  runs it immediately — the grid is atomically re-centering by design,
  so a double dispatch across two living homes is a harmless re-center
- `cloud-heart` (every 30 min at :17/:47, r71) — the SAOS-NET cloud
  heartbeat from the sovereign steem home: the machine that was the
  network's last living heart (its auto-saves, every ~90 min, were the
  only thing advancing the chain after 2026-09-06; the quota death at
  2026-09-20T12:36Z killed it too and the chain froze). Identical
  machine, zero operator secrets (keyless-safe by design — no fleet
  seal exists in the repo, so the takeover path runs in honest DRY,
  exactly as it ran green for 14 days); it needs only WEAVE_OPS_PAT for
  the checkout and push-back. Leader election is the machine's own —
  chain-attest or git freshness, whichever is fresh means SANDBOX-ALIVE
  (verify-only, touch nothing), both stale means TAKEOVER (one agent
  cycle, one saosnet beat, gitkeeper push). The :17/:47 offset against
  the original's :00/:30 means the two hearts never share a minute, and
  every takeover's own push refreshes the git signal so the next heart
  stands down — double-advance in one window is impossible by design.

The fuel-landing dispatch (money-watch) now targets both homes: the
sovereign original in saos-dex and this repository's dex-grid twin
(the twin carries the fuel while the private original is quota-dead;
the dispatch is recorded with both results in `dex/money.json`).

Cadences are deliberately offset from the original machines (Zip's
heart at :00, saos-dex's beat at :23 and grid at 03:17, steem's cloud
heart at :00/:30) so that if the operator restores billing and the
private machines revive, both homes interleave without ever colliding
on the same push. All state writes go through the canonical secret gate
and the chain-aware idempotency of the machine itself (an
already-anchored root is an ALREADY-ANCHORED honest skip, not an error;
the dex twins add the shift guard so the chain never advances twice in
the same window).

Quota sovereignty (r71, 2026-09-21): the measured private consumption
of the scheduled fleet was ~2,180+ Actions-minutes per month against
the Free account's 2,000 — exhaustion was structural, not incidental,
and reviving the private schedules on the returned minutes would burn
them again by month-end. The consolidation: the public twins are THE
machines (free, unlimited); the private originals in Zip, saos-dex and
steem were moved to dispatch-only (schedules removed, one honest
commit each — manual backup, one commit away from revival). The nine
quiet archive agents (claims-guard, baseline-integrity, controls-audit,
control-center-build, jumpper-tests, platform-selftest, wallet-verify,
sdk-verify, archive-keeper) keep their daily private cadences by
measurement: ~8 runs a day, comfortably inside the returned quota.
Net private consumption after the consolidation: the quiet agents
only — the quota can no longer be exhausted by design.

Secrets status (this repository's vault, Settings > Secrets and
variables > Actions) — the gated twins refuse honestly with a clear
message (the key-verify precedent) and say so in their logs:

1. `WEAVE_SEAL_PASSPHRASE` — **a key was delivered by the operator on
   2026-09-21T08:28:30Z under the name `MAIN_KEY`** (vault listing,
   names only). It was tested to exhaustion, every rung receipted:
   the heart failed at the seal (`BEAT-ERROR` authentication, run
   35581200547) — not the seal passphrase; key-verify's
   identification matrix (run 35585187927, receipt
   `receipts/key-check.json`) derived the value for every documented
   account × role — 12 derivations, 0 matches, verdict
   `unidentified` — not a WIF of any authority and not a master
   password of @headcorner, @cashmachine or @lsa. The delivered value
   matches nothing the network can consume; a paste error is the
   leading hypothesis (the 2026-09-18 R38 receipt proves the operator
   holds the correct @headcorner key, and the chain's active has not
   rotated since). The twins accept both names (canonical
   preferred) — a re-delivery under `MAIN_KEY` or the canonical name
   is tested automatically by the same machines.
2. `WEAVE_STEEM_WIF` — the posting key of the witness account
   (cashmachine). Without it: no Steem/Hive broadcasts (honest dry),
   no SAOS live genesis placement (honest skip). The ZERO anchor
   line does NOT need it (zero-gas Z Chain).
3. `STEEM_ACTIVE_WIF` — the active key of @headcorner, the grid signer
   (the same key that armed the grid in the first place, r38). It already
   lives in the private saos-dex vault — but GitHub secrets never cross
   repositories, so the dex-grid twin needs its own copy. Without it the
   outer grid stays frozen (its state ages in honest red); with it, the
   grid trades again on public minutes. After delivering it, dispatch
   `dex-grid` once manually (Actions > dex-grid > Run workflow) or wait
   for the daily 03:48Z slot — and the first fuel-landing dispatch
   becomes live immediately.

The operator's alternatives are recorded honestly: restoring billing
revives the original private machines instantly (the secrets are already
in their vault), delivering the remaining secrets here completes the
twins' full capability for free, and doing both yields a redundant
two-home machine (shift-guarded: the living original always owns the
book).

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
honest in red. Since r68 the engine behind those books is itself alive
again: the `dex-beat` twin (above) advances the canonical chain on
public minutes and publishes to Console, which the :52 mirror carries
here — `dex/grid.json` remains the one frozen plane, honestly, until
`STEEM_ACTIVE_WIF` arrives (its machine signs real external orders).

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
