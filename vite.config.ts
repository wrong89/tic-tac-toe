import react from '@vitejs/plugin-react';
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
    plugins: [react()],
});
