<template>
  <div :class="[getCls('')]" @click="handleClick">
    <div v-if="title" :class="[getCls('title')]">
      <p>{{title}}</p>
      <p :class="[getCls('title-desc')]"
        v-if="describe">{{describe}}</p>
    </div>
    <div v-if="$slots.title"
      :class="[getCls('title')]">
      <slot></slot>
    </div>
    <div v-if="value"
      :class="[getCls('value')]" >
      <span>{{value}}</span>
    </div>
    <div v-if="$slots.value">
      <slot></slot>
    </div>
    <i v-if="isLink"
      :class="[getCls('right-icon'), 'iconfont', 'icon-right']"></i>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Cell`,

  mixins: [prefix],

  components: {},

  props: {
    title: String,
    describe: String,
    value: String,
    isLink: Boolean,
    to: String,
    url: String
  },

  data () {
    return {}
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClick (e) {
      const { to, url } = this
      if (to) {
        this.$router.push({ name: to })
      } else if (url) {
        window.location.href = url
      } else {
        this.$emit('click', e)
      }
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
