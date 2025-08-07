import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
  }),
});

const technologyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(), // Font Awesome icon class
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    useCases: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  technologies: technologyCollection,
};
