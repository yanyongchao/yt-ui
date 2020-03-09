<template>
  <div class="demo-popup">
    <yt-group title="顶部弹出">
      <yt-button @click="handleClick('show1')">顶部弹出</yt-button>
    </yt-group>
    <yt-group title="右侧弹出">
      <yt-button @click="handleClick('show2')">右侧弹出</yt-button>
    </yt-group>
    <yt-group title="底部弹出">
      <yt-button @click="handleClick('show3')">底部弹出</yt-button>
    </yt-group>
    <yt-group title="左侧弹出">
      <yt-button @click="handleClick('show4')">左侧弹出</yt-button>
    </yt-group>
    <yt-popup v-model="show1" position="top">
      <div style="height: 200px;"></div>
    </yt-popup>
    <yt-popup v-model="show2" position="right">
      <div style="width: 200px;"></div>
    </yt-popup>
    <yt-popup v-model="show3" position="bottom">
      <div style="height: 200px;"></div>
    </yt-popup>
    <yt-popup v-model="show4" position="left">
      <div style="width: 200px;"></div>
    </yt-popup>
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
    handleClick (show) {
      this[show] = true
      setTimeout(() => {
        // this[show] = false
      }, 2000)
    }
  }
}
</script>

<style lang='scss' scoped>
.yt-popup {
  background-color: #fff;
}
</style>
