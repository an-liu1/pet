import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cat",
    name: "Cat",
    component: () => import("../views/ShopCAT.vue"),
  },
  {
    path: "/dog",
    name: "Dog",
    component: () => import("../views/ShopDog.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/Service.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
