// @ts-nocheck
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),

  alias: {
    '@scripts': './src/scripts',
  },

  integrations: [react()],
});