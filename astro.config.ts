import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import icon from 'astro-icon';

const injectedScssPath = fileURLToPath(
  new URL('./src/styles/_inject.scss', import.meta.url),
).replaceAll('\\', '/');

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${injectedScssPath}" as *;`,
        },
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-frappe',
    },
  },
  integrations: [icon()],
});
