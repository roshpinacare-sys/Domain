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

## MIT License (reference text)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, subject to the following
conditions: the above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
