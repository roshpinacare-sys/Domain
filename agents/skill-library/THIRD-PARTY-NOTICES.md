# Third-Party Notices — agents/skill-library/

This directory adapts open-source material. This file records provenance and license as the
MIT license requires (retain the license + copyright notice).

## 1. alirezarezvani/claude-skills

- **Source:** https://github.com/alirezarezvani/claude-skills
- **License:** MIT — https://github.com/alirezarezvani/claude-skills/blob/main/LICENSE
- **Pinned mirror sha:** `19392f7a` (cloned keyless to `/home/z/reference-mirrors/claude-skills`,
  outside the 16-repo estate on purpose: the mirror is reference, not fleet)
- **Author (upstream):** Alireza Rezvani and claude-skills contributors
- **What was adopted:**
  - `SKILL-AUTHORING-STANDARD.md` — the SKILL.md skeleton (frontmatter rules, namespaced-name
    law and the bare-built-in-shadowing lesson from upstream issue #885, when-to-use triggers,
    proactive triggers, output-artifact tables, related-skills disambiguation,
    bottom-line-first + confidence-tagging communication standard, "never sign off on prose
    alone — attach the tool outputs").
  - The idea of a skill **package** as a directory with a gate-checked `SKILL.md`.
  - The gate-as-merge-authority discipline (`scripts/check_skill_names.py` in CI upstream →
    `agents/skill-library-gate.cjs` here).
- **What was NOT taken:** none of their content files, tools, or persona text. Zero upstream
  SKILL.md bodies were copied. Only the authoring standard's structural ideas were adapted,
  then house-hardened (Evidence Artifact mandatory, tier declaration, no silent scope,
  renumbering doctrine, bilingual header).

## 2. f/prompts.chat (prior wave, Z-37/Task 20 lineage)

- **Source:** https://github.com/f/prompts.chat
- **License:** MIT
- **What was adopted (earlier, already on main):** roles-as-data CSV registry pattern and
  `${Var:default}` binding — the skill library sits ON TOP of that adoption
  (`feat-008` → `feat-011` lineage).

## 3. usestrix/strix (Task 28 evaluation → Task 29 adoption)

- **Source:** https://github.com/usestrix/strix
- **License:** Apache-2.0 — https://github.com/usestrix/strix/blob/main/LICENSE
  (Apache License, Version 2.0, January 2004; full text preserved at the pinned mirror's
  `LICENSE` file — a copy ships inside the mirror clone)
- **Pinned mirror sha:** `99c0711` (cloned keyless to `/home/z/reference-mirrors/strix`,
  outside the 16-repo estate on purpose: the mirror is reference, not fleet; depth-50
  clone of HEAD 2026-10-02 — matches API commit 99c0711687)
- **Author (upstream):** usestrix and strix contributors
- **What was adopted:**
  - The honest-engineering patterns as REFERENCE for the house package
    `skills/security-strix-operator/`: exit-code honesty (`0` = clean in what was
    analyzed, with documented budget-wrap caveats), `run.json` cost-vs-budget
    transparency, digest-bound two-step approvals (`--approve-sha256`), unknown-state
    honesty flags (`launch_outcome_unknown`), decision tables ("choose honestly,
    do not default"), and the authorization guardrail ("only scan targets the user is
    authorized to test") — adopted as the estate's scan-boundary law.
  - The 9 upstream consumer skills (`skills/*` in the mirror) are kept as a pinned
    REFERENCE family for the security domain — consulted in the mirror, not imported.
- **What was NOT taken:** zero upstream SKILL.md bodies were copied into this library;
  no upstream source code, prompts, or tools were vendored. The house package is an
  original adaptation whose Apache-2.0-derived references are limited to documented
  patterns and short quoted guardrail phrases, attributed here.
- **State of changes:** the house package materially adapts (does not reproduce) the
  referenced patterns; this notice is the required Apache-2.0 attribution and
  change-state declaration.

## 4. google/ax (Task 31 evaluation → same-wave adoption)

- **Source:** https://github.com/google/ax
- **License:** Apache-2.0 — https://github.com/google/ax/blob/main/LICENSE
  (Apache License, Version 2.0, January 2004; full text preserved at the pinned
  mirror's `LICENSE` file — a copy ships inside the mirror clone)
- **Pinned mirror sha:** `ac23328` (cloned keyless to `/home/z/reference-mirrors/ax`,
  outside the 16-repo estate on purpose: the mirror is reference, not fleet;
  depth-50 clone of HEAD 2026-09-26 — matches API commit `ac2332829f22360ff97b0ba34d94dd0dd782f17e`)
- **Author (upstream):** Google and ax contributors ("Google's open agentic
  orchestration runtime")
- **What was adopted:**
  - The honest-orchestration patterns as REFERENCE for the house package
    `skills/orchestration-ax-operator/`: declarative resource manifests
    (`ax.io/v1alpha1` Task/Workspace/Model), task immutability (CreateTask with
    enforced immutability, UpdateTask removed), up-front RFC 1123 validation at
    apply-time (reject early instead of failing as `ActorCreationFailed` later),
    the conditions chain (`WorkspaceReady` → `Ready`), per-task resource
    requests/limits as budget guards, checkpointing suspend/resume semantics,
    Model credentials referenced by `secretKey` (never inlined), and Workspace
    skill-registries materialized to `/.agents/skills` — each mapped to its estate
    parallel in the house package's doctrine table.
- **What was NOT taken:** zero upstream code, manifests, YAML, or documentation
  bodies were copied into this library; nothing was vendored. The house package is
  an original adaptation whose Apache-2.0-derived references are limited to
  documented patterns and their short names, attributed here. Running AX itself
  (K8s cluster + Agent Substrate) is booked as wallet/possession-gated, not adopted.
- **State of changes:** the house package materially adapts (does not reproduce) the
  referenced patterns; this notice is the required Apache-2.0 attribution and
  change-state declaration.

## MIT License (reference text)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, subject to the following
conditions: the above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
