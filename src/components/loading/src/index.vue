<template>
  <transition name="fade">
    <div :class="[getCls('', type)]" v-show="show">
      <span :style="style">
        <i v-for="(item, index) in (type === 'spinner' ? 12 : 0)" :key="index" />
        <svg v-if="type === 'circular'" viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none"/>
        </svg>
      </span>
      <p v-if="text" :class="[getCls('text')]">{{text}}</p>
    </div>
  </transition>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Loading`,

  mixins: [prefix],

  components: {},

  props: {
    type: {
      type: String,
      default: 'spinner'
    },
    // the size of loading
    size: {
      type: String,
      default: ''
    },
    // the text of loading
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    style () {
      const style = {}
      if (this.size) {
        Object.assign(style, {
          width: this.size,
          height: this.size
        })
      }
      return style
    }
  },

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
