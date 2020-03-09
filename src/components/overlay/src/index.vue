<template>
  <transition :name="animation ? 'fade' : ''">
    <div v-show="value"
      :class="[getCls('')]"
      @click="handleClick"
      @touchmove.stop.prevent="noop"
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
    },
    animation: {
      type: Boolean,
      default: true
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
    },
    noop () {
      // document.body.style.overflow = 'hidden'
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
