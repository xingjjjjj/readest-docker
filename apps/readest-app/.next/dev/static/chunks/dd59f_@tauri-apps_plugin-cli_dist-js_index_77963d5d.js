(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@tauri-apps+plugin-cli@2.4.1/node_modules/@tauri-apps/plugin-cli/dist-js/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMatches",
    ()=>getMatches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [client] (ecmascript)");
;
// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Parse arguments from your Command Line Interface.
 *
 * @module
 */ /**
 * Parse the arguments provided to the current process and get the matches using the configuration defined [`tauri.cli`](https://tauri.app/v1/api/config/#tauriconfig.cli) in `tauri.conf.json`
 *
 * @example
 * ```typescript
 * import { getMatches } from '@tauri-apps/plugin-cli';
 * const matches = await getMatches();
 * if (matches.subcommand?.name === 'run') {
 *   // `./your-app run $ARGS` was executed
 *   const args = matches.subcommand?.matches.args
 *   if ('debug' in args) {
 *     // `./your-app run --debug` was executed
 *   }
 * } else {
 *   const args = matches.args
 *   // `./your-app $ARGS` was executed
 * }
 * ```
 *
 * @since 2.0.0
 */ async function getMatches() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:cli|cli_matches');
}
;
}),
]);

//# sourceMappingURL=dd59f_%40tauri-apps_plugin-cli_dist-js_index_77963d5d.js.map