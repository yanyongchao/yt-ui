<template>
  <div class="demo-group">
    <yt-group title="基础用法">
      <yt-button size="small">按钮</yt-button>
    </yt-group>
    <yt-group>
      <div slot="title">自定义标题</div>
      <yt-button size="small">按钮</yt-button>
    </yt-group>
    <yt-group title="无padding内容" noPaddingContent>
      <yt-button size="small">按钮</yt-button>
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
</style>
