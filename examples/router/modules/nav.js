// 导航组价
const navModules = [
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import(/* webpackChunkName: "navbar" */ '../../views/navbar'),
    meta: {
      title: 'Navbar',
      showNavbar: true
    }
  }
]

export default navModules
