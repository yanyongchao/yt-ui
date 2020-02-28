<template>
  <div :class="[getCls('')]"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd">
    <div :class="[getCls('wrapper')]"
      ref="scrollEl"
      :style="styleObject">
      <slot>
        <yt-cell :title="title" :value="value"></yt-cell>
      </slot>
      <div :class="[getCls('right')]" ref="right">
        <yt-button size="small" @click="$emit('delete')">删除</yt-button>
        <yt-button type="plain" size="small" @click="$emit('collection')">收藏</yt-button>
      </div>
    </div>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import Cell from '@/components/cell'
export default {
  name: `${PREFIX}SwiperCell`,

  mixins: [prefix],

  props: {
    title: String,
    value: String
  },

  components: {
    [Cell.name]: Cell
  },

  data () {
    return {
      scrollEl: null,
      scrollX: 0,
      startTouch: null,
      scrollWidth: 0,
      status: 'normal'
    }
  },

  computed: {
    styleObject () {
      return {
        transform: `translate3d(${this.scrollX}px, 0, 0)`
      }
    }
  },

  mounted () {
    this.scrollEl = this.$refs.scrollEl
    this.scrollWidth = this.$refs.right.offsetWidth
  },

  methods: {
    onTouchStart (e) {
      this.startTouch = e.targetTouches[0]
      this.scrollEl.style.transitionDuration = '0s'
    },
    onTouchMove (e) {
      const touch = e.targetTouches[0]
      this.deltaX = touch.clientX - this.startTouch.clientX
      if (this.deltaX > 0 && this.status === 'normal') return
      if (this.deltaX < 0 && this.status === 'left') return
      if (this.deltaX < 0) {
        this.scrollX = this.deltaX
      } else {
        this.scrollX = -this.scrollWidth + Math.abs(this.deltaX)
      }
    },
    onTouchEnd () {
      this.scrollEl.style.transitionDuration = '0.3s'
      if (this.deltaX <= -10 && this.status === 'normal') {
        this.scrollX = -this.scrollWidth
        this.status = 'left'
      } else if (this.deltaX > 10 && this.status === 'left') {
        this.scrollX = 0
        this.status = 'normal'
      } else {
        if (this.status === 'normal') {
          this.scrollX = 0
        } else {
          this.scrollX = -this.scrollWidth
        }
      }
      this.startTouch = null
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
