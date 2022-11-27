<<<<<<< HEAD
import { defineConfig } from 'vite'
import {resolve} from "path"
import vue from '@vitejs/plugin-vue'

=======
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path"
>>>>>>> ed98f4e (hotfix: searchbox)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': resolve(__dirname, "src"),
    },
    extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
  },
  server:{
    proxy:{
      "/api":{
        target:"http://sph-h5-api.atguigu.cn"
=======
      "@": resolve(__dirname, "src"),
    },
    extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
  },
  server: {
    proxy: {
      "/api": {
        target: "http://sph-h5-api.atguigu.cn",
>>>>>>> ed98f4e (hotfix: searchbox)
      },
      "/netEase": {
        target: "https://m.you.163.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/netEase/, ""),
      },
    },
  },
});
