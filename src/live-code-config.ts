/**
 * Live Code Configuration for Docs
 *
 * Registers the SignalX packages that should be available inside live-code
 * playgrounds. Registering them here means live-code's runtime won't try to
 * dynamically import them at startup (which fails when an optional peer
 * isn't installed).
 */

import { configureLiveCode } from '@sigx/live-code';
import * as daisyui from '@sigx/daisyui';
import * as router from '@sigx/router';
import * as store from '@sigx/store';

// Modules become available inside live-code as `window.__SIGX_DAISYUI__`,
// `window.__SIGX_ROUTER__`, `window.__SIGX_STORE__`.
configureLiveCode({
    modules: {
        '@sigx/daisyui': () => daisyui,
        '@sigx/router': () => router,
        '@sigx/store': () => store,
    }
});
