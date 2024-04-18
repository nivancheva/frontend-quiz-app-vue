import { createRouter, createWebHashHistory } from "vue-router";

import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../pages/Home.vue'
import Html from '../pages/Html.vue'
import Css from '../pages/Css.vue'
import JavaScript from '../pages/JavaScript.vue'
import Accessibility from '../pages/Accessibility.vue'

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
            {
                path:'/html',
                name: 'Html',
                component: Html
            },
            {
                path:'/css',
                name: 'Css',
                component: Css
            },
            {
                path:'/javaScript',
                name: 'JavaScript',
                component: JavaScript
            },
            {
                path:'/accessibility',
                name: 'Accessibility',
                component: Accessibility
            },

        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router