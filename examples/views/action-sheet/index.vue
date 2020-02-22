<template>
  <div class="demo-action-sheet">
    <yt-group title="基础用法">
      <yt-button size="large" @click="handleClick('show1')">选择</yt-button>
    </yt-group>
    <yt-action-sheet v-model="show1"
      :options="options"
      @select="handleSelect"></yt-action-sheet>
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
      options: [
        {
          value: '1',
          label: '选项一',
          disabled: true
        },
        {
          value: '2',
          label: '选项二'
        }
      ]
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

    handleSelect (val) {
      console.log(val)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
