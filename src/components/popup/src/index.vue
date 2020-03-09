<template>
  <transition :name="position">
    <div v-show="show"
      :class="[getCls('', position)]"
      v-transfer-dom>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import Overlay from '@/components/overlay'
import transferDom from '@/directives/transfer-dom'

export default {
  name: `${PREFIX}Popup`,

  mixins: [prefix],

  components: {
    [Overlay.name]: Overlay
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      validator (value) {
        return ['top', 'bottom', 'center', 'left', 'right'].indexOf(value) > -1
      },
      default: 'bottom'
    },
    overlayOpacity: {
      validator (val) {
        return /^([0]|[1-9]\d*)?(\.\d*)?$/.test(val)
      },
      default: 0.6
    }
  },

  data () {
    return {
      show: this.value
    }
  },

  computed: {
  },

  watch: {
    value: {
      handler (newVal) {
        this.show = newVal
        if (newVal) {
          this.$overlay.show({
            opacity: this.overlayOpacity,
            onClick: () => {
              this.$emit('click-overlay')
              this.$emit('input', false)
            }
          })
        } else {
          this.$overlay.hide()
        }
      },
      immediate: true
    }
  },

  directives: {
    'transfer-dom': transferDom
  },

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    handleClickOverlay () {
      this.$emit('click-overlay')
      this.$emit('input', false)
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>
