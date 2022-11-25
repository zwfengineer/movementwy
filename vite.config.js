import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      // "/api":{
      //   target:"http://sph-h5-api.atguigu.cn"
      // },
      "/netEase":{
        target:"https://m.you.163.com",
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/netEase/,'')
      }
    }
  }
})
