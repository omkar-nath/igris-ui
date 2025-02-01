/// <reference types="vitest" />
import { defineConfig } from "vite";
import path from "node:path";
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { pigment } from "@pigment-css/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pigment({}), libInjectCss(), dts({ include: ["lib"] })],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./lib/__tests__/setupTests.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib/"),
      "@components": path.resolve(__dirname, "./lib/components/"),
      "@theme": path.resolve(__dirname, "./lib/theme/"),
    },
  },
  build: {
    copyPublicDir: false,
    minify: "esbuild",
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],

      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
