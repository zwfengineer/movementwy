import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import postCssPxToRem from "postcss-pxtorem"; // https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ["*"],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
  },
  server: {
    proxy: {
      "/api": {
        target: "http://sph-h5-api.atguigu.cn",
      },
      "/netEase": {
        target: "https://m.you.163.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/netEase/, ""),
      },
      "/topic/v1": {
        target: "https://m.you.163.com",
        changeOrigin: true,
      },
    },
  },
});
