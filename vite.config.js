import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) =>
  ({
  plugins: [
  react(),
  eslint({
    lintOnStart: true,
    failOnError: mode === "production"
  })
  ],
    server: {
      open: true
    }
}))
