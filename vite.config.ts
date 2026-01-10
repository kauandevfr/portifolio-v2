import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 4173,
  },
  preview: {
    host: "::",
    port: 4173,
    allowedHosts: ["kauanrodrigues.com.br", ".kauanrodrigues.com.br", "portifolio.kauanrodrigues.com.br"],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
