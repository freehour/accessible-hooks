import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { EsLinter, linterPlugin } from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';

import * as packageJson from './package.json';

const dependencies = [...Object.keys(packageJson.dependencies || {})];

export default defineConfig(configEnv => ({
    plugins: [
        tsConfigPaths(),
        linterPlugin({
            include: ['./lib/**/*.{ts}'],
            linters: [new EsLinter({ configEnv })],
        }),
        dts({
            include: ['lib/'],
        }),
    ],
    build: {
        lib: {
            entry: resolve('lib', 'index.ts'),
            name: 'Accessible Hooks',
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            external: dependencies,
            output: {
                globals: Object.fromEntries(dependencies.map(dep => [dep, dep])),
            },
        },
        sourcemap: true,
    },
}));
