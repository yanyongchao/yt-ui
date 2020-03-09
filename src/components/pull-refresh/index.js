import PullRefresh from './src/index.vue'

PullRefresh.install = function (Vue) {
  Vue.component(PullRefresh.name, PullRefresh)
}
export default PullRefresh
