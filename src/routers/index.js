import { createRouter, createWebHistory } from "vue-router";
import routes from "./routers";
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const resetfontsize = (fontsize) => {
  const html = document.querySelector("html");
  html.style.fontSize = fontsize;
};

router.afterEach((to, from) => {
  if (to.name == "shopcart") {
    resetfontsize("23.45px");
  }else{
    resetfontsize("37.5px")
  }
});

export default router;
