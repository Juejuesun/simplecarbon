import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Home from '../components/Home'
import HomePage from '../components/views/HomePage'
import PerCenter from '../components/views/PerCenter'
import ShopCenter from '../components/views/ShopCenter'
import PerHome from '../components/views/personalcenter/PerHome'
import Friend from '../components/views/personalcenter/Friend'
import City from '../components/views/personalcenter/City'
import Country from '../components/views/personalcenter/Country'
import CashChange from '../components/views/PlayMent/CashChange'
import Things from '../components/views/PlayMent/Things'
import Vouchers from '../components/views/PlayMent/Vouchers'
import ForRecord from '../components/views/PlayMent/ForRecord'
import Account from '../components/views/PlayMent/Account'
import LitterHoop from '../components/views/LitterHoop'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
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
        path: '/home/litterhoop',
        name: 'LitterHoop',
        component: LitterHoop
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
        component: ShopCenter,
        children: [
          {
            path: '/home/shopcenter',
            redirect: '/home/shopcenter/cashchange'
          },
          {
            path: '/home/shopcenter/cashchange',
            name: 'CashChange',
            component: CashChange
          },
          {
            path: '/home/shopcenter/things',
            name: 'Things',
            component: Things
          },
          {
            path: '/home/shopcenter/vouchers',
            name: 'Vouchers',
            component: Vouchers
          },
          {
            path: '/home/shopcenter/forrecord',
            name: 'ForRecord',
            component: ForRecord
          },
          {
            path: '/home/shopcenter/account',
            name: 'Account',
            component: Account
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash', 
  // base: '/mysmb/',
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next) => {
  //to要访问的路径
  //from代表从哪个路径跳转而来
  //next是一个函数，表示放行
  //next() 放行 next('/login) 强制跳转

  if(to.path === '/login') return next();
  if(to.path === '/signup') return next();
  if(to.path === '/home/homepage') return next();
  if(to.path === '/home/percenter/friend') return next();

  //获取token
  const tokenStr = window.localStorage.getItem('USERNAME');
  if(!tokenStr) return next('/login');
  next()
})

export default router
