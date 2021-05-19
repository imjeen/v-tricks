import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // root: "/public",
  base: '/v-tricks/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@lib": path.resolve(__dirname, "components"),
    },
  },
  css: {
    postcss: path.resolve(__dirname, "./build/postcss.config.js"),
    modules: {
      localsConvention: "camelCase",
    },
  },

  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [vue({}), vueJsx({})],
});
