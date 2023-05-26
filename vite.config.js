import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    rollupOptions: {
      // Add any custom Rollup options here
      external: ["react", "react-dom"],
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
