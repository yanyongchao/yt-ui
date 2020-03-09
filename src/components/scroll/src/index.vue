<template>
  <div :class="getCls('')"
    ref="scroll">
    <div :class="getCls('wrapper')" :style="scrollStyle">
      <div :class="[getCls('pull-down')]" v-if="pullDownRefresh">
        <div v-if="beforePullDown"
          :class="[getCls('pull-down-text')]">{{scrollY > 44 ? '释放即可刷新...' : '下拉即可刷新...'}}</div>
        <yt-load-more :show="isPullingDown" />
      </div>
      <slot></slot>
      <div :class="[getCls('pull-up')]" v-if="pullUpLoad">
        <yt-load-more :show="isPullUpLoad" />
      </div>
    </div>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import LoadMore from '@/components/load-more'
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'

BScroll.use(PullDown)
BScroll.use(Pullup)

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
const TIME_BOUNCE = 800

const DEFAULT_OPTIONS = {
  observeDOM: true,
  click: true,
  probeType: 1,
  scrollbar: false,
  pullDownRefresh: false,
  pullUpLoad: false
}

export default {
  name: `${PREFIX}Scroll`,

  mixins: [prefix],

  props: {
    direction: {
      validator (value) {
        return [DIRECTION_V, DIRECTION_H].indexOf(value) > -1
      },
      default: DIRECTION_V
    },
    options: {
      type: Object,
      default: () => {}
    }
  },

  components: {
    [LoadMore.name]: LoadMore
  },

  data () {
    return {
      beforePullDown: true, // 没有显示下拉加载
      isPullingDown: false, // 显示下拉加载laoding
      pullDownStop: 44, // 下拉loading的位置
      scrollY: 0, // 下拉的距离
      isPullUpLoad: false
    }
  },

  computed: {
    scrollStyle () {
      let style = {}
      if (this.direction === DIRECTION_H) {
        style = {
          display: 'inline-block',
          'white-space': 'nowrap',
          'vertical-align': 'top'
        }
      }
      return style
    },
    pullDownRefresh () {
      let pullDownRefresh = (this.options && this.options.pullDownRefresh) || false
      if (!pullDownRefresh) {
        return pullDownRefresh
      }
      if (pullDownRefresh === true) {
        pullDownRefresh = {}
      }
      return Object.assign({ stop: this.pullDownStop }, pullDownRefresh)
    },
    pullUpLoad () {
      return this.options && this.options.pullUpLoad
    }
  },

  mounted () {
    this.init()
  },
  methods: {
    init () {
      const options = Object.assign({}, DEFAULT_OPTIONS, {
        scrollY: this.direction === DIRECTION_V,
        scrollX: this.direction === DIRECTION_H
      }, this.options)
      this.scroll = new BScroll(this.$refs.scroll, options)
      if (this.pullDownRefresh) {
        this.scroll.on('pullingDown', this.pullingDownHandler)
      }
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', this.pullingUpHandler)
      }
      this.scroll.on('scroll', this.scrollHandle)
    },
    scrollHandle (pos) {
      this.scrollY = Math.max(0, pos.y)
      this.$emit('scroll', pos)
    },
    pullingDownHandler () {
      this.beforePullDown = false
      this.isPullingDown = true
      this.scroll.disable()
      this.$emit('pulling-down')
    },
    finishPullDown () {
      this.scroll.enable()
      this.isPullingDown = false
      this.scroll.finishPullDown()
      // finishPullDown收起是有动画的，要等这个动画结束
      setTimeout(() => {
        this.beforePullDown = true
        this.scroll.refresh()
      }, this.options.bounceTime || TIME_BOUNCE)
    },
    pullingUpHandler () {
      this.isPullUpLoad = true
      this.$emit('pulling-up')
    },
    finishPullUp () {
      this.scroll.finishPullUp()
      this.scroll.refresh()
      this.isPullUpLoad = false
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
