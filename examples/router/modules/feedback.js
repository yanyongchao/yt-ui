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
  }
]

export default feedbackModules
