import { createRouter, createWebHistory } from "vue-router";

import cabinet from "@/router/cabinet.js";
import client from "@/router/client.js";

const defaultRoutes = [
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/other/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...client, ...cabinet, ...defaultRoutes],
});

export default router;
