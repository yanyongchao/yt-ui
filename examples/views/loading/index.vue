<template>
  <div class="demo-loading">
    <yt-loading :type="type" text="加载中" :show="show"></yt-loading>
    <yt-group title="circular-loading">
      <yt-button size="large" @click="handleClick('circular')">2秒后隐藏</yt-button>
    </yt-group>
    <yt-group title="spinner-loading">
      <yt-button size="large" @click="handleClick('spinner')">2秒后隐藏</yt-button>
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
    return {
      show: false,
      type: ''
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClick (type) {
      this.type = type
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 2000)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
