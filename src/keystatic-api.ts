import { makeHandler } from '@keystatic/astro/api';
import config from '../keystatic.config';

/**
 * Override Keystatic's default Astro API handler so credentials come from
 * process.env (available at runtime on Vercel), not only import.meta.env.
 */
export const all = makeHandler({
  config,
  clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
  secret: process.env.KEYSTATIC_SECRET,
});

export const ALL = all;
export const prerender = false;
