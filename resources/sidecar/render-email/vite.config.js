import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'RenderEmail',
      fileName: 'render-email',
    },
    rollupOptions: {
      external: ['react', /^@react-email\//]
    },
  },
})
