<template>
  <div class="demo-swiper-cell">
    <yt-group title="基础用法">
      <yt-swiper-cell title="基础用法"
        value="左滑删除"
        @collection="handleCollection"
        @delete="handleDelete"></yt-swiper-cell>
    </yt-group>
    <yt-group title="slot用法">
      <yt-swiper-cell
        @collection="handleCollection"
        @delete="handleDelete">
        <div class="demo-slot">slot用法</div>
      </yt-swiper-cell>
    </yt-group>
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
    handleDelete () {
      console.log('handleDelete')
    },
    handleCollection () {
      console.log('handleCollection')
    }
  }
}
</script>

<style lang='scss' scoped>
.demo-slot {
  height: 40px;
  background-color: pink;
}
</style>
