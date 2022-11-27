import { createApp } from 'vue'
import "amfe-flexible"
import Vant from "vant"
import "vant/lib/index.css"
import './view/buying/css/reset.css'

import './style.css'
import App from './App.vue'

import router from "./routers"
import pinia from './store'
import Navbar from "@/components/navbar/index.vue"

const app = createApp(App)
app.use(router)
.component("Navbar",Navbar)
.use(pinia)
.use(Vant)
.mount('#app')
