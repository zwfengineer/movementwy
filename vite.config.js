import { defineConfig } from 'vite'
import {resolve} from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src"),
    },
    extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
  },
  server:{
    proxy:{
      "/api":{
        target:"http://sph-h5-api.atguigu.cn"
      },
      "/netEase": {
        target: "https://m.you.163.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/netEase/, ""),
      },
    },
  },
});
