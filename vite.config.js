import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves at https://<user>.github.io/<repo>/
  // Must match your GitHub repo name (e.g. "Locus" or "Locus-website")
  base: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
    : "/Locus/",
});
