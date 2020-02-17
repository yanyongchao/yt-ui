import Group from './src/index.vue'

Group.install = function (Vue) {
  Vue.component(Group.name, Group)
}
export default Group
