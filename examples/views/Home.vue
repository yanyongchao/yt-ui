<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="say">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods: {
    /**
     * @func
     * @param {type}
     * @author yyc
     */
    say (val) {
      console.log(val)
    }
  }
}
</script>
