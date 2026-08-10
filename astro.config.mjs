// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://wandinbaptistchurch.com.au',
  integrations: [react(), markdoc(), keystatic(), sitemap()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Use our handler that reads process.env for GitHub OAuth credentials.
        '@keystatic/astro/internal/keystatic-api.js': path.resolve(
          rootDir,
          'src/keystatic-api.ts',
        ),
      },
    },
  },
});
