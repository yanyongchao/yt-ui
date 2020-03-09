// 导航组价
const feedbackModules = [
  {
    path: '/overlay',
    name: 'overlay',
    component: () => import(/* webpackChunkName: "overlay" */ '../../views/overlay'),
    meta: {
      title: 'Overlay',
      showNavbar: true
    }
  },
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
    component: () => import(/* webpackChunkName: "swiper-cell" */ '../../views/swiper-cell'),
    meta: {
      title: 'SwiperCell',
      showNavbar: true
    }
  },
  {
    path: '/dropdown-menu',
    name: 'dropdownMenu',
    component: () => import(/* webpackChunkName: "dropdown-menu" */ '../../views/dropdown-menu'),
    meta: {
      title: 'DropdownMenu',
      showNavbar: true
    }
  },
  {
    path: '/pull-refresh',
    name: 'pullRefresh',
    component: () => import(/* webpackChunkName: "pull-refresh" */ '../../views/pull-refresh'),
    meta: {
      title: 'PullRefresh',
      showNavbar: true
    }
  }
]

export default feedbackModules
