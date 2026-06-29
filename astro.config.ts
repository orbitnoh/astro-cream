import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import { satteri } from '@astrojs/markdown-satteri';
import icon from 'astro-icon';
import katex from 'katex';
import type { MdastPluginDefinition } from 'satteri';

const injectedScssPath = fileURLToPath(
  new URL('./src/styles/_inject.scss', import.meta.url),
).replaceAll('\\', '/');

const renderKatex = (value: string, displayMode: boolean) =>
  katex.renderToString(value, {
    displayMode,
    throwOnError: false,
  });

const katexPlugin: MdastPluginDefinition = {
  name: 'katex',
  inlineMath(node) {
    return {
      type: 'html',
      value: renderKatex(node.value, false),
    };
  },
  math(node) {
    return {
      type: 'html',
      value: renderKatex(node.value, true),
    };
  },
};

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
    processor: satteri({
      mdastPlugins: [katexPlugin],
      features: {
        math: true,
      },
    }),
    shikiConfig: {
      theme: 'catppuccin-frappe',
    },
  },
  integrations: [icon()],
});
