<template>
  <div class="demo-home">
    <div class="demo-home__title">
      <img src="../../assets/images/logo.jpg" alt="">
      <span>YTUI</span>
    </div>
    <h2 class="demo-home__desc">轻量、可靠的移动端 Vue 组件库</h2>
    <div class="demo-home-nav">
      <div class="demo-home-nav__title">基础组件</div>
      <div class="demo-home-nav__group">
        <router-link :to="{ name: 'button' }" class="demo-home-nav__block">Button</router-link>
      </div>
    </div>
    <div class="demo-home-nav">
      <div class="demo-home-nav__title">导航组件</div>
      <div class="demo-home-nav__group">
        <router-link :to="{ name: 'navbar' }" class="demo-home-nav__block">Navbar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {}
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

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
    margin-bottom: 40px;
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
