<template>
  <div class="demo-button">
    <div class="demo-button-block">
      <div class="demo-button__title">按钮尺寸</div>
      <div class="demo-button-row">
        <yt-button>普通按钮</yt-button>
      </div>
      <yt-button size="large">块级按钮</yt-button>
    </div>
    <div class="demo-button-block">
      <div class="demo-button__title">朴素按钮</div>
      <yt-button size="large" type="plain">朴素按钮</yt-button>
    </div>
    <div class="demo-button-block">
      <div class="demo-button__title">次要按钮</div>
      <yt-button size="large" type="secondary">次要按钮</yt-button>
    </div>
    <div class="demo-button-block">
      <div class="demo-button__title">禁用按钮</div>
      <div class="demo-button-row">
        <yt-button size="large" type="primary" disabled>次要按钮</yt-button>
      </div>
      <div class="demo-button-row">
        <yt-button size="large" type="plain" disabled>次要按钮</yt-button>
      </div>
      <yt-button size="large" type="secondary" disabled>次要按钮</yt-button>
    </div>
    <div class="demo-button-block">
      <div class="demo-button__title">请求按钮</div>
      <div class="demo-button-row">
        <yt-button size="large" type="primary" loading>次要按钮</yt-button>
      </div>
      <div class="demo-button-row">
        <yt-button size="large" type="plain" loading>次要按钮</yt-button>
      </div>
      <yt-button size="large" type="secondary" loading>次要按钮</yt-button>
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
.demo-button {
  &-block {
    padding: 0 16px;
    &:last-child {
      margin-bottom: 12px;
    }
  }
  &-row {
    margin-bottom: 12px;
  }
  &__title {
    padding: 32px 16px 16px 0;
    color: #666;
    &:first-of-type {
      padding-top: 20px;
    }
  }
}
</style>
