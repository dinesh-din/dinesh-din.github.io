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
    // Optional case-study boxes shown above the write-up on the project page.
    problem: z.string().optional(),
    approach: z.string().optional(),
    next: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, notes };