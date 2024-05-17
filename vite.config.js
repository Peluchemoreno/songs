import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/songs/',
  plugins: [react()],
  server: {
    port: 2202
  }
})
