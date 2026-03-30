import { defineCollection, z } from "astro:content";

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
});

const engineering = defineCollection({
  type: "content",
  schema: articleSchema,
});

const idolmaster = defineCollection({
  type: "content",
  schema: articleSchema,
});

const creative = defineCollection({
  type: "content",
  schema: articleSchema,
});

export const collections = { engineering, idolmaster, creative };
