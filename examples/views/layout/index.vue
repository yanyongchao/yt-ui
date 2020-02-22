<template>
  <div class="demo-layout">
    <yt-group title="左对齐">
      <yt-row justify="flex-start">
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-pink">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-blue">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-red">span: 6</div>
        </yt-col>
      </yt-row>
    </yt-group>
    <yt-group title="中对齐">
      <yt-row justify="center">
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-pink">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-blue">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-red">span: 6</div>
        </yt-col>
      </yt-row>
    </yt-group>
    <yt-group title="右对齐">
      <yt-row justify="flex-end">
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-pink">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-blue">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-red">span: 6</div>
        </yt-col>
      </yt-row>
    </yt-group>
    <yt-group title="居中对齐">
      <yt-row justify="center" align="center">
        <yt-col span="6">
          <div class="demo-layout-40 demo-layout-pink">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-blue">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-30 demo-layout-red">span: 6</div>
        </yt-col>
      </yt-row>
    </yt-group>
    <yt-group title="offset">
      <yt-row>
        <yt-col span="6">
          <div class="demo-layout-40 demo-layout-pink">span: 6</div>
        </yt-col>
        <yt-col span="6" offset="2">
          <div class="demo-layout-50 demo-layout-blue">span: 6</div>
        </yt-col>
        <yt-col span="6">
          <div class="demo-layout-30 demo-layout-red">span: 6</div>
        </yt-col>
      </yt-row>
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

  methods: {}
}
</script>

<style lang='scss' scoped>
.demo-layout {
  &-30 {
    height: 30px;
  }
  &-40 {
    height: 40px;
  }
  &-50 {
    height: 50px;
  }
  &-red {
    background-color: red;
  }
  &-blue {
    background-color: blue;
  }
  &-pink {
    background-color: pink;
  }
}
</style>
