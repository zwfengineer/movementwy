import { createApp } from "vue";
import element from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import vant from "vant";
import App from "./App.vue";
import Navbar from "@/components/navbar/index.vue";
import "vant/lib/index.css";
import "./style.css";
import "element-plus/dist/index.css";
import "./assets/css/reset.css";
import "./assets/css/font/iconfont.css";
import "amfe-flexible";

import router from "./routers";
import pinia from "./store";

const app = createApp(App);
app
  .use(router)
  .component("Navbar", Navbar)
  .use(pinia)
  .use(vant)
  .use(element, { local: zhCn })
  .mount("#app");
