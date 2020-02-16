import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home'),
        meta: {
          title: '主页',
          showNavbar: false
        }
      },
      {
        path: '/button',
        name: 'button',
        component: () => import(/* webpackChunkName: "button" */ '../views/button'),
        meta: {
          title: 'Button',
          showNavbar: true
        }
      },
      {
        path: '/navbar',
        name: 'navbar',
        component: () => import(/* webpackChunkName: "navbar" */ '../views/navbar'),
        meta: {
          title: 'Navbar',
          showNavbar: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
