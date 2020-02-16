<template>
    <div :class="[getCls(''), { [getCls('fixed')]: fixed }]">
      <div :class="[getCls('left-block')]" @click="$emit('click-left')">
        <div :class="getCls('left')">
          <slot name="left">
            <i class="iconfont icon-left" v-if="leftArrow"></i>
            <span :class="getCls('left-text')" v-if="leftText">{{leftText}}</span>
          </slot>
        </div>
      </div>
      <div :class="[getCls('middle')]">
        <slot name="middle">{{title}}</slot>
      </div>
      <div :class="[getCls('right-block')]">
        <div :class="[getCls('right')]">
          <slot name="right">
            <span :class="[getCls('right-text')]" v-if="rightText">{{rightText}}</span>
          </slot>
        </div>
      </div>
    </div>
</template>
<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Navbar`,
  mixins: [prefix],
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: {
      type: Boolean,
      default: true
    },
    fixed: Boolean
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
