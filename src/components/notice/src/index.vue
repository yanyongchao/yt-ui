<template>
  <transition name="top">
    <div :class="[getCls('', type)]" v-show="show">
      {{message}}
    </div>
  </transition>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Notice`,

  mixins: [prefix],

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    }
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    showNotice () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, this.duration)
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
