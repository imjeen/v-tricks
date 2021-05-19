import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx({}),
  ],
  css: {
    postcss: path.resolve(__dirname, "./postcss.config.js"),
  },
  build: {
    outDir: "lib",
    lib: {
      entry: path.resolve(__dirname, "../components/index.ts"),
      name: "VTricks",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
