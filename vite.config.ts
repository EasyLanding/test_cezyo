import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@icons': path.resolve(__dirname, './src/icons'),
      '@typesAplications': path.resolve(__dirname, './src/typesAplications'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@moduleComponents': path.resolve(__dirname, './src/moduleComponents'),
      '@api': path.resolve(__dirname, './src/api'),
      '@store': path.resolve(__dirname, './src/store')
    }
  }
})
