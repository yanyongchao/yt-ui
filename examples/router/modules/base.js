// 基础组价
const baseModules = [
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '../../views/button'),
    meta: {
      title: 'Button',
      showNavbar: true
    }
  },
  {
    path: '/group',
    name: 'group',
    component: () => import(/* webpackChunkName: "group" */ '../../views/group'),
    meta: {
      title: 'Group',
      showNavbar: true
    }
  },
  {
    path: '/cell',
    name: 'cell',
    component: () => import(/* webpackChunkName: "cell" */ '../../views/cell'),
    meta: {
      title: 'Cell',
      showNavbar: true
    }
  }
]

export default baseModules
