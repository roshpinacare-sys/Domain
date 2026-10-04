# מנוע הנפח — תוכנית עושה-השוק של הצי (CR-0058, Rung 28)
פסק דין: **מנוע-נפח-חי**
נפח מוקרן: **39.168 SBD/יום** · רווח נטו מוקרן (שמרני→אופטימי): **0.2886 → 0.5772 SBD/יום**
| זירה | עמלה (bps) | מרווח נמדד % | קצה שמרני % | קצה אופטימי % | נפח מוקרן SBD/יום |
|---|---|---|---|---|---|
| SBD/STEEM (internal steem) | 0 | 1.4736 | 0.7368 | 1.4736 | 39.168 |
| saos-dex-kernel (L1 our own DEX) | 30 | — | — | — | — |
סולם הצי: 1 חשבון/ות ממומנים (headcorner) · חלוקת סולמות מכסה את כל ה-10 המדרגות
זרימה פנימית (מסחר בין החיילים): זמינה — תקרה 9.792 SBD/יום, מתויגת INTERNAL-FLOW, מוחרגת מה-VWAP
חוקי הבטיחות: SELL-CAP-85% of liquid inventory · MAX-NEW-ORDERS 6/run/account · BUY-EDGE: no buy above realized sell VWAP − 0.3% · SPACING-FLOOR 0.4% (market-grid) · INTERNAL-FLOW capped 25% + labeled + VWAP-excluded · STASIS halt-before-read
השער: קצב הטייפ 10 מילויים/דק׳ נמדד 2026-10-03 (recon market-exec); 6 פקודות/ריצה × 96 ריצות/יום = תקרת יכולת; הנפח מוגבל למינימום מהטייפ ומהיכולת.
כל פקודה בפועל נשארת OWNER-GATED (market-exec.cjs). הספר הזה תוכנית ומדידה — לעולם לא חתימה.