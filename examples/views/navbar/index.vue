<template>
  <div class="demo-navbar">
    <div class="demo-navbar-block">
      <div class="demo-navbar__title">普通用法</div>
      <yt-navbar leftText="返回"
        title="主页"
        rightText="文本">
      </yt-navbar>
    </div>
    <div class="demo-navbar-block">
      <div class="demo-navbar__title">高级用法</div>
      <yt-navbar leftText="返回"
        title="主页">
        <span slot="right">slot文本</span>
      </yt-navbar>
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

  methods: {}
}
</script>

<style lang='scss' scoped>
.demo-navbar {
  &__title {
    padding: 32px 16px 16px 16px;
    color: #666;
    &:first-of-type {
      padding-top: 20px;
    }
  }
}
</style>
