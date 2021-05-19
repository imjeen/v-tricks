import Home from "@/views/Home";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

import Nest from "./Nest";

console.log(Nest);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
  },
  {
    path: "/component",
    component: Nest,
    children: [
      {
        path: "",
        component: () => import("@lib/Barrage/demo.vue"),
      },
      {
        path: "Barrage",
        component: () => import("@lib/Barrage/demo.vue"),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;
