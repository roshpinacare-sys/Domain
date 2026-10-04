# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058+CR-0059, Rung 28-29)
פסק דין: **מנוע-נפח-חי**
נפח מוקרן: **78.336 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **0.2609 → 0.5218 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | נפח מוקרן SBD/יום | נפח שוק 24ש׳ | נתח חייל אחד |
|---|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0 | 1.1677 | 0.5839 | 39.168 | 163.687 | 23.9286% |
| HBD/HIVE (internal hive) | 0 | 0.1645 | 0.0823 | 39.168 | 958.712 | 4.0855% |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — | — |
סולם הנתח בSBD/STEEM (internal steem) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 39.168 SBD/יום = 23.9286% מהבריכה
- N=2 חיילים → 78.336 SBD/יום = 47.8572% מהבריכה
- N=3 חיילים → 117.504 SBD/יום = 71.7858% מהבריכה
- N=5 חיילים → 195.84 SBD/יום = 119.643% מהבריכה — **הבריכה נשבעת: התקרה היא הטייפ, לא היכולת**
סולם הנתח בHBD/HIVE (internal hive) (מימון מהמדידה של השרשרת):
- N=1 חיילים → 39.168 SBD/יום = 4.0855% מהבריכה
- N=2 חיילים → 78.336 SBD/יום = 8.171% מהבריכה
- N=3 חיילים → 117.504 SBD/יום = 12.2564% מהבריכה
- N=5 חיילים → 195.84 SBD/יום = 20.4274% מהבריכה
מימוש מול פרויקציה (SBD/STEEM (internal steem)): 124 מילויים אמיתיים ב-24 שעות מהמילוי האחרון · נמכר 62.781 SBD · נקנה 24.388 SBD · מילוי ממוצע 0.703 SBD · דיוק הפרויקציה 160.2865%
סולם הצי: 1 חשבון/ות ממומנים (headcorner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 19.584 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
מפת הכשלים (מה שהפיל עושי-שוק גדולים → החוסם שלנו): adverse selection→BUY-EDGE law · inventory skew→SELL-CAP-85% + fill-ledger recycle suggestions close the loop · fee drag on thin venues→fee-doctrine · self-trading poisoning the edge books→VWAP-EXCLUSION + INTERNAL-FLOW labeling + the 25% cap · silent capacity rot (a cadence that dies quietly)→cadence legs + no-noise comparator + census wiring checks · overtrading beyond what the tape absorbs→volume = min(tape bound, capacity bound); the binding is surfaced, never hidden
השער: קצב הטייפ 10 מילויים/דק׳ נמדד 2026-10-03 (recon market-exec); 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ ומהיכולת; נפח הבריכה = condenser get_volume מהשרשרת עצמה.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.