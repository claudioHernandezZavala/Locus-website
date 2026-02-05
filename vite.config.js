import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves at https://<user>.github.io/<repo>/
  base: process.env.REPO_NAME ? `/${process.env.REPO_NAME}/` : '/',
})
