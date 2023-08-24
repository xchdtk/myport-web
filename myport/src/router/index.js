import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/activity",
        name: "activity",
        component: () => import("../views/Activity.vue")
    },
    {
        path: "/team",
        name: "team",
        component: () => import("../views/Team.vue")
    },
    {
        path: "/my",
        name: "my",
        component: () => import("../views/My.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;