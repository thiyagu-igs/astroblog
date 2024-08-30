import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import cloudflare from '@astrojs/cloudflare';
//import image from '@astrojs/image';

export default defineConfig({
  // used to generate images
  output: 'hybrid',
  adapter: cloudflare({    
    // imageService: 'cloudflare',
    // platformProxy: {
    //   enabled: true,
    //   experimentalJsonConfig: true
    // }
  }), 
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
