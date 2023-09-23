import { createWebHistory, createRouter } from "vue-router";

const routes = [
  // common
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("../views/activity/Activity.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../views/team/Team.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my/My.vue"),
  },

  // auth
  {
    path: "/auth/login",
    name: "auth-login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/auth/register",
    name: "auth-register",
    component: () => import("../views/auth/Register.vue"),
  },

  //errors
  {
    path: "/error",
    name: "error",
    component: () => import("../views/error/DefaultError.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
