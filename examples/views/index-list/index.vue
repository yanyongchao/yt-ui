<template>
  <div class="demo-index-list">
    <yt-index-list :list="list"></yt-index-list>
  </div>
</template>

<script>
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      list: [
        {
          name: 'A',
          items: [
            {
              name: 'A1',
              value: 1
            },
            {
              name: 'A2',
              value: 2
            },
            {
              name: 'A3',
              value: 3
            },
            {
              name: 'A4',
              value: 4
            },
            {
              name: 'A5',
              value: 5
            },
            {
              name: 'A6',
              value: 6
            }
          ]
        },
        {
          name: 'B',
          items: [
            {
              name: 'B1',
              value: 7
            },
            {
              name: 'B2',
              value: 8
            },
            {
              name: 'B3',
              value: 9
            },
            {
              name: 'B4',
              value: 10
            },
            {
              name: 'B5',
              value: 11
            },
            {
              name: 'B6',
              value: 12
            }
          ]
        },
        {
          name: 'C',
          items: [
            {
              name: 'C1',
              value: 13
            },
            {
              name: 'C2',
              value: 14
            },
            {
              name: 'C3',
              value: 15
            },
            {
              name: 'C4',
              value: 16
            },
            {
              name: 'C5',
              value: 17
            },
            {
              name: 'C6',
              value: 18
            }
          ]
        },
        {
          name: 'D',
          items: [
            {
              name: 'D1',
              value: 19
            },
            {
              name: 'D2',
              value: 20
            },
            {
              name: 'D3',
              value: 21
            },
            {
              name: 'D4',
              value: 22
            },
            {
              name: 'D5',
              value: 23
            },
            {
              name: 'D6',
              value: 24
            }
          ]
        }
      ]
    }
  },

  created () {},

  mounted () {
  },

  destroyed () {},

  methods: {
  }
}
</script>

<style lang='scss' scoped>
.demo-index-list {
  position: relative;
  overflow: hidden;
  height: calc(100vh - 44px);
}
/deep/.yt-group {
  padding: 0;
}
/deep/.yt-group-title {
  padding: 10px 15px;
}
.yt-fix-title {
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 15px;
  color: #333;
  font-size: 14px;
  background-color: #f7f8fa;
}
</style>
