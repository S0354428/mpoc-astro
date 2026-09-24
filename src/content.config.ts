import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// ---- Page content (one YAML file per page, each top-level key = one entry) ----
const homepage = defineCollection({
  loader: file('./src/content/homepage/home.yaml'),
});
const about = defineCollection({
  loader: file('./src/content/about/about.yaml'),
});
const getInvolved = defineCollection({
  loader: file('./src/content/get-involved/get-involved.yaml'),
});
const vietnamPage = defineCollection({
  loader: file('./src/content/vietnam/vietnam.yaml'),
});
const storiesPage = defineCollection({
  loader: file('./src/content/stories-page/stories-page.yaml'),
});
const alumniPage = defineCollection({
  loader: file('./src/content/alumni-page/alumni-page.yaml'),
});
const supportUs = defineCollection({
  loader: file('./src/content/support-us/support-us.yaml'),
});
const partners = defineCollection({
  loader: file('./src/content/partners/partners.yaml'),
});
const contactPage = defineCollection({
  loader: file('./src/content/contact/contact.yaml'),
});

// ---- Repeatable people/content collections (one Markdown file each) ----
const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().default(99),
    photo: z.string().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    category: z.enum(['Lab', 'Vietnam Trip', 'Committee Life', 'Alumni Reflections']),
    quote: z.string(),
    anonymous: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    photo: z.string().optional(),
  }),
});

const alumni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alumni' }),
  schema: z.object({
    name: z.string(),
    gradYear: z.string(),
    currentRole: z.string(),
    tag: z.enum(['Clinical Practice', 'Grad School', 'Industry', 'Research']),
    linkedin: z.string().optional(),
    anonymous: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    photo: z.string().optional(),
  }),
});

export const collections = {
  homepage,
  about,
  getInvolved,
  vietnamPage,
  storiesPage,
  alumniPage,
  supportUs,
  partners,
  contactPage,
  team,
  stories,
  alumni,
};
