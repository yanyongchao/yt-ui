<template>
  <div class="demo-load-more">
    <yt-group title="circular loadmore">
      <yt-button @click="handleClick('circular')">2s后隐藏</yt-button>
    </yt-group>
    <yt-group title="spinner loadmore">
      <yt-button @click="handleClick('spinner')">2s后隐藏</yt-button>
    </yt-group>
    <yt-load-more :type="type"
      :show="show"></yt-load-more>
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
