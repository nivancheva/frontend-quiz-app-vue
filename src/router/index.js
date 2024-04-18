import { createRouter, createWebHashHistory } from "vue-router";

import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../pages/Home.vue'

const routes = [
    {
        path:'/',
        name: 'Public',
        component: DefaultLayout,
        redirect: '/',
        children:[
            {
                path:'/',
                name: 'Home',
                component: Home
            },

        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router