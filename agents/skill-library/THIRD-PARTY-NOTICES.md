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

## 5. Sumanth077/Hands-On-AI-Engineering (Task 32 evaluation → consult-only reference)

- **Source:** https://github.com/Sumanth077/Hands-On-AI-Engineering
- **License status (honesty finding):** the upstream README badge and License
  section claim **MIT**, but the LICENSE file **does not exist** (contents API
  returns 404; repo API reports license: null) as of mirror sha `da0091d6`
  (2026-10-01). Until a real LICENSE file lands upstream, the repository is
  treated as **ALL RIGHTS RESERVED**.
- **Mirror:** bare-blobless clone (184K, blobs on demand) at
  `/home/z/reference-mirrors/hae-mirror.git` @ `da0091d6452e18dae9fd3119a194019f35306d27`
  — outside the 16-repo estate on purpose: the mirror is reference, not fleet.
  A full working-tree mirror was attempted and discarded (315 MB) in favor of the
  treeless form — disk-honest at 719 MB free.
- **Author (upstream):** Sumanth077 and the Hands-On-AI-Engineering community.
- **What was adopted:** NOTHING was copied — no upstream code, prompts, README
  bodies, or project text. The house package `skills/applied-ai-patterns-operator`
  references only the PATTERN SHAPES (ideas), restated originally: the Jev
  three-point decision-review-gate architecture with its fail-open-with-notes /
  reviewer-only / no-silent-retry honesty rules (from `ai_agents/nl_data_analyst_agent`),
  self-grading agentic RAG, multi-agent loops with a critic, typed query routing
  with fallback, digest pipelines, document structuring, and the CONTRIBUTING
  project-hygiene standard — each mapped to an estate lane in the house package.
- **Why no gate pin (unlike sections 3 and 4):** the lineage pins enforced by
  skill-library-gate.cjs exist because Apache-2.0/MIT attributions are REQUIRED
  for adopted material from licensed sources. Here nothing is copied or adapted,
  so no attribution obligation exists; the consult-only posture and the LICENSE
  -404 finding are documented here instead. If upstream ships a verified LICENSE
  file, this section is updated and a pin may be added at that point.
- **State of changes:** consult-only, zero-copy; this notice documents provenance
  and the license-mismatch finding, and is the standing re-verification trigger.

## 6. SWE-agent/mini-swe-agent (Task 33 evaluation → same-wave adoption)

- **Source:** https://github.com/SWE-agent/mini-swe-agent
- **License:** MIT — verified IN-FILE at the pinned mirror (`LICENSE.md`,
  1,094 bytes, "Copyright (c) 2025 Kilian A. Lieret and Carlos E. Jimenez");
  the repo API independently reports spdx_id MIT. Unlike §5, the license
  claim is backed by the file itself.
- **Pinned mirror sha:** `04d809c` (cloned keyless to
  `/home/z/reference-mirrors/mini-swe-agent`, outside the 16-repo estate on
  purpose: the mirror is reference, not fleet; depth-50 clone of main HEAD
  2026-09-03 — full sha `04d809ceab9df28f9adaed044884180159172930`)
- **Author (upstream):** Kilian A. Lieret, Carlos E. Jimenez, and the
  SWE-agent/mini-swe-agent contributors (the Princeton & Stanford team behind
  SWE-bench)
- **What was adopted:**
  - The minimal-agent doctrine as REFERENCE for the house package
    `skills/swe-mini-operator/`: bash-as-the-only-tool, stateless per-action
    execution with process-group kill on timeout, a completely linear
    append-only history (trajectory == messages), exceptions-as-control-flow
    where every exception carries its messages into the trajectory (never
    swallowed), hard step/cost/wall-time limits as first-class config
    (upstream ships `cost_limit=3.0` as a default), the
    consecutive-format-error circuit breaker with billed-cost honesty, jinja
    StrictUndefined templates (a missing variable is a loud error, never a
    silent blank), the explicit machine-checkable submit signal
    (`COMPLETE_TASK_AND_SUBMIT_FINAL_OUTPUT` + returncode==0),
    save-every-step checkpointing, and the AGENTS.md minimalism/test law
    ("do not mock anything you're not explicitly asked to"; "every test
    targets at least one point of failure") — each mapped to its estate
    parallel in the house package's doctrine table.
- **What was NOT taken:** zero upstream Python code, configs, prompts, or
  docs bodies were copied into this library; the runtime was not vendored or
  installed (its litellm model legs require paid provider keys = wallet
  domain); the containerized environment legs (docker/podman/singularity/
  apptainer/bubblewrap/modal/contree) are booked as wallet/possession-gated,
  not adopted.
- **State of changes:** the house package materially adapts (does not
  reproduce) the referenced patterns; this notice is the required MIT
  attribution and change-state declaration.

## 7. vercel-labs/openreview (Task 34 evaluation → consult-only reference)

- **Source:** https://github.com/vercel-labs/openreview — "An open-source,
  self-hosted AI code review bot powered by Vercel." 1,697 stars, TypeScript.
- **License status (honesty finding, second occurrence of the Task 32
  pattern):** the upstream README states "## License — MIT", but NO LICENSE
  file exists in the repository (repo API reports license: null) at mirror
  sha `672deb2` (HEAD 2026-03-06, full sha
  `672deb21e70e471e0536d5ad7a67c14b8359e97e`). Unbacked MIT claim → the
  repository is treated as **ALL RIGHTS RESERVED** → consult-only,
  zero-copy.
- **Mirror:** shallow clone at `/home/z/reference-mirrors/openreview`
  (outside the 16-repo estate on purpose: the mirror is reference, not
  fleet). Depth-50 clone of HEAD 2026-03-06 — the repo has been DORMANT for
  seven months and its README declares beta ("built as an internal project
  to help the Vercel team test their technologies together").
- **Author (upstream):** Vercel Labs and openreview contributors.
- **What was adopted:** NOTHING was copied — no upstream code, configs,
  prompts, README bodies, or text. The house package
  `skills/ai-review-operator/` references only the PATTERN SHAPES (ideas),
  restated originally: the authority pre-flight before any push (archived /
  installation-permissions / branch-restrictions checks, each refusal with a
  named reason), reviewer-only separation of powers (suggestions applied by
  human reaction, 👍/❤️ vs 👎/😕), the autonomy gradient (auto-push for
  mechanical fixes only, judgment-shaped findings as suggestions), on-demand
  @mention triggers, the uncommitted-changes honesty check before
  commit-and-push, progressive skill loading (names + descriptions as the
  routing surface, full body loaded on demand), and the per-skill
  `skills-lock.json` hash pattern (skills as pinned dependencies).
- **Why no gate pin (unlike sections 3, 4, and 6):** pins exist because
  license attribution is REQUIRED for adopted material from licensed
  sources. Here the license claim is unbacked and nothing is copied, so no
  attribution obligation exists; the consult-only posture and the
  LICENSE-missing finding are documented here instead. If upstream ships a
  real LICENSE file, this section is updated and a pin may be added.
- **State of changes:** consult-only, zero-copy; this notice documents
  provenance and the license-mismatch finding, and is the standing
  re-verification trigger.

## MIT License (reference text)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, subject to the following
conditions: the above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
