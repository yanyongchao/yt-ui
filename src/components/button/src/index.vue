<template>
  <button :class="[getCls('', size, type), {
      'disabled': disabled || loading
    }]"
    :disabled="disabled" @click="handleClick">
    <span :class="getCls('loading-circle')" v-if="loading || fetching">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </span>
    <span v-if="$slots.default" :class="getCls('text')">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Button`,
  mixins: [prefix],
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'primary'
    },
    loading: Boolean,
    disabled: Boolean,
    fetch: Function
  },
  data () {
    return {
      fetching: false // 请求中
    }
  },
  methods: {
    handleClick (e) {
      if (this.fetch) {
        this.fetching = true
        this.fetch()
          .then(() => {
            this.fetching = false
          })
          .catch(() => {
            this.fetching = false
          })
      } else {
        this.$emit('click', e)
      }
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
