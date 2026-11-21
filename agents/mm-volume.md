# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058..CR-0062, Rung 28-32)
פסק דין: **חלקי**
נפח מוקרן: **479.459 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **0.4752 → 0.9504 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | נפח מוקרן SBD/יום | נפח שוק 24ש׳ | נתח חייל אחד |
|---|---|---|---|---|---|---|
| HBD/HIVE (internal hive) | 0 | 0 | 0 | 244.3968 | 10790.948 | 2.2648% |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — | — |
| BEE/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 22.0636 | — | 99.6639% |
| CENT/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 4.243 | — | 95.0919% |
| SWAP.DOGE/SWAP.HIVE (hive-engine) | 0 | 0.25 | 0.125 | 36.4898 | — | 99.8913% |
| SWAP.LTC/SWAP.HIVE (hive-engine) | 0 | 0.5 | 0.25 | 171.8415 | — | 99.7885% |
| WAIV/SWAP.HIVE (hive-engine) | 0 | 0 | 0 | 0.4243 | — | 71.3349% |
סולם הנתח בHBD/HIVE (internal hive) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 244.3968 SBD/יום = 2.2648% מהבריכה
- N=2 חיילים → 488.7936 SBD/יום = 4.5297% מהבריכה
- N=3 חיילים → 733.1904 SBD/יום = 6.7945% מהבריכה
- N=5 חיילים → 1221.984 SBD/יום = 11.3242% מהבריכה
סולם הנתח בBEE/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 22.0636 SBD/יום = 99.6639% מהבריכה
- N=2 חיילים → 22.0636 SBD/יום = 99.6639% מהבריכה
- N=3 חיילים → 22.0636 SBD/יום = 99.6639% מהבריכה
- N=5 חיילים → 22.0636 SBD/יום = 99.6639% מהבריכה
סולם הנתח בCENT/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 4.243 SBD/יום = 95.0919% מהבריכה
- N=2 חיילים → 4.243 SBD/יום = 95.0919% מהבריכה
- N=3 חיילים → 4.243 SBD/יום = 95.0919% מהבריכה
- N=5 חיילים → 4.243 SBD/יום = 95.0919% מהבריכה
סולם הנתח בSWAP.DOGE/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 36.4898 SBD/יום = 99.8913% מהבריכה
- N=2 חיילים → 36.4898 SBD/יום = 99.8913% מהבריכה
- N=3 חיילים → 36.4898 SBD/יום = 99.8913% מהבריכה
- N=5 חיילים → 36.4898 SBD/יום = 99.8913% מהבריכה
סולם הנתח בSWAP.LTC/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 171.8415 SBD/יום = 99.7885% מהבריכה
- N=2 חיילים → 171.8415 SBD/יום = 99.7885% מהבריכה
- N=3 חיילים → 171.8415 SBD/יום = 99.7885% מהבריכה
- N=5 חיילים → 171.8415 SBD/יום = 99.7885% מהבריכה
סולם הנתח בWAIV/SWAP.HIVE (hive-engine) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 0.4243 SBD/יום = 71.3349% מהבריכה
- N=2 חיילים → 0.4243 SBD/יום = 71.3349% מהבריכה
- N=3 חיילים → 0.4243 SBD/יום = 71.3349% מהבריכה
- N=5 חיילים → 0.4243 SBD/יום = 71.3349% מהבריכה
כיול מהמילויים האמיתיים (Q10): גודל מתוכנן 0.0712 SBD (exec-runs-planned) → מילוי אמתי נמדד 0.4243 SBD (243 מילויים מסווגים) — הפרויקציה רצה על האמת (+495.927% תיקון)
כיול הטייפ (Q13): קצב הלכידה שלנו נמדד **0.0417 מילויים/דק׳ = 60 מילויים/יום** (60 מילויים בחלון) מול טייפ-השוק 10/דק׳ — **החנק האמיתי הוא הלכידה, לא היכולת** (מילוי-דרך 10.4167% מתקרת הפקודות); הלכידה צומחת בדיוק כפי שההוראה קובעת: עוד מדרגות × מילוי-דרך × חיילים ממומנים × זרימה פנימי מגובלת
הרחבת הזירות (Q14/Q16): 5 זירות Hive-Engine מתומחרות per-token מהחוזה החי — והבריכה הנמדדת פותחת את הפרויקציה: הבריכה של כל טוקן (BEE בריכה 22.138 SBD/24ש׳ · CENT בריכה 4.462 SBD/24ש׳ · SWAP.DOGE בריכה 36.5295 SBD/24ש׳ · SWAP.LTC בריכה 172.2058 SBD/24ש׳ · WAIV בריכה 0.5948 SBD/24ש׳) מתורגמת מ-SWAP.HIVE לשער HBD/HIVE **נמדד** (חוק ההמרה: SBD≈HBD, שניהם נכסי-דולר של השרשרות; השער נמדד — לא מוצק)
פרויקציית הבריכה (Q16): אף אחד לא יכול לסחור יותר מכל מה שנסחר — הנפח נפתח על min(בריכה, יכולת) עם החוסם **מתויג**; 5 זירות HE עם נפח מוקרן: 235.0622 SBD/יום (בריכה כוללת 235.9301 SBD) · רווח נטו מוקרן 0.4752 SBD/יום — בלי שאילת טייפ אחת מושאלת
משטחים חשוכים (כנים, מדודים): he-daily-history — HE-DAILY-HISTORY-DARK: marketHistory/history answered null (not RPC-exposed) — the day it answers, the pond becomes a series · blurt-internal-market — BLURT-SURFACE-DARK: getaddrinfo ENOTFOUND api.blurt.world
נתח-זמן (Q11): HBD/HIVE (internal hive): 24 נקודות — אחרון 2.4204% · BEE/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 99.1857% · CENT/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 98.1866% · SWAP.DOGE/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 99.3141% · SWAP.LTC/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 99.9112% · WAIV/SWAP.HIVE (hive-engine): 24 נקודות — אחרון 68.0295% (פנקס התוכניות הוא הסדרה — הנתח כמגמה, לא תמונה)
סולם הצי: 1 חשבון/ות ממומנים (owner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 119.8649 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
מפת הכשלים (מה שהפיל עושי-שוק גדולים → החוסם שלנו): adverse selection→BUY-EDGE law · inventory skew→SELL-CAP-85% + fill-ledger recycle suggestions close the loop · fee drag on thin venues→fee-doctrine · self-trading poisoning the edge books→VWAP-EXCLUSION + INTERNAL-FLOW labeling + the 25% cap · silent capacity rot (a cadence that dies quietly)→cadence legs + no-noise comparator + census wiring checks · overtrading beyond what the tape absorbs→volume = min(tape bound, capacity bound); the binding is surfaced, never hidden
חסימות כנות: NO-MEASURED-STEEM-SPREAD
השער: טייפ-השוק 10 מילויים/דק׳ (recon 2026-10-03 — prior שנשאר נישא); קצב הלכידה שלנו נמדד מהפנקס; 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ, מהיכולת ומהלכידה המדודה; נפח הבריכה = condenser get_volume מהשרשרת עצמה.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.