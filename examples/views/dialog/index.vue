<template>
  <div class="demo-dialog">
    <yt-group title="alert">
      <yt-button size="large"
        @click="handleClick('show1')">消息提示</yt-button>
    </yt-group>
    <yt-group title="confirm">
      <yt-button size="large"
        @click="handleClick('show2')">确认弹窗</yt-button>
    </yt-group>
    <yt-dialog v-model="show1"
      title="标题"
      message="代码是写出来给人看的，附带能在机器上运行"
      @confirm="handleConfirm"
      confirmButtonText="我知道了"></yt-dialog>
    <yt-dialog v-model="show2"
      title="标题"
      type="confirm"
      message="代码是写出来给人看的，附带能在机器上运行"
      @confirm="handleConfirm"></yt-dialog>
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
      show1: false,
      show2: false
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClick (show) {
      this[show] = true
    },
    handleConfirm () {
      console.log('confirm')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
