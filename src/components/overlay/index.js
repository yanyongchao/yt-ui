import Overlay from './src/index.vue'

Overlay.install = function (Vue) {
  Vue.component(Overlay.name, Overlay)
}
export default Overlay
