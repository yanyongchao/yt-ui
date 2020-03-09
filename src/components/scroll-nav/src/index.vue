<template>
  <div :class="[getCls('')]">
    <yt-scroll direction="horizontal"
      ref="scroll">
      <div :class="[getCls('list')]" ref="list">
        <div :class="[getCls('item'), { 'active': item === value }]"
          v-for="(item, index) in list"
          @click="handleClick(item)"
          :key="index">{{item}}</div>
      </div>
    </yt-scroll>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import Scroll from '@/components/scroll'

export default {
  name: `${PREFIX}ScrollNav`,

  mixins: [prefix],

  props: {
    list: {
      type: Array,
      default: () => []
    },
    value: String
  },

  components: {
    [Scroll.name]: Scroll
  },

  methods: {
    handleClick (item) {
      this.$emit('input', item)
      this.$nextTick(() => {
        this.adjust()
      })
    },
    adjust () {
      const viewportSize = this.$refs.scroll.$el.offsetWidth
      const middleTranslate = viewportSize / 2
      const itemsEle = this.$refs.list
      const scrollerSize = itemsEle.offsetWidth
      const items = itemsEle.children
      const minTranslate = viewportSize - scrollerSize
      let size = 0

      this.list.every((item, index) => {
        if (item === this.value) {
          size += items[index].offsetWidth / 2
          return false
        }
        size += items[index].offsetWidth
        return true
      })

      const translate = middleTranslate - size

      if (translate < minTranslate) {
        this.$refs.scroll.scrollTo(minTranslate, 0, 300)
      } else if (translate < 0 && translate > minTranslate) {
        this.$refs.scroll.scrollTo(translate, 0, 300)
      } else {
        this.$refs.scroll.scrollTo(0, 0, 300)
      }
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
