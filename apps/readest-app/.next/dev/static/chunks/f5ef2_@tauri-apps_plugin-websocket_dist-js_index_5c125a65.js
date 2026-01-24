(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@tauri-apps+plugin-websocket@2.4.2/node_modules/@tauri-apps/plugin-websocket/dist-js/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.9.1/node_modules/@tauri-apps/api/core.js [client] (ecmascript)");
;
// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
class WebSocket {
    constructor(id, listeners){
        this.id = id;
        this.listeners = listeners;
    }
    static async connect(url, config) {
        const listeners = new Set();
        const onMessage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Channel"]();
        onMessage.onmessage = (message)=>{
            listeners.forEach((l)=>{
                l(message);
            });
        };
        if (config?.headers) {
            config.headers = Array.from(new Headers(config.headers).entries());
        }
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:websocket|connect', {
            url,
            onMessage,
            config
        }).then((id)=>new WebSocket(id, listeners));
    }
    addListener(cb) {
        this.listeners.add(cb);
        return ()=>{
            this.listeners.delete(cb);
        };
    }
    async send(message) {
        let m;
        if (typeof message === 'string') {
            m = {
                type: 'Text',
                data: message
            };
        } else if (typeof message === 'object' && 'type' in message) {
            m = message;
        } else if (Array.isArray(message)) {
            m = {
                type: 'Binary',
                data: message
            };
        } else {
            throw new Error('invalid `message` type, expected a `{ type: string, data: any }` object, a string or a numeric array');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$9$2e$1$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$core$2e$js__$5b$client$5d$__$28$ecmascript$29$__["invoke"])('plugin:websocket|send', {
            id: this.id,
            message: m
        });
    }
    async disconnect() {
        await this.send({
            type: 'Close',
            data: {
                code: 1000,
                reason: 'Disconnected by client'
            }
        });
    }
}
;
}),
]);

//# sourceMappingURL=f5ef2_%40tauri-apps_plugin-websocket_dist-js_index_5c125a65.js.map