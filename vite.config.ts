import { defineConfig } from 'vite';
import { sigxPlugin } from '@sigx/vite';
import { ssgPlugin } from '@sigx/ssg/vite';
import { monacoPrebundledPlugin } from '@sigx/monaco-editor/vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// 'prebundled' uses the static bundle shipped by @sigx/monaco-editor;
// 'cdn' loads Monaco from unpkg.
const MONACO_STRATEGY = (process.env.MONACO_STRATEGY as 'prebundled' | 'cdn') || 'prebundled';

export default defineConfig({
    plugins: [
        tailwindcss(),
        sigxPlugin(),
        ssgPlugin(),
        monacoPrebundledPlugin({
            strategy: MONACO_STRATEGY,
            publicPath: '/monaco-bundle',
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
