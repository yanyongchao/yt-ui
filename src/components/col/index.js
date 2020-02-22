import Col from './src/index.vue'

Col.install = function (Vue) {
  Vue.component(Col.name, Col)
}
export default Col
