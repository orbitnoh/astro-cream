import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './blog/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    private: z.boolean().default(false),
  }),
});

export const collections = { blog };
