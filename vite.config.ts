import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from "vite-plugin-svgr";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins:  [react(),svgr()],

        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@assets': path.resolve(__dirname, './src/assets'),
                '@components': path.resolve(__dirname, './src/components'),
                '@designSystem': path.resolve(__dirname, './src/components/designSystem'),
                '@mocks': path.resolve(__dirname, './src/mocks/respanses'),
            },
        },
        test: {
            css: false,
            globals: true,
            watch: false,
            environment: 'happy-dom',
            setupFiles: './src/setupTests.ts',
        },
    };
});

