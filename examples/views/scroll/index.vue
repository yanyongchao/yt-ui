<template>
  <div class="demo-scroll">
    <yt-group class="demo-horizontal" title="水平滚动">
      <yt-scroll direction="horizontal">
        <div class="scroll-content">
          <div class="scroll-item"
            v-for="(item, index) in emojis"
            :key="index">{{item}}</div>
        </div>
      </yt-scroll>
    </yt-group>
    <yt-group class="demo-vertical" title="垂直滚动">
      <yt-scroll direction="vertical">
        <div class="scroll-content">
          <div class="scroll-item"
            v-for="(item, index) in emojis"
            :key="index">{{item}}</div>
        </div>
      </yt-scroll>
    </yt-group>
    <yt-group class="demo-pulldown" title="下拉刷新">
      <yt-scroll ref="scroll1"
        direction="vertical"
        :options="pulldownOptions"
        @pulling-down="onPullingDown">
        <div class="scroll-content">
          <yt-cell v-for="(item, index) in list1"
            :key="index"
            :value="item"></yt-cell>
        </div>
      </yt-scroll>
    </yt-group>
    <yt-group class="demo-pulldown" title="上拉加载">
      <yt-scroll ref="scroll2"
        direction="vertical"
        @pulling-up="onPullingUp"
        :options="pullUpLoadOptions">
        <div class="scroll-content">
          <yt-cell v-for="(item, index) in list2"
            :key="index"
            :value="item"></yt-cell>
        </div>
      </yt-scroll>
    </yt-group>
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
      emojis: [
        '😀 😁 😂 🤣 😃',
        '😄 😅 😆 😉 😊',
        '😫 😴 😌 😛 😜',
        '👆🏻 😒 😓 😔 👇🏻',
        '😑 😶 🙄 😏 😣',
        '😞 😟 😤 😢 😭',
        '🤑 😲 ☹️ 🙁 😖',
        '👍 👎 👊 ✊ 🤛',
        '☝️ ✋ 🤚 🖐 🖖',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
        '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
        '🌖 🌗 🌘 🌑 🌒',
        '💫 💥 💢 💦 💧',
        '🐠 🐟 🐬 🐳 🐋',
        '😬 😐 😕 😯 😶',
        '😇 😏 😑 😓 😵',
        '🐥 🐣 🐔 🐛 🐤',
        '💪 ✨ 🔔 ✊ ✋',
        '👇 👊 👍 👈 👆',
        '💛 👐 👎 👌 💘'
      ],
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      list2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      pullDownRefreshObj: {
        threshold: 44,
        stop: 44
      }
    }
  },

  computed: {
    pulldownOptions () {
      return {
        pullDownRefresh: this.pullDownRefreshObj
      }
    },
    pullUpLoadOptions () {
      return {
        pullUpLoad: {
          threshold: 50
        }
      }
    }
  },

  watch: {},

  created () {},

  mounted () {},

  destroyed () {},

  methods: {
    clickHandler (item) {
      alert(item)
    },
    async onPullingDown () {
      await this.fetchPullingDown('list1')
      this.$refs.scroll1.finishPullDown()
    },
    async onPullingUp () {
      await this.fetchPullingDown('list2')
      this.$refs.scroll2.finishPullUp()
    },
    fetchPullingDown (list) {
      return new Promise(resolve => {
        setTimeout(() => {
          const n = this[list].length + 1
          for (let i = n; i <= n + 5; i++) {
            if (list === 'list1') {
              this[list].unshift(i)
            } else {
              this[list].push(i)
            }
          }
          resolve()
        }, 3000)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.demo-scroll {
  min-height: 100vh;
  background-color: #fff;
}
/deep/.yt-group-content {
  border: 2px solid #108ee9;
}
.demo-vertical {
  /deep/.yt-group-content {
    height: 200px;
  }
}
.demo-horizontal {
  /deep/.yt-group-content {
    width: 100%;
  }
  .scroll-content {
    display: inline-block;
  }
  .scroll-item {
    display: inline-block;
  }
}
.demo-pulldown {
  /deep/.yt-group-content {
    height: 200px;
  }
  /deep/.yt-cell {
    justify-content: center;
  }
}
</style>
