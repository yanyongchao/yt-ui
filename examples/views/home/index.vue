<template>
  <div class="demo-home">
    <div class="demo-home__title">
      <img src="../../assets/images/logo.jpg" alt="">
      <span>YTUI</span>
    </div>
    <h2 class="demo-home__desc"
      style="margin-bottom: 5px;">轻量、可靠的移动端 Vue 组件库</h2>
    <a class="demo-home__desc"
      href="https://github.com/yanyongchao/yt-ui"
      style="display: block;margin-bottom: 40px;">https://github.com/yanyongchao/yt-ui</a>
    <div class="demo-home-nav"
      v-for="item in list"
      :key="item.name">
      <div class="demo-home-nav__title">{{item.name}}</div>
      <div class="demo-home-nav__group"
        v-for="route in item.modules"
        :key="route.name">
        <router-link :to="{ name: route.name }"
          class="demo-home-nav__block">{{route.meta.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import baseModules from '../../router/modules/base'
import navModules from '../../router/modules/nav'
import feedbackModules from '../../router/modules/feedback'
import displayModules from '../../router/modules/display'

export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      list: [
        {
          name: '基础组件',
          modules: [
            ...baseModules
          ]
        },
        {
          name: '反馈组件',
          modules: [
            ...feedbackModules
          ]
        },
        {
          name: '展示组件',
          modules: [
            ...displayModules
          ]
        },
        {
          name: '导航组件',
          modules: [
            ...navModules
          ]
        }
      ]
    }
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {
  },

  destroyed () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
.demo-home {
  min-height: 100vh;
  padding: 44px 20px 20px 20px;
  background-color: #fff;
  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding-left: 16px;
    font-size: 32px;
    img {
      width: 32px;
      height: 32px;
    }
    span {
      margin-left: 16px;
      font-weight: 500;
    }
  }
  &__desc {
    // margin-bottom: 40px;
    padding-left: 16px;
    color: #999;
    font-size: 14px;
    font-weight: normal;
  }
  &-nav {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      margin-bottom: 8px;
      margin-left: 16px;
      color: #999;
      font-size: 14px;
    }
    &__group {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__block {
      display: flex;
      align-items: center;
      height: 40px;
      margin-bottom: 12px;
      padding-left: 20px;
      border-radius: 20px;
      background-color: #f7f8fa;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
