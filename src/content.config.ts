import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entries = defineCollection({
  loader: glob({
    base: './content',
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry, data }) => {
      // Use frontmatter slug if provided
      if (data.slug) return data.slug;
      // Strip extension and get filename
      const withoutExt = entry.replace(/\.mdx?$/, '');
      const parts = withoutExt.split('/');
      const filename = parts.pop() as string;
      // If it's index.md, use parent folder name
      if (filename === 'index') {
        return parts.pop() as string;
      }
      return filename;
    },
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      slug: z.string().optional(),
      author: z.string().default('Carlos Martinez Tuanama'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { entries };
