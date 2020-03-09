import Vue from 'vue'
import VueRouter from 'vue-router'
import baseModules from './modules/base'
import navModules from './modules/nav'
import feedbackModules from './modules/feedback'
import displayModules from './modules/display'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "layout" */ '../views/root'),
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
      ...baseModules,
      ...navModules,
      ...feedbackModules,
      ...displayModules
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
