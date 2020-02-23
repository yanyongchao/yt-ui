<template>
  <transition name="fade">
    <div :class="[getCls('')]"
      v-show="show"
      v-transfer-dom>
      <div :class="[getCls(type, 'content')]">
        <i class="iconfont icon-success"
          v-if="type === 'success'"></i>
        <i class="iconfont icon-fail"
          v-if="type === 'fail'"></i>
        {{message}}
      </div>
    </div>
  </transition>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import transferDom from '@/directives/transfer-dom'

export default {
  name: `${PREFIX}Toast`,

  mixins: [prefix],

  props: {
    type: {
      validator (value) {
        return ['text', 'success', 'fail'].indexOf(value) > -1
      },
      default: 'text'
    },
    message: String,
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
    showToast () {
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
