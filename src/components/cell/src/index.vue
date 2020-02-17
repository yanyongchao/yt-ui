<template>
  <div class="cell">cell</div>
</template>

<script>
import prefix, { PREFIX } from '@/mixins/prefix'

export default {
  name: `${PREFIX}Cell`,

  mixins: [prefix],

  components: {},

  props: {},

  data () {
    return {}
  },

  computed: {},

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
