<template>
  <div :class="[getCls('')]" :style="styles" v-show="outShow">
    <transition name="top">
      <div :class="[getCls('content')]"
        ref="content"
        v-show="show">
        <div :class="[getCls('clickable')]"
          v-for="(item, index) in options"
          :key="index"
          @click="handleSelect(item)">
          <div :class="[getCls('title')]">{{item.text}}</div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div :class="[getCls('overlay')]"
        v-show="show" @click="handleClickOverlay"></div>
    </transition>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}DropdownItem`,

  mixins: [prefix],

  props: {
    value: [Number, String],
    options: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      distance: 0,
      contentHeight: 0,
      show: false,
      outShow: false
    }
  },

  computed: {
    displayTitle () {
      return this.options.find(i => i.value === this.value).text
    },
    styles () {
      const styleObj = {
        top: `${this.distance}px`
      }
      if (this.show) {
        Object.assign(styleObj, { 'pointer-events': 'auto' })
      } else {
        Object.assign(styleObj, { 'pointer-events': 'none' })
      }
      return styleObj
    }
  },

  watch: {
    value () {
      this.$parent.updateMenu()
    }
  },

  created () {
    this.$parent.updateMenu()
  },

  mounted () {
    this.contentHeight = this.$refs.content.offsetHeight
  },

  /**
   * @func 组件销毁的时候重置组件结构
   */
  destroyed () {
    this.$parent.updateMenu()
  },

  methods: {
    handleClickOverlay () {
      this.show = false
    },
    handleSelect (item) {
      this.$emit('input', item.value)
      this.$emit('change', item.value)
      this.show = false
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
