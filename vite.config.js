import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: 'all'
  },
  preview: {
    host: true,
    port: 5173,
    allowedHosts: 'all' // 👈 ¡Esto le da permiso explícito al comando preview en producción!
  }
})