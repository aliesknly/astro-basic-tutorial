import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://profound-toffee-d6489b.netlify.app",
  integrations: [preact()]
});