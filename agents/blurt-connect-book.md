
## BLURT-CONNECT RUN · 2026-10-11T14:29:19.030Z

| at | op | detail | status |
|---|---|---|---|
| 2026-10-11T14:29:18.364Z | config | chain_id=… head_block=64394728 | ok |
| 2026-10-11T14:29:18.655Z | account_update | @cornerstone broadcast refused: signed_transaction.operations	 cause: account_update.owner	 cause: authority.account_auths	 cause: v | no-authority-or-error |
| 2026-10-11T14:29:19.030Z | account_update | @headcorner broadcast refused: signed_transaction.operations	 cause: account_update.owner	 cause: authority.account_auths	 cause: v | no-authority-or-error |
| 2026-10-11T14:29:19.030Z | summary | no account accepts BLURT_ACTIVE_WIF — key-account mapping unknown; owner must map the secret | RED-UNKNOWN-MAPPING |


## BLURT-CONNECT RUN · 2026-10-11T14:43:33.876Z

| at | op | detail | status |
|---|---|---|---|
| 2026-10-11T14:43:33.139Z | config | chain_id=cd8d90f29a… (official blurtjs config) | ok |
| 2026-10-11T14:43:33.724Z | census | @cornerstone no candidate secret matches live active authority | refused |
| 2026-10-11T14:43:33.876Z | account_update | @headcorner broadcast refused: request to https://rpc.blurt.world failed, reason: getaddrinfo ENOTFOUND rpc.blurt.world | no-authority-or-error |
| 2026-10-11T14:43:33.876Z | summary | no blurt account connected this run — census lines above say exactly which secrets were tried | RED-UNCONNECTED |

