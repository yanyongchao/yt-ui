<template>
  <yt-popup :class="[getCls('')]"
    v-model="show"
    @click-overlay="handleClickOverlay"
    position="bottom">
    <ul :class="[getCls('content')]">
      <li v-for="item in options"
        :key="item.value"
        :class="item.disabled ? 'disabled' : ''"
        @click="handleSelect(item)">{{item.label}}</li>
      <li :class="[getCls('cancel')]"
        @click="$emit('input', false)">取消</li>
    </ul>
  </yt-popup>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'
import Popup from '@/components/popup'

export default {
  name: `${PREFIX}ActionSheet`,

  mixins: [prefix],

  props: {
    value: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      show: this.value
    }
  },

  watch: {
    value (newVal) {
      this.show = newVal
    }
  },

  components: {
    [Popup.name]: Popup
  },

  methods: {
    handleClickOverlay () {
      this.$emit('input', false)
    },

    handleSelect (item) {
      if (item.disabled) return
      this.$emit('select', item)
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
