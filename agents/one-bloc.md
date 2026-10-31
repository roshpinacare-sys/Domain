# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-10-31T10:38:07.154Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 16 + token 0) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 1/1

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `85c955214638` | REACHED | keyless | N/A |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `df04a69326d4` | REACHED | keyless | N/A |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `be335a86847f` | REACHED | keyless | SYNCED |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `330c88bd0487` | REACHED | keyless | N/A |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `32cbee9b9f80` | REACHED | keyless | N/A |
| roshpina | הגרעין + מבקר השליטה העצמית | `2ff5e427ca0e` | REACHED | keyless | N/A |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `e8fc062792f2` | REACHED | keyless | N/A |
| Saosmartwallet | הארנק — זרימת רישום כנה | `ac07a813a6aa` | REACHED | keyless | N/A |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `978935063439` | REACHED | keyless | N/A |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `f20c2ceba3d0` | REACHED | keyless | N/A |
| Adsmarket | הקמפיין הכן — claims-guard | `9cc0b468c1ef` | REACHED | keyless | N/A |
| Defi | הכלכלן — reprices חי fail-closed | `2d1a13931e76` | REACHED | keyless | N/A |
| saos-dex | הבורסה — פעימות dex-beat/grid | `cedbf3d611eb` | REACHED | keyless | N/A |
| saos-jummper | החוזים בפייתון — signingcontract | `adccbf9994de` | REACHED | keyless | N/A |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `50f19f807b77` | REACHED | keyless | N/A |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `60f1eb5a22a2` | REACHED | keyless | N/A |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · DECLARED (sibling not checked out)
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · DECLARED (sibling not checked out)

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
