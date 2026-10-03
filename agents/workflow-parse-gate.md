# Workflow Parse Gate — every lane must be able to run

<<<<<<< HEAD
_workflow-parse-gate v1.0.0 · 2026-10-03T00:49:04.946Z · dir .github/workflows_
=======
_workflow-parse-gate v1.0.0 · 2026-10-03T01:27:36.759Z · dir .github/workflows_
>>>>>>> 017abec4 (ci-hands (Task 26, trycua/cua adoption): the fleet gets HANDS on its own CI estate — 16 repos sampled, failure taxonomy pinned (startup/job-startup/step), transient-aware verdicts, proposals booked, full trajectory (cua-bench contract); CUA-ADOPTION.md capability ladder (GUI/VM rungs honestly locked); eval E17 + judge #36 + recruit CI lane — code+new files; lane books regenerate from tools)

**PARSE-GATE GREEN: 41 workflows scanned, mode full, 0 offenders**

- recruit.yml incident (Task 24): `${{ }}` inside flow mappings → GitHub startup-failure on every push, 0 jobs, cron never fired. Caught by the ONE-BLOC desk CI-health review; now mechanically gated here.

_Two-mode floor: full YAML parse (python3+PyYAML) where available, pure-JS idiom floor otherwise — evidence names the mode that held._
