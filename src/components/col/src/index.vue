<template>
  <component :is="tag" :class="[getCls('', span), {
      [getCls(`offset-${offset}`)]: offset
    }]">
    <slot></slot>
  </component>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Col`,

  mixins: [prefix],

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: [Number, String],
      required: true,
      validator (value) {
        return parseInt(value) >= 1 && parseInt(value) <= 24
      }
    },
    offset: {
      type: [Number, String],
      validator (value) {
        return parseInt(value) >= 1 && parseInt(value) <= 23
      }
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
