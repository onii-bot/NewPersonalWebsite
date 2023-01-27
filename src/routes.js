import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        name : "Home",
        path : "/",
        component : () => import('./components/Home.vue')
    },
    {
        name : "Contact",
        path : "/contact",
        component : () => import('./components/Contact.vue')
    },
    {
        name : "About",
        path : "/about",
        component : () => import('./components/About.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
