import { defineConfig } from 'vite';
import path from 'path';
import string from 'vite-plugin-string';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: './src/index.html',
    },
  },
  plugins: [string({ include: '**/*.html' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.js'],
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
});
