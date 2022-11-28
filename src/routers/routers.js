const routers = [
  {
    name: "home",
    path: "/home",
    component: () => import("../view/home/index.vue"),
    meta: {
      showbar: true,
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "category",
    path: "/category",
    component: () => import("../view/category/index.vue"),
    meta: {
      showbar: true,
    },
  },
  {
    name: "detail",
    path: "/detail",
    component: () => import("../view/detail/index.vue"),
    meta: {
      showbar: false,
    },
  },
  {
    name: "showshop",
    path: "/showshop",
    component: () => import("../view/showshop/index.vue"),
    meta: {
      showbar: false,
    },
  },
  {
    name: "buying",
    path: "/buying",
    component: () => import("../view/buying/index.vue"),
    meta: {
      showbar: true,
    },
  },
  {
    name: "personal",
    path: "/personal",
    component: () => import("../view/personal/index.vue"),
    meta: {
      showbar: true,
    },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: () => import("../view/shopcart/index.vue"),
    meta: {
      showbar: true,
    },
  },
  {
    name: "search",
    path: "/search",
    component: () => import("../view/search/index.vue"),
    meta: {
      showbar: false,
    },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../view/login/index.vue"),
    meta: {
      showbar: false,
    },
  },
];

export default routers;
