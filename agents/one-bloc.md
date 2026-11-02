# ONE-BLOC BOOK — מפת-הגוש-האחת (מכונה, לא פרוזה)

_one-bloc v1.0.1 (Task 23 convergence — owner directive "מקשה אחת"; binds BLOC-STATE + SOVEREIGN-INDEX + FATE-DEFENSE into one machine map; keyless-first + env-token fallback, stderr redacted)_

Measured: **2026-11-02T12:53:32.459Z** · Verdict: **ONE-BLOC** · REACHED 16/16 (keyless 16 + token 0) · AUTH-WALL 0 · UNKNOWN 0 · local-sync 1/1

| ריפו | תפקיד | origin/main | מצב | דרך | סנכרון-מקומי |
|---|---|---|---|---|---|
| saos-sovereign-platform | המוח הריבוני — צבא מגייס-עצמו וסולם כלכלת-אמת | `845ea6985add` | REACHED | keyless | N/A |
| steem | המפתחות הקנוניים + הזרוע החיה על-השרשרת | `d1ec73e7a376` | REACHED | keyless | N/A |
| Domain | הפנים הציבוריות + רכזת ה-CI האורגנית | `3d2366778a49` | REACHED | keyless | SYNCED |
| Console | מרכז-ההפעלה — אמת נמדדת פעם-אחת | `98c2c2126515` | REACHED | keyless | N/A |
| Zip | המחסן החתום — עוגני אמת על שרשרת-אפו | `c6ea74d26f21` | REACHED | keyless | N/A |
| roshpina | הגרעין + מבקר השליטה העצמית | `0c2360a56676` | REACHED | keyless | N/A |
| anchor-baseline | שומר העוגן — בוט שלמות Merkle | `e8fc062792f2` | REACHED | keyless | N/A |
| Saosmartwallet | הארנק — זרימת רישום כנה | `4030b6685137` | REACHED | keyless | N/A |
| Sdk | המנשר — ללא SDK חיצוני בהכרה | `978935063439` | REACHED | keyless | N/A |
| Project-files | הארכיון הפיזי — keeper ארכיונים | `f20c2ceba3d0` | REACHED | keyless | N/A |
| Adsmarket | הקמפיין הכן — claims-guard | `9cc0b468c1ef` | REACHED | keyless | N/A |
| Defi | הכלכלן — reprices חי fail-closed | `10087de69ebd` | REACHED | keyless | N/A |
| saos-dex | הבורסה — פעימות dex-beat/grid | `cf020d8107f5` | REACHED | keyless | N/A |
| saos-jummper | החוזים בפייתון — signingcontract | `adccbf9994de` | REACHED | keyless | N/A |
| saos-control-center | מרכז הבקרה הפנימי — 12 סקריפטים env-first | `50f19f807b77` | REACHED | keyless | N/A |
| saos-sovereign-foundry | המפעל — key-broker fail-closed | `60f1eb5a22a2` | REACHED | keyless | N/A |

Laws armed: STASIS breaker ✔ parseable, engine free (active=false) · FWI book present, age 0h, verdict DEGRADED · FATE-DEFENSE canon present

Bound maps (dedup — one truth, no more re-derivation):
- FATE-DEFENSE → Domain#FATE-DEFENSE.md · VERIFIED
- BLOC-STATE → saos-sovereign-platform#docs/BLOC-STATE-2026-10-02.md · DECLARED (sibling not checked out)
- SOVEREIGN-INDEX → Zip#SOVEREIGN-INDEX.md · DECLARED (sibling not checked out)

> KEYLESS-FIRST law (Z-39, measured live): Domain+Console answer keyless (public); the rest are private and answer AUTH-WALL — retried once with the env token when present (never printed, stderr redacted), else booked honestly. UNKNOWN/AUTH-WALL is booked as such, never invented. This table supersedes the hand-written role tables in the bound maps; regenerate with `node agents/one-bloc.cjs`, never edit by hand.
