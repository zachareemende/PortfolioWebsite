import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "src/main.jsx",
    }, 
    commonjsOptions: {
      include: [/fancy-date/, /node_modules/]
    }
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  optimizeDeps: {
    include: ['fancy-date'],
  },
});
