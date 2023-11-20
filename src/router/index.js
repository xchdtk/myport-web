import { createWebHistory, createRouter } from "vue-router";

const routes = [
  // common
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/Home.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("folio_token")) {
        next();
      } else {
        next("/auth/login");
      }
    },
  },

  // team
  {
    path: "/team",
    name: "team",
    component: () => import("../views/team/Team.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("folio_token")) {
        next();
      } else {
        next("/auth/login");
      }
    },
  },
  {
    path: "/team/apply",
    name: "team_apply",
    component: () => import("../views/team/Apply.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("folio_token")) {
        next();
      } else {
        next("/auth/login");
      }
    },
  },
  {
    path: "/team/detail",
    name: "team_detail",
    component: () => import("../views/team/Detail.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("folio_token")) {
        next();
      } else {
        next("/auth/login");
      }
    },
  },

  // my
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my/My.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("folio_token")) {
        next();
      } else {
        next("/auth/login");
      }
    },
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
