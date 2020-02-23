<template>
  <div v-transfer-dom>
    <yt-overlay v-model="show"></yt-overlay>
    <transition name="bounce">
      <div :class="[getCls('')]" v-show="show">
        <div :class="[getCls('header')]">
          {{title}}
        </div>
        <div :class="[getCls('content')]">
          {{message}}
        </div>
        <div :class="[getCls('footer'), 'yt-1px-top']">
          <yt-button type="secondary"
            class="yt-1px-right"
            size="large"
            v-if="type === 'confirm'"
            @click="$emit('input', false)">{{cancelButtonText}}</yt-button>
          <yt-button type="plain"
            size="large"
            @click="handleConfirm">{{confirmButtonText}}</yt-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import Overlay from '@/components/overlay'
import transferDom from '@/directives/transfer-dom'
import Button from '@/components/button'

export default {
  name: `${PREFIX}Dialog`,

  mixins: [prefix],

  components: {
    [Overlay.name]: Overlay,
    [Button.name]: Button
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      validator (value) {
        return ['alert', 'confirm'].indexOf(value) > -1
      },
      default: 'alert'
    },
    title: String,
    message: String,
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    }
  },

  data () {
    return {
      show: this.value
    }
  },

  computed: {},

  watch: {
    value (newVal) {
      this.show = newVal
    }
  },

  directives: {
    'transfer-dom': transferDom
  },

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleConfirm () {
      this.$emit('confirm')
      this.$emit('input', false)
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
