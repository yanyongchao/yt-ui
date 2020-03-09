<template>
  <div :class="[getCls('')]">
    <yt-scroll :options="scrolloptions"
      ref="scroll"
      @scroll="onScroll">
      <div :class="[getCls('title')]" ref="title">我是标题</div>
      <yt-group v-for="data in list"
        :key="data.name"
        :title="data.name">
        <yt-cell v-for="item in data.items"
          :key="item.value"
          :title="item.value"></yt-cell>
      </yt-group>
    </yt-scroll>
    <div :class="[getCls('list-nav')]">
      <div v-for="(item, index) in shortcutList"
        :key="index"
        :class="[getCls('list-nav-item'), {'active': index === currentIndex}]"
        @click="handleClickNav(index)">
        <p>{{item}}</p>
      </div>
    </div>
    <div ref="fixed"
      v-show="fixedTitle"
      :class="[getCls('fix-title')]">{{fixedTitle}}
    </div>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import Scroll from '@/components/scroll'
import Group from '@/components/group'
import Cell from '@/components/cell'
export default {
  name: `${PREFIX}IndexList`,

  mixins: [prefix],

  components: {
    [Scroll.name]: Scroll,
    [Group.name]: Group,
    [Cell.name]: Cell
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      scrolloptions: {
        probeType: 3,
        bounce: {
          top: false,
          bottom: false,
          left: false,
          right: false
        }
      },
      groupList: [],
      scrollY: 0,
      currentIndex: 0,
      diff: -1,
      titleHeight: 0
    }
  },

  computed: {
    fixedTitle () {
      return this.scrollY <= -this.titleHeight && this.list[this.currentIndex] ? this.list[this.currentIndex].name : ''
    },
    shortcutList () {
      return this.list.map((group) => {
        return group ? group.name.substr(0, 1) : ''
      })
    }
  },
  watch: {
    scrollY (newY) {
      const listHeight = this.listHeight
      for (let i = 0; i < listHeight.length - 1; i++) {
        const height1 = listHeight[i]
        const height2 = listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          this.diff = height2 + newY
          return
        }
      }
    },
    diff (newVal) {
      const fixedTop = (newVal > 0 && newVal < this.subTitleHeight) ? newVal - this.subTitleHeight : 0
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
    },
    list () {
      this.$nextTick(() => {
        this.caculateTitleHeight()
        this.calculateHeight()
      })
    }
  },
  mounted () {
    this.caculateTitleHeight()
    this.calculateHeight()
  },
  methods: {
    calculateHeight () {
      this.groupList = this.$el.getElementsByClassName('yt-group')
      const subTitleEl = this.$el.getElementsByClassName('yt-group-title')[0]
      this.subTitleHeight = subTitleEl ? subTitleEl.offsetHeight : 0
      this.listHeight = []
      let height = this.titleHeight
      this.listHeight.push(height)
      for (let i = 0; i < this.groupList.length; i++) {
        const item = this.groupList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    caculateTitleHeight () {
      this.titleHeight = this.$refs.title.offsetHeight
    },
    onScroll (pos) {
      this.scrollY = pos.y
    },
    handleClickNav (index) {
      this.$refs.scroll.scrollToElement(this.groupList[index], 300)
      this.scrollY = this.$refs.scroll.scroll.y
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
