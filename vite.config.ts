import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BLOOMTEX/',   // ← Importante: debe ser el nombre del repositorio
})