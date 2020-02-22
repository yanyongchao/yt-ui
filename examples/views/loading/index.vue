<template>
  <div class="demo-loading">
    <yt-loading type="circular" text="加载中" :show="show"></yt-loading>
    <yt-group title="显示隐藏loading">
      <yt-button size="large" @click="handleClick">2秒后隐藏</yt-button>
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
      show: false
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClick () {
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
