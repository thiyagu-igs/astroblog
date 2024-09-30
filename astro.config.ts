import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
//import cloudflare from '@astrojs/cloudflare';
//import image from '@astrojs/image';

export default defineConfig({
  // used to generate images
  output: 'static',
  base: 'https://thiyagu-igs.github.io/astroblog/',
  //  adapter: cloudflare({    
  //  imageService: 'cloudflare',
  // //   // platformProxy: {
  // //   //   enabled: true,
  // //   //   experimentalJsonConfig: true
  // //   // }
  //  }), 
   vite: {
    ssr: {
      external: ['node:buffer'],
    },
  },
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https:// astroblog-do6.pages.dev/'
      : process.env.VERCEL_URL
      ? `http://127.0.0.1:8788/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })], 
});
