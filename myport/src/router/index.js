import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home/Home.vue")
    },
    {
        path: "/activity",
        name: "activity",
        component: () => import("../views/Activity/Activity.vue")
    },
    {
        path: "/team",
        name: "team",
        component: () => import("../views/Team/Team.vue")
    },
    {
        path: "/my",
        name: "my",
        component: () => import("../views/My/My.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login/MainLogin.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;