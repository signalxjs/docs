import { defineConfig } from 'vite';
import { sigxPlugin } from '@sigx/vite';
import { ssgPlugin } from '@sigx/ssg/vite';
import { monacoPrebundledPlugin } from '@sigx/monaco-editor/vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// 'prebundled' uses the static bundle shipped by @sigx/monaco-editor;
// 'cdn' loads Monaco from unpkg.
const MONACO_STRATEGY = (process.env.MONACO_STRATEGY as 'prebundled' | 'cdn') || 'prebundled';

// Asset path prefix. Defaults to `/docs/` for the GitHub Pages deployment
// (signalxjs.github.io/docs/); set BASE_PATH=/ when serving from a custom
// domain root.
const BASE_PATH = process.env.BASE_PATH ?? '/docs/';

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
