import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import HomePage from '../components/views/HomePage'
import PerCenter from '../components/views/PerCenter'
import ShopCenter from '../components/views/ShopCenter'
import PerHome from '../components/views/personalcenter/PerHome'
import Friend from '../components/views/personalcenter/Friend'
import City from '../components/views/personalcenter/City'
import Country from '../components/views/personalcenter/Country'

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
    children: [
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
        component: PerCenter,
        children: [
          {
            path: '/home/percenter',
            redirect: '/home/percenter/perhome'
          },
          {
            path: '/home/percenter/perhome',
            name: 'PerHome',
            component: PerHome
          },
          {
            path: '/home/percenter/friend',
            name: 'Friend',
            component: Friend
          },
          {
            path: '/home/percenter/city',
            name: 'City',
            component: City
          },
          {
            path: '/home/percenter/country',
            name: 'Country',
            component: Country
          },
        ]
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
