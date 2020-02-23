<template>
  <div :class="[getCls('')]">
    SwiperCell
  </div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}SwiperCell`,

  mixins: [prefix],

  props: {

  },

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
