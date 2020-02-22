import Grid from './src/index.vue'

Grid.install = function (Vue) {
  Vue.component(Grid.name, Grid)
}
export default Grid
