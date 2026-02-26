import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// GitHub Pages: https://claudiohernandezzavala.github.io/Locus-website/
export default defineConfig({
  plugins: [react()],
  base: "/Locus-website/",
});
