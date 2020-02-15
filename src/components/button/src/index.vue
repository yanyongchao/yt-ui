<template>
  <button :class="[getCls('', size, type), {
      'disabled': disabled || loading
    }]"
    :disabled="disabled">
    <span class="iconfont icon-left"></span>
    页面主按钮
  </button>
</template>
<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Button`,
  mixins: [prefix],
  props: {
    size: {
      type: String,
      default: 'large'
    },
    type: {
      type: String,
      default: 'primary'
    },
    loading: Boolean,
    disabled: Boolean,
    fetch: Function
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
