// 导航组价
const feedbackModules = [
  {
    path: '/loading',
    name: 'loading',
    component: () => import(/* webpackChunkName: "loading" */ '../../views/loading'),
    meta: {
      title: 'Loading',
      showNavbar: true
    }
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import(/* webpackChunkName: "popup" */ '../../views/popup'),
    meta: {
      title: 'Popup',
      showNavbar: true
    }
  },
  {
    path: '/action-sheet',
    name: 'actionSheet',
    component: () => import(/* webpackChunkName: "popup" */ '../../views/action-sheet'),
    meta: {
      title: 'ActionSheet',
      showNavbar: true
    }
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "dialog" */ '../../views/dialog'),
    meta: {
      title: 'Dialog',
      showNavbar: true
    }
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import(/* webpackChunkName: "toast" */ '../../views/toast'),
    meta: {
      title: 'Toast',
      showNavbar: true
    }
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import(/* webpackChunkName: "notice" */ '../../views/notice'),
    meta: {
      title: 'Notice',
      showNavbar: true
    }
  },
  {
    path: '/swiper-cell',
    name: 'swiperCell',
    component: () => import(/* webpackChunkName: "notice" */ '../../views/swiper-cell'),
    meta: {
      title: 'SwiperCell',
      showNavbar: true
    }
  }
]

export default feedbackModules
