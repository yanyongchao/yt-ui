<template>
  <component :is="tag"
    :class="[getCls(''), {
      [getCls(`align-${align}`)]: align,
      [getCls(`justify-${justify}`)]: justify
    }]">
    <slot></slot>
  </component>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Row`,

  mixins: [prefix],

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    align: String,
    justify: String
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
