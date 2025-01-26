import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"

const blogposts = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx,mdoc}",
        base: "src/collections/blogposts",
    }),
})

export const collections = { blogposts }
