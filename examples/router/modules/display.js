// 展示组件
const displayModules = [
  {
    path: '/load-more',
    name: 'loadMore',
    component: () => import(/* webpackChunkName: "load-more" */ '../../views/load-more'),
    meta: {
      title: 'LoadMore',
      showNavbar: true
    }
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import(/* webpackChunkName: "scroll" */ '../../views/scroll'),
    meta: {
      title: 'Scroll',
      showNavbar: true
    }
  },
  {
    path: '/index-list',
    name: 'index-list',
    component: () => import(/* webpackChunkName: "index-list" */ '../../views/index-list'),
    meta: {
      title: 'IndexList',
      showNavbar: true
    }
  },
  {
    path: '/scroll-nav',
    name: 'scroll-nav',
    component: () => import(/* webpackChunkName: "scroll-nav" */ '../../views/scroll-nav'),
    meta: {
      title: 'ScrollNav',
      showNavbar: true
    }
  }
]

export default displayModules
