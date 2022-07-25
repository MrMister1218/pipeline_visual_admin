import VueRouter from 'vue-router'
import Login from '../view/Login'
import Home from '../view/Home'

const router = new VueRouter({
    routes: [
        {
            path:'/login',
            component:Login,
            name:'Login'
        },
        {
            path:'/home',
            component:Home,
            name:'Home'
        },
        {
            path:'/',
            redirect:Login
        }   
    ]
})
export default router