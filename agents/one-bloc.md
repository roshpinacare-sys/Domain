# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-11-17T13:52:51.218Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 16 + token 0) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 1/1

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `9605c83afb50` | REACHED | keyless | N/A |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `632b457a9355` | REACHED | keyless | N/A |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `e12037f03ce1` | REACHED | keyless | SYNCED |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `5ae80bb55c3a` | REACHED | keyless | N/A |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `a8990863e41f` | REACHED | keyless | N/A |
| roshpina | הגרעין + מבקר השליטה העצמית | `14ce8c9593ca` | REACHED | keyless | N/A |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `80504ad20d65` | REACHED | keyless | N/A |
| Saosmartwallet | הארנק — זרימת רישום כנה | `7cb3c94cb5a6` | REACHED | keyless | N/A |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `978935063439` | REACHED | keyless | N/A |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `f20c2ceba3d0` | REACHED | keyless | N/A |
| Adsmarket | הקמפיין הכן — claims-guard | `9cc0b468c1ef` | REACHED | keyless | N/A |
| Defi | הכלכלן — reprices חי fail-closed | `e367aaf064c5` | REACHED | keyless | N/A |
| saos-dex | הבורסה — פעימות dex-beat/grid | `5ca045d15de7` | REACHED | keyless | N/A |
| saos-jummper | החוזים בפייתון — signingcontract | `adccbf9994de` | REACHED | keyless | N/A |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `50f19f807b77` | REACHED | keyless | N/A |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `3571a6d6d37a` | REACHED | keyless | N/A |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · DECLARED (sibling not checked out)
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · DECLARED (sibling not checked out)

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
