<template>
  <div class="demo-layout">
    <yt-group title="左对齐">
      <yt-row justify="flex-start">
        <yt-col span="6">
          <div class="demo-layout-50 demo-layout-primary">span: 6</div>
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
          <div class="demo-layout-50 demo-layout-primary">span: 6</div>
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
          <div class="demo-layout-50 demo-layout-primary">span: 6</div>
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
          <div class="demo-layout-40 demo-layout-primary">span: 6</div>
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
          <div class="demo-layout-40 demo-layout-primary">span: 6</div>
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
    height: 20px;
  }
  &-40 {
    height: 30px;
  }
  &-50 {
    height: 40px;
  }
  &-red {
    background-color: #e94f4f;
  }
  &-blue {
    background-color: #66c6f2;
  }
  &-primary {
    background-color: #108ee9;
  }
}
</style>
