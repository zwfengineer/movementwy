import { createApp } from "vue";
import element from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "./view/buying/css/reset.css";
import "amfe-flexible";
import vant from 'vant'
import 'vant/lib/index.css';
import "./style.css";
import App from "./App.vue";

import './assets/css/reset.css';
import './assets/css/font/iconfont.css'
import 'amfe-flexible'

import router from "./routers"
import pinia from './store'
// import './assets/iconfont/iconfont.styl'


const app = createApp(App);
app
  .use(router)
  .component("Navbar", Navbar)
  .use(pinia)
.use(vant)
  .use(element, { local: zhCn })
  .mount("#app");
