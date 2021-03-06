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
    path: "/animations",
    component: Nest,
    children: [
      {
        path: "",
        // @ts-ignore
        component: () => import("@docs/animations/demo"),
      },
      {
        path: "scene",
        // @ts-ignore
        component: () => import("@docs/animations/scene"),
      },
    ],
  },
  {
    path: "/components",
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
      {
        path: "Input",
        component: () => import("@lib/Input/demo.vue"),
      },
      {
        path: "Button",
        component: () => import("@lib/Button/demo.vue"),
      },
      {
        path: "Notify",
        component: () => import("@lib/Notify/demo.vue"),
      },
      {
        path: "Icon",
        component: () => import("@lib/Icon/demo.vue"),
      },
      {
        path: "Skeleton",
        component: () => import("@lib/Skeleton/demo.vue"),
      },
      {
        path: "TabGroup",
        component: () => import("@lib/TabGroup/demo.vue"),
      },
      {
        path: "ScrollTab",
        component: () => import("@lib/ScrollTab/demo.vue"),
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
