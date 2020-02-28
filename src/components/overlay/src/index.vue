<template>
  <transition name="fade">
    <div v-show="value"
      :class="[getCls('')]"
      @click="handleClick"
      :style="styles"></div>
  </transition>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Overlay`,

  mixins: [prefix],

  props: {
    value: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 1500
    },
    opacity: {
      type: Number,
      default: 0.6
    }
  },
  computed: {
    styles () {
      const style = { 'z-index': this.zindex }
      if (this.value) {
        style.opacity = this.opacity
      }
      return style
    }
  },

  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
