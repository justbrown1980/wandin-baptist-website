// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wandinbaptistchurch.com.au',
  integrations: [react(), markdoc(), keystatic(), sitemap()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
