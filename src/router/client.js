export default [
  {
    path: "/:id",
    name: "client_home",
    component: () => import("@/views/client/Home.vue"),
  },
];
