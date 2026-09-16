// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET || 'production';

// Sanity is wired in only once a project ID exists. Until Liam creates the
// Sanity project, the site builds as plain static pages with no CMS dependency.
const integrations = [react(), sitemap({ filter: (page) => !page.includes('/admin') && !page.includes('/thanks') && !page.includes('/concept') })];
if (projectId) {
  integrations.unshift(
    sanity({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2026-01-01',
      studioBasePath: '/admin',
    }),
  );
}

export default defineConfig({
  site: 'https://pithstudio.co.uk',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations,
});
