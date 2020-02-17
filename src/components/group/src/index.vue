<template>
  <div :class="[getCls(''), {'no-padding-content': noPaddingContent}]">
    <div :class="[getCls('title')]" name="title">
      <slot name="title">
        <span>{{title}}</span>
      </slot>
    </div>
    <div :class="[getCls('content')]" v-if="$slots.default">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Group`,

  mixins: [prefix],

  props: {
    title: String,
    noPaddingContent: Boolean
  }
}
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
