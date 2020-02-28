<template>
  <transition name="top">
    <div :class="[getCls('', type)]"
      v-show="show"
      v-transfer-dom>
      {{message}}
    </div>
  </transition>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import transferDom from '@/directives/transfer-dom'

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

  directives: {
    'transfer-dom': transferDom
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
