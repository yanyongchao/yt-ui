<template>
  <div :class="[getCls(''), `${PREFIX}-1px-top`, `${PREFIX}-1px-left`]">
    <div :class="[getCls('row')]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Grid`,

  mixins: [prefix],

  props: {
    col: {
      type: Number,
      default: 3
    }
  },

  data () {
    return {
      PREFIX: PREFIX.toLowerCase(),
      childrenSize: 0
    }
  },

  computed: {
    column () {
      return this.col || this.childrenSize
    }
  },

  methods: {
    countColumn () {
      this.childrenSize = this.$children.length
    }
  }

}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
