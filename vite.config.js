import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postCssPxToRem from "postcss-pxtorem";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
  },
});
