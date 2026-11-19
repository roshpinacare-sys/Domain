# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058..CR-0062, Rung 28-32)
פסק דין: **חלקי**
נפח מוקרן: **517.646 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **0.943 → 1.886 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | נפח מוקרן SBD/יום | נפח שוק 24ש׳ | נתח חייל אחד |
|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0 | 0 | 0 | 244.3968 | 7330.488 | 3.334% |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — | — |
| BEE/SWAP.HIVE (hive-engine) | 0 | 0.5 | 0.25 | 10.6075 | — | 98.536% |
| CENT/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 2.9701 | — | 89.3424% |
| SWAP.DOGE/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 15.2748 | — | 98.6184% |
| SWAP.LTC/SWAP.HIVE (hive-engine) | 0 | 0.75 | 0.375 | 244.3968 | — | 6.203% |
| WAIV/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 0 | — | — |
סולם הנתח בHBD/HIVE (internal hive) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 244.3968 SBD/יום = 3.334% מהבריכה
- N=2 חיילים → 488.7936 SBD/יום = 6.668% מהבריכה
- N=3 חיילים → 733.1904 SBD/יום = 10.0019% מהבריכה
- N=5 חיילים → 1221.984 SBD/יום = 16.6699% מהבריכה
סולם הנתח בBEE/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 10.6075 SBD/יום = 98.536% מהבריכה
- N=2 חיילים → 10.6075 SBD/יום = 98.536% מהבריכה
- N=3 חיילים → 10.6075 SBD/יום = 98.536% מהבריכה
- N=5 חיילים → 10.6075 SBD/יום = 98.536% מהבריכה
סולם הנתח בCENT/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 2.9701 SBD/יום = 89.3424% מהבריכה
- N=2 חיילים → 2.9701 SBD/יום = 89.3424% מהבריכה
- N=3 חיילים → 2.9701 SBD/יום = 89.3424% מהבריכה
- N=5 חיילים → 2.9701 SBD/יום = 89.3424% מהבריכה
סולם הנתח בSWAP.DOGE/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 15.2748 SBD/יום = 98.6184% מהבריכה
- N=2 חיילים → 15.2748 SBD/יום = 98.6184% מהבריכה
- N=3 חיילים → 15.2748 SBD/יום = 98.6184% מהבריכה
- N=5 חיילים → 15.2748 SBD/יום = 98.6184% מהבריכה
סולם הנתח בSWAP.LTC/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 244.3968 SBD/יום = 6.203% מהבריכה
- N=2 חיילים → 488.7936 SBD/יום = 12.406% מהבריכה
- N=3 חיילים → 733.1904 SBD/יום = 18.6091% מהבריכה
- N=5 חיילים → 1221.984 SBD/יום = 31.0151% מהבריכה
סולם הנתח בWAIV/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 0 SBD/יום = null% מהבריכה
- N=2 חיילים → 0 SBD/יום = null% מהבריכה
- N=3 חיילים → 0 SBD/יום = null% מהבריכה
- N=5 חיילים → 0 SBD/יום = null% מהבריכה
כיול מהמילויים האמיתיים (Q10): גודל מתוכנן 0.0712 SBD (exec-runs-planned) → מילוי אמתי נמדד 0.4243 SBD (243 מילויים מסווגים) — הפרויקציה רצה על האמת (+495.927% תיקון)
כיול הטייפ (Q13): קצב הלכידה שלנו נמדד **0.0417 מילויים/דק׳ = 60 מילויים/יום** (60 מילויים בחלון) מול טייפ-השוק 10/דק׳ — **החנק האמיתי הוא הלכידה, לא היכולת** (מילוי-דרך 10.4167% מתקרת הפקודות); הלכידה צומחת בדיוק כפי שההוראה קובעת: עוד מדרגות × מילוי-דרך × חיילים ממומנים × זרימה פנימי מגובלת
הרחבת הזירות (Q14/Q16): 5 זירות Hive-Engine מתומחרות per-token מהחוזה החי — והבריכה הנמדדת פותחת את הפרויקציה: הבריכה של כל טוקן (BEE בריכה 10.7651 SBD/24ש׳ · CENT בריכה 3.3244 SBD/24ש׳ · SWAP.DOGE בריכה 15.4888 SBD/24ש׳ · SWAP.LTC בריכה 3939.9658 SBD/24ש׳ · WAIV בריכה 0.0045 SBD/24ש׳) מתורגמת מ-SWAP.HIVE לשער HBD/HIVE **נמדד** (חוק ההמרה: SBD≈HBD, שניהם נכסי-דולר של השרשרות; השער נמדד — לא מוצק)
פרויקציית הבריכה (Q16): אף אחד לא יכול לסחור יותר מכל מה שנסחר — הנפח נפתח על min(בריכה, יכולת) עם החוסם **מתויג**; 5 זירות HE עם נפח מוקרן: 273.2492 SBD/יום (בריכה כוללת 3969.5486 SBD) · רווח נטו מוקרן 0.943 SBD/יום — בלי שאילת טייפ אחת מושאלת
משטחים חשוכים (כנים, מדודים): he-daily-history — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series · blurt-internal-market — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world
נתח-זמן (Q11): HBD/HIVE (internal hive): 24 נקודות — אחרון 2.41% · BEE/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 96.4368% · CENT/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 87.8442% · SWAP.DOGE/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 99.7693% · SWAP.LTC/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 6.1776% (פנקס התוכניות הוא הסדרה — הנתח כמגמה, לא תמונה)
סולם הצי: 1 חשבון/ות ממומנים (owner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 129.4115 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
מפת הכשלים (מה שהפיל עושי-שוק גדולים → החוסם שלנו): adverse selection→BUY-EDGE law · inventory skew→SELL-CAP-85% + fill-ledger recycle suggestions close the loop · fee drag on thin venues→fee-doctrine · self-trading poisoning the edge books→VWAP-EXCLUSION + INTERNAL-FLOW labeling + the 25% cap · silent capacity rot (a cadence that dies quietly)→cadence legs + no-noise comparator + census wiring checks · overtrading beyond what the tape absorbs→volume = min(tape bound, capacity bound); the binding is surfaced, never hidden
חסימות כנות: NO-MEASURED-STEEM-SPREAD
השער: טייפ-השוק 10 מילויים/דק׳ (recon 2026-10-03 — prior שנשאר נישא); קצב הלכידה שלנו נמדד מהפנקס; 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ, מהיכולת ומהלכידה המדודה; נפח הבריכה = condenser get_volume מהשרשרת עצמה.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.