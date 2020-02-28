<template>
  <div class="demo-overlay">
    <yt-group title="基础用法">
      <yt-button @click="handleClick">显示overlay</yt-button>
    </yt-group>
    <yt-overlay v-model="show"></yt-overlay>
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
      console.log('xx')
      setTimeout(() => {
        this.show = false
      }, 2000)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
