import { createApp } from 'vue'
import element from "element-plus"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import "element-plus/dist/index.css"
import './view/buying/css/reset.css'
import 'amfe-flexible'

import './style.css'
import App from './App.vue'

import router from "./routers"
import pinia from './store'


const app = createApp(App)
app.use(router)
.use(pinia)
.use(element,{local:zhCn})
.mount('#app')
