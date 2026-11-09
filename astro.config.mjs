// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Statische site: elke pagina wordt bij het bouwen als HTML gegenereerd (snel,
// goed te indexeren). Formulieren posten later naar een kleine serverfunctie.
export default defineConfig({
  site: 'https://coportaal.nl',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
