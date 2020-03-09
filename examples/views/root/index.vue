<template>
  <div class="layout">
    <yt-navbar :title="$route.meta.title"
      v-show="$route.meta.showNavbar"
      :fixed="true"
      left-text="返回"
      @click-left="handleClickRight"/>
    <div class="layout-content"
      :class="{ 'show-navbar': $route.meta.showNavbar }">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {}
  },

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClickRight () {
      this.$router.back()
    }
  }
}
</script>

<style lang='scss' scoped>
  .yt-navbar-fixed {
    z-index: 1500;
  }
  .layout-content {
    padding-top: 0;
    &.show-navbar {
      padding-top: 44px;
    }
  }
</style>
