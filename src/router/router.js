import { createRouter, createWebHistory } from "vue-router";
import SinglePage from "@/views/SinglePage.vue";

const routes = [
  {
    path: "/single-store/:id",
    name: "single-store",
    component: SinglePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
