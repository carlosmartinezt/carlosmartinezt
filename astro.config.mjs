// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isProduction = !!process.env.CI;

// https://astro.build/config
export default defineConfig({
  site: isProduction
    ? 'https://carlosmartinezt.github.io'
    : 'http://localhost:4321',
  base: isProduction ? '/carlosmartinezt' : '/',
  integrations: [mdx(), sitemap()],
});
