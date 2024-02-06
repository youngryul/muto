import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  outputDir: "../src/main/java/com/muto",
  devServer: {
    port: 8082,
    proxy: {
      '/example': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  }
})
