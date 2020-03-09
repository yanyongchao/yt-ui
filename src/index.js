import { importAll } from '@/untils/util'
import { jsFileReg } from '@/untils/constant'
// import

const componentModules = importAll(
  require.context('@/components', true, /index\.js$/),
  jsFileReg
)

const pluginModules = importAll(
  require.context('@/plugins', true, /index\.js$/),
  jsFileReg
)

export default {
  install (Vue) {
    componentModules.forEach(componentModule => {
      Vue.use(componentModule.module)
    })
    pluginModules.forEach(pluginModule => {
      Vue.use(pluginModule.module)
    })
  }
}
