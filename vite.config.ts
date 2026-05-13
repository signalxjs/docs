import { defineConfig } from 'vite';
import { sigxPlugin } from '@sigx/vite';
import { ssgPlugin } from '@sigx/ssg/vite';
import { monacoPrebundledPlugin } from '@sigx/monaco-editor/vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// 'prebundled' uses the static bundle shipped by @sigx/monaco-editor;
// 'cdn' loads Monaco from unpkg.
const MONACO_STRATEGY = (process.env.MONACO_STRATEGY as 'prebundled' | 'cdn') || 'prebundled';

// Asset path prefix. Defaults to `/` for the GitHub Pages deployment at
// the org root (https://signalxjs.github.io/); override with BASE_PATH if
// serving from a subpath.
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
    base: BASE_PATH,
    plugins: [
        tailwindcss(),
        sigxPlugin(),
        ssgPlugin(),
        monacoPrebundledPlugin({
            strategy: MONACO_STRATEGY,
            publicPath: `${BASE_PATH}monaco-bundle`,
        }),
    ],
    oxc: {
        jsx: {
            runtime: 'automatic',
            importSource: 'sigx',
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
