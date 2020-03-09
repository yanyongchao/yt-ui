<template>
  <div class="demo-pull-refresh">
    <yt-pull-refresh v-model="loading"
      @refresh="onRefresh">
      <div>刷新次数{{refreshCount}}</div>
    </yt-pull-refresh>
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
      loading: false,
      refreshCount: 0
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    onRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.refreshCount++
      }, 2000)
    }
  }
}
</script>

<style lang='scss' scoped>
 /deep/ .yt-pull-refresh {
   height: calc(100vh - 44px);
   overflow: hidden;
 }
</style>
