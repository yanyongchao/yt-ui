import Row from './src/index.vue'

Row.install = function (Vue) {
  Vue.component(Row.name, Row)
}
export default Row
