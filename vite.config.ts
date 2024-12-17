import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    server: {
        // host: true,
        // host: '0.0.0.0',
        // port: 3000,
        watch: {
            usePolling: true,
        },
        hmr: {
            protocol: 'ws',
            host: 'localhost',
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@components': path.resolve(__dirname, './src/components'),
            '@types': path.resolve(__dirname, './src/types'),
            '@core': path.resolve(__dirname, './src/coreLogic'),
        },
    },

    plugins: [react()],
});
