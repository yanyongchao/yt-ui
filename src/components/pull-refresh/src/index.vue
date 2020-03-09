<template>
  <div :class="[getCls('')]">
    <div :class="[getCls('track')]" ref="scrollEl"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      :style="styleObject">
      <div :class="[getCls('head')]" ref="head">
        <div v-if="state === 'pulling'"
          :class="[getCls('text')]">{{scrollY > scrollHeight ? '释放即可刷新...' : '下拉即可刷新...'}}</div>
        <yt-load-more :show="state === 'loading'" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import LoadMore from '@/components/load-more'
export default {
  name: `${PREFIX}PullRefresh`,

  mixins: [prefix],

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  components: {
    [LoadMore.name]: LoadMore
  },

  data () {
    return {
      state: 'normal', // normal pulling loading
      scrollEl: null,
      startTouch: null,
      scrollY: 0,
      scrollHeight: 0
    }
  },

  computed: {
    styleObject () {
      return {
        transform: `translate3d(0, ${this.scrollY}px, 0)`
      }
    },
    untouchable () {
      return this.state === 'loading'
    }
  },

  watch: {
    value (newVal) {
      if (!newVal) {
        this.scrollY = 0
        this.state = 'normal'
      }
    }
  },

  mounted () {
    this.scrollEl = this.$refs.scrollEl
    this.scrollHeight = this.$refs.head.offsetHeight
  },

  destroyed () {},

  methods: {
    onTouchStart (e) {
      this.startTouch = e.targetTouches[0]
      this.scrollEl.style.transitionDuration = '0s'
    },
    onTouchMove (e) {
      if (this.untouchable) return
      const touch = e.targetTouches[0]
      this.deltaY = touch.clientY - this.startTouch.clientY
      if (this.deltaY > 0) {
        this.scrollY = this.deltaY
        this.state = 'pulling'
      }
    },
    onTouchEnd (e) {
      if (this.untouchable) return
      this.scrollEl.style.transitionDuration = '0.3s'
      if (this.scrollY <= this.scrollHeight) {
        this.scrollY = 0
        this.state = 'normal'
      } else if (this.scrollY > this.scrollHeight) {
        this.scrollY = this.scrollHeight
        this.state = 'loading'
        this.$emit('refresh')
      }
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
