import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/single-store/nordstorm",
      name: "single-store-nordstorm",
      component: () => import("../views/SingleStoreNordstormView.vue"),
    },
    {
      path: "/single-store/zara",
      name: "single-store-zara",
      component: () => import("../views/SingleStoreZaraView.vue"),
    },
  ],
});

export default router;
