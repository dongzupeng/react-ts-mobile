import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-plugin-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() 
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/layout': path.resolve(__dirname, 'src/layout')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
