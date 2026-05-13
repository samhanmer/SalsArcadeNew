import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/SalsArcadeNew/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        physical: 'physical.html',
	digital: 'digital.html',
        events: 'events.html',
      }
    }
  }
})