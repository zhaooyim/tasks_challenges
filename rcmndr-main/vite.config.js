import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    // when running npm run build, vite will build and bundle all client code
    // and generates them in the dist folder under assets.
    // We must make sure that server.js never goes under the assets folder
    // because that's our backened code that should never be public to the internet.
    outDir: './dist/assets',
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,ts,tsx,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'rcmndr.',
        short_name: 'rcmndr.',
        start_url: '/',
        orientation: 'portrait',
        display: 'standalone',
        background_color: '#FF17CE',
        theme_color: '#1B0636',
        icons: [
          {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
      '/admin': {
        target: 'http://localhost:3000',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
