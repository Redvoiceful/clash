import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/:itemAlias",
    sensitive: true,
    strict: true,
    name: "itemAlias",
    component: () => import("@/pages/_itemAlias"),
  },
  {
    path: "/notFound",
    sensitive: true,
    name: "notFound",
    component: () => import("@/pages/notFound.vue"),

  },
  {
    path: "/:pathMatch(.*)*",
    sensitive: true,
    name: "notFound",
    redirect: "/notFound.vue",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
