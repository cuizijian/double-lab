import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// documentation: https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  minify: false,
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        javascriptEnabled: true,
      },
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@service": path.resolve(__dirname, "./src/service"),
      "~antd": path.join(__dirname, "node_modules/antd"),
    },
    // extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  server: {
    hmr: { overlay: true },
    port: 2853,
    host: "0.0.0.0",
    open: false,
  },
});
