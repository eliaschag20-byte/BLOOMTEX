import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base preparado para GitHub Pages: https://<usuario>.github.io/BLOOMTEX/
export default defineConfig({
  plugins: [react()],
  base: '/BLOOMTEX/',
});
