<template>
  <div class="demo-toast">
    <yt-group title="文字提示">
      <yt-button size="large" @click="handleClick(1)">文字提示</yt-button>
    </yt-group>
    <yt-group title="成功提示">
      <yt-button size="large" @click="handleClick(2)">成功提示</yt-button>
    </yt-group>
    <yt-group title="失败提示">
      <yt-button size="large" @click="handleClick(3)">失败提示</yt-button>
    </yt-group>
    <yt-toast message="提示提示内容提示内容提示内容提示内容提示内容内容"
      ref="toast1"></yt-toast>
    <yt-toast message="报存成功"
      type="success"
      ref="toast2"></yt-toast>
    <yt-toast message="失败提示"
      type="fail"
      ref="toast3"></yt-toast>
  </div>
</template>

<script>
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data () { return {} },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClick (key) {
      this.$refs[`toast${key}`].showToast()
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
