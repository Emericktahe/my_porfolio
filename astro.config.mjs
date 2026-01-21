// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  output: "static",

  // 👇 IMPORTANT POUR GITHUB PAGES
  outDir: "docs",

  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },

  build: {
    inlineStylesheets: "auto",
  },

  server: {
    host: true,
    port: 4321,
  },
});
