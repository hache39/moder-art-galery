import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/moder-art-galery/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        location: resolve(__dirname, 'location.html'),
      },
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public',
});
