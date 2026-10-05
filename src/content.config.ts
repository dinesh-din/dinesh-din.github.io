import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['shipped', 'in-progress', 'planned']).default('shipped'),
    order: z.number().default(99),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // Image paths live in the `public` folder, e.g. /images/projects/rag.png
    image: z.string().optional(),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
