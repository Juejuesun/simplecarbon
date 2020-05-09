import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import HomePage from '../components/views/HomePage'
import PerCenter from '../components/views/PerCenter'
import ShopCenter from '../components/views/ShopCenter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children : [
      {
        path: '/home',
        redirect: '/home/homepage'
      },
      {
        path: '/home/homepage',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/home/percenter',
        name: 'PerCenter',
        component: PerCenter
      },
      {
        path: '/home/shopcenter',
        name: 'ShopCenter',
        component: ShopCenter
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
