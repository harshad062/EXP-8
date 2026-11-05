import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// For GitHub Pages set base to "/EXP-8/"
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-404",
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const indexPath = path.join(distDir, "index.html");
        const notFoundPath = path.join(distDir, "404.html");
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
        }
      },
    },
  ],
  base: "/EXP-8/",
});

