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
        changeOrigin: true,
      },
      "/netEase": {
        target: "https://m.you.163.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/netEase/, ""),
      },
      "/xhr": {
        target: "https://m.you.163.com",
        changeOrigin: true,
      },
      "/item": {
        target: "https://m.you.163.com",
        changeOrigin: true,
      },
    },
  },
  scss: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, //根据设计稿宽度除以10进行设置，假设设计稿为375，即rootValue设为37.5
          propList: ["*"], //设置需要转换的属性，*为所有都进行转换
        }),
      ],
    },
  },
});
