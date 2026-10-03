# TOMBSTONE — liquidity-desk (Z-71 deep-audit F2, CR-0050)
liquidity-desk.cjs was measured DEAD by agents/deep-audit.cjs (F2-dead-agent: zero references across all agents, evals, workflows — the name-mention graph, fixed for false-deads before booking).
Superseded by: treasury-desk.cjs (assets book incl. powerdown pacing) + market-exec.cjs (band/band-capped ladders) + drip-canon.cjs (fuel pacing canon) — the four deterministic machines it described (claims/curation/ladder/pacing) live in those desks and in sovereign-policy.json.
Revival path: `git mv agents/retired/liquidity-desk.cjs.retired agents/liquidity-desk.cjs` + wire into a cadence + white-box — never blind.
