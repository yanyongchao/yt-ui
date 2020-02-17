import { importAll } from '@/untils/util'
import { jsFileReg } from '@/untils/constant'

const componentModules = importAll(
  require.context('@/components', true, /index\.js$/),
  jsFileReg
)

export default {
  install (Vue) {
    componentModules.forEach(componentModule => {
      Vue.use(componentModule.module)
    })
  }
}
