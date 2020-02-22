<template>
  <div class="demo-navbar">
    <yt-group title="普通用法">
      <yt-navbar leftText="返回"
        title="主页"
        rightText="文本">
      </yt-navbar>
    </yt-group>
    <yt-group title="高级用法">
      <yt-navbar leftText="返回"
        title="主页">
        <span slot="right">slot文本</span>
      </yt-navbar>
    </yt-group>
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
