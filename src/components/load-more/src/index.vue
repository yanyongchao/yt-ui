<template>
  <div :class="[getCls('', type)]" v-show="show">
    <span :style="style" :class="[getCls('loading')]">
      <i v-for="(item, index) in (type === 'spinner' ? 12 : 0)" :key="index" />
      <svg v-if="type === 'circular'" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"/>
      </svg>
    </span>
    <p v-if="text" :class="[getCls('text')]">{{text}}</p>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}LoadMore`,

  mixins: [prefix],

  props: {
    type: {
      type: String,
      default: 'circular'
    },
    // the size of loading
    size: {
      type: [Number, String],
      default: 22
    },
    // the text of loading
    text: {
      type: String,
      default: '加载中...'
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
          width: this.size + 'px',
          height: this.size + 'px'
        })
      }
      return style
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
