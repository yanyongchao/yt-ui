<template>
  <div :class="[getCls(''), `${PREFIX}-1px-right`, `${PREFIX}-1px-bottom`]"
    :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}GridItem`,

  mixins: [prefix],

  props: {
  },

  data () {
    return {
      PREFIX: PREFIX.toLowerCase()
    }
  },

  computed: {
    styleObject () {
      const column = this.$parent.column
      const styles = {
        'flex-basis': `${100 / column}%`
      }
      return styles
    }
  },

  created () {
    this.$parent.countColumn()
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
