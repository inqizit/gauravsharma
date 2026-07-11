import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works when served from a sub-path
  // (GitHub Pages project site: https://inqizit.github.io/gauravsharma/)
  base: './',
  plugins: [react()],
})
