<template>
  <div class="layout">
    <yt-navbar :title="$route.meta.title"
      v-show="$route.meta.showNavbar"
      :fixed="true"
      left-text="返回"
      @click-left="handleClickRight"/>
    <div class="layout-content"
      :style="{ 'padding-top': $route.meta.showNavbar ? '44px' : 0 }">
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

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClickRight () {
      console.log('xxx')
      this.$router.back()
    }
  }
}
</script>

<style lang='scss' scoped>
  .layout-content {
    padding-top: 44px;
    // background-color: #fff;
  }
</style>
