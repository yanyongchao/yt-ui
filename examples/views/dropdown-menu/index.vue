<template>
  <div class="demo-dropdown-menu">
    <yt-dropdown-menu>
      <yt-dropdown-item v-model="value1"
        :options="option1"></yt-dropdown-item>
      <yt-dropdown-item v-model="value2"
        @change="handleChange"
        :options="option2"></yt-dropdown-item>
    </yt-dropdown-menu>
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
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
        { text: '活动商品', value: 4 },
        { text: '活动商品', value: 5 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '好评排序', value: 'c' },
        { text: '好评排序', value: 'd' },
        { text: '好评排序', value: 'e' }
      ]
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
