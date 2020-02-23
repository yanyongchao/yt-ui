<template>
  <div class="demo-notice">
    <yt-group title="基础用法">
      <yt-button size="large"
        @click="handleClick('1')">通知</yt-button>
    </yt-group>
    <yt-group title="成功通知">
      <yt-button size="large"
        @click="handleClick('2')">成功通知</yt-button>
    </yt-group>
    <yt-group title="失败用法">
      <yt-button size="large"
        @click="handleClick('3')">失败用法</yt-button>
    </yt-group>
    <yt-group title="警告用法">
      <yt-button size="large"
        @click="handleClick('4')">警告用法</yt-button>
    </yt-group>
    <yt-notice ref="show1"
      message="通知消息"></yt-notice>
    <yt-notice ref="show2"
      type="success"
      message="通知消息"></yt-notice>
    <yt-notice ref="show3"
      type="danger"
      message="通知消息"></yt-notice>
    <yt-notice ref="show4"
      type="warning"
      message="通知消息"></yt-notice>
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
      show2: false,
      show3: false,
      show4: false
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClick (val) {
      this.$refs[`show${val}`].showNotice()
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
