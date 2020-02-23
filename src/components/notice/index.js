import Notice from './src/index.vue'

Notice.install = function (Vue) {
  Vue.component(Notice.name, Notice)
}
export default Notice
