# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058+CR-0059, Rung 28-29)
פסק דין: **מנוע-נפח-חי**
נפח מוקרן: **796.032 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **2.6516 → 5.3023 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | נפח מוקרן SBD/יום | נפח שוק 24ש׳ | נתח חייל אחד |
|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0 | 1.1677 | 0.5839 | 398.016 | 163.687 | 243.1568% |
| HBD/HIVE (internal hive) | 0 | 0.1645 | 0.0823 | 398.016 | 958.712 | 41.5157% |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — | — |
סולם הנתח בSBD/STEEM (internal steem) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 398.016 SBD/יום = 243.1568% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=2 חיילים → 796.032 SBD/יום = 486.3135% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=3 חיילים → 1194.048 SBD/יום = 729.4703% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=5 חיילים → 1990.08 SBD/יום = 1215.7838% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
סולם הנתח בHBD/HIVE (internal hive) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 398.016 SBD/יום = 41.5157% מהבריכה
- N=2 חיילים → 796.032 SBD/יום = 83.0314% מהבריכה
- N=3 חיילים → 1194.048 SBD/יום = 124.5471% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
- N=5 חיילים → 1990.08 SBD/יום = 207.5785% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
מימוש מול פרויקציה (SBD/STEEM (internal steem)): 124 מילויים אמיתיים ב-24 שעות מהמילוי האחרון · נמכר 62.781 SBD · נקנה 24.388 SBD · מילוי ממוצע 0.703 SBD · דיוק הפרויקציה 15.7735%
כיול מהמילויים האמיתיים (Q10): גודל מתוכנן 0.068 SBD (exec-runs-planned) → מילוי אמתי נמדד 0.691 SBD (130 מילויים מסווגים) — הפרויקציה רצה על האמת (+916.1765% תיקון)
נתח-זמן (Q11): SBD/STEEM (internal steem): 1 נקודות — אחרון 23.9286% · HBD/HIVE (internal hive): 1 נקודות — אחרון 4.0855% (פנקס התוכניות הוא הסדרה — הנתח כמגמה, לא תמונה)
סולם הצי: 1 חשבון/ות ממומנים (headcorner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 199.008 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
מפת הכשלים (מה שהפיל עושי-שוק גדולים → החוסם שלנו): adverse selection→BUY-EDGE law · inventory skew→SELL-CAP-85% + fill-ledger recycle suggestions close the loop · fee drag on thin venues→fee-doctrine · self-trading poisoning the edge books→VWAP-EXCLUSION + INTERNAL-FLOW labeling + the 25% cap · silent capacity rot (a cadence that dies quietly)→cadence legs + no-noise comparator + census wiring checks · overtrading beyond what the tape absorbs→volume = min(tape bound, capacity bound); the binding is surfaced, never hidden
השער: קצב הטייפ 10 מילויים/דק׳ נמדד 2026-10-03 (recon market-exec); 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ ומהיכולת; נפח הבריכה = condenser get_volume מהשרשרת עצמה.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.