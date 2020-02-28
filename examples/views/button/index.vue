<template>
  <div class="demo-button">
    <yt-group title="按钮尺寸">
      <div class="demo-button-row">
        <yt-button size="small">小型按钮</yt-button>
      </div>
      <yt-button size="large">主要按钮</yt-button>
    </yt-group>
    <yt-group title="朴素按钮">
      <yt-button size="large" type="plain">朴素按钮</yt-button>
    </yt-group>
    <yt-group title="次要按钮">
      <yt-button size="large" type="secondary">次要按钮</yt-button>
    </yt-group>
    <yt-group title="危险按钮">
      <yt-button size="large" type="danger">危险按钮</yt-button>
    </yt-group>
    <yt-group title="禁用按钮">
      <div class="demo-button-row">
        <yt-button size="large" type="primary" disabled>块级按钮</yt-button>
      </div>
      <div class="demo-button-row">
        <yt-button size="large" type="plain" disabled>朴素按钮</yt-button>
      </div>
      <yt-button size="large" type="secondary" disabled>次要按钮</yt-button>
    </yt-group>
    <yt-group title="请求按钮">
      <div class="demo-button-row">
        <yt-button size="large" type="primary" loading>块级按钮</yt-button>
      </div>
      <div class="demo-button-row">
        <yt-button size="large" type="plain" loading>朴素按钮</yt-button>
      </div>
      <yt-button size="large" type="secondary" loading>次要按钮</yt-button>
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
.demo-button {
  &-row {
    margin-bottom: 12px;
  }
}
</style>
