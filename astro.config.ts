import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import cloudflare from '@astrojs/cloudflare';
import image from '@astrojs/image';

export default defineConfig({
  // used to generate images
  output: 'server',
  integrations: [image()],
  adapter: cloudflare({
    // imageService: 'cloudflare',
    // platformProxy: {
    //   enabled: true,
    //   experimentalJsonConfig: true
    // }
  }),
  // image: {
  //   service: {
  //     entrypoint: "./src/passThroughImageService",
  //   },
  // },
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://brutal.elian.codes/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
