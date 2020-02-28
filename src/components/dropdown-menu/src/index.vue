<template>
  <div :class="[getCls(''), 'yt-1px-top', 'yt-1px-bottom']">
    <div v-for="(item, index) in menus"
      :key="index"
      :class="[getCls('item'), {'active': getActiveClass(index)}]"
      @click="handleClick(index)">
      <div :class="[getCls('item-title')]">
        <div class="ellipsis">
          {{item}}
        </div>
        <i class="iconfont icon-triangle-down" v-show="!getActiveClass(index)"></i>
        <i class="iconfont icon-triangle-up" v-show="getActiveClass(index)"></i>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}DropdownMenu`,

  mixins: [prefix],

  data () {
    return {
      menus: []
    }
  },

  props: {

  },

  methods: {
    updateMenu () {
      this.menus = this.$children.map(i => i.displayTitle)
    },
    handleClick (index) {
      this.$children.forEach((item, idx) => {
        if (index !== idx) {
          item.show = false
          item.outShow = false
        } else {
          if (item.show) {
            item.show = false
          } else {
            item.outShow = true
            item.show = true
          }
        }
      })
    },
    getActiveClass (index) {
      return this.$children[index].show
    }
  },

  mounted () {
    const rect = this.$el.getBoundingClientRect()
    const distance = rect.height + rect.top
    // eslint-disable-next-line no-return-assign
    this.$children.forEach(child => child.distance = distance)
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
