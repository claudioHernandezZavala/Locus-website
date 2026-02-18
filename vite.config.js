import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Custom domain (locusnotebook.tech) = site at root → base must be "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
