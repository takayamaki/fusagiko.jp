import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
});

const engineering = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/engineering" }),
  schema: articleSchema,
});

const idolmaster = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/idolmaster" }),
  schema: articleSchema,
});

const creative = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/creative" }),
  schema: articleSchema,
});

export const collections = { engineering, idolmaster, creative };
