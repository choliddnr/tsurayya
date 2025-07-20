// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import * as fa6Brands from "@iconify-json/fa6-brands";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tsurayya.com",
  integrations: [
    sitemap(),
    icon({
      collections: {
        "fa6-brands": fa6Brands,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
