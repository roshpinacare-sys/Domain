# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-11-20T13:37:31.408Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 16 + token 0) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 1/1

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `ff154973482c` | REACHED | keyless | N/A |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `632b457a9355` | REACHED | keyless | N/A |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `fd9fb8b91124` | REACHED | keyless | SYNCED |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `2858916a1456` | REACHED | keyless | N/A |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `d205b07dfb7c` | REACHED | keyless | N/A |
| roshpina | הגרעין + מבקר השליטה העצמית | `288f67e92f95` | REACHED | keyless | N/A |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `5a6ea5449c74` | REACHED | keyless | N/A |
| Saosmartwallet | הארנק — זרימת רישום כנה | `7abb799d0803` | REACHED | keyless | N/A |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `fe18e7626b0c` | REACHED | keyless | N/A |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `f20c2ceba3d0` | REACHED | keyless | N/A |
| Adsmarket | הקמפיין הכן — claims-guard | `6bd36a9f43a4` | REACHED | keyless | N/A |
| Defi | הכלכלן — reprices חי fail-closed | `273d8bf41f1f` | REACHED | keyless | N/A |
| saos-dex | הבורסה — פעימות dex-beat/grid | `400ec403fee5` | REACHED | keyless | N/A |
| saos-jummper | החוזים בפייתון — signingcontract | `a4cb61288cb5` | REACHED | keyless | N/A |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `3548a4379768` | REACHED | keyless | N/A |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `3571a6d6d37a` | REACHED | keyless | N/A |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · DECLARED (sibling not checked out)
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · DECLARED (sibling not checked out)

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
