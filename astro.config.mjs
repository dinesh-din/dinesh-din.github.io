import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages from a repo named dinesh-din.github.io,
// so no `base` path is needed. If you add a custom domain later, change `site`.
export default defineConfig({
  site: 'https://dinesh-din.github.io',
});
