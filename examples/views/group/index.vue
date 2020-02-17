<template>
  <div class="demo-group">
    <yt-group title="基础用法">
      <yt-button size="normal">按钮</yt-button>
    </yt-group>
    <yt-group>
      <div slot="title">自定义标题</div>
      <yt-button size="normal">按钮</yt-button>
    </yt-group>
    <yt-group title="无padding内容" noPaddingContent>
      <yt-button size="normal">按钮</yt-button>
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
.demo-group {
  &__title {
    padding: 32px 16px 16px 16px;
    color: #666;
    &:first-of-type {
      padding-top: 20px;
    }
  }
}
</style>
