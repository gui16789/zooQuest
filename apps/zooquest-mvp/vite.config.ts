import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3100
  },
  build: {
    outDir: '../../dist/zooquest-mvp',
    emptyOutDir: true
  }
});
