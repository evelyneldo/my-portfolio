// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',   // ✅ THIS is the fix!
  plugins: [react()],
})
