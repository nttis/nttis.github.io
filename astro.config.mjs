// @ts-check
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    site: "https://nttis.github.io",

    vite: {
        server: {
            allowedHosts: true,
            watch: {
                usePolling: true,
            },
        },
    },
})
