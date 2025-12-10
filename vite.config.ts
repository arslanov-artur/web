import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/',
  plugins: [svelte()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'animation': ['motion'],
          'fonts': ['@fontsource/inter', '@fontsource/fraunces', '@fontsource/jetbrains-mono']
        }
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  }
})
