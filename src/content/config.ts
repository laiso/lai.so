import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      image: z.string().optional(),
      date: z.string().optional(),
    }),
});

export const collections = {
  'entry': blogCollection,
};