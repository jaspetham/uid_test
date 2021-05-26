import { createWebHistory, createRouter } from "vue-router";
import Login from '../components/Login.vue'
import Games from '../components/Games.vue' 
const routes = [
    {
        path:'/',
        name:'home',
        component: Login
    },
    {
        path:'/games',
        name:'games',
        component: Games
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router