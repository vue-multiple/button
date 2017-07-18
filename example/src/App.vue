<template>
  <div id="app">
    <button-demo></button-demo>
  </div>
</template>

<script>
  import ButtonDemo from './ButtonDemo.vue'
  export default {
    name: 'app',
    components: {
      ButtonDemo
    }
  }
</script>

<style>
  #app {
    width: 1000px;
    margin: 60px auto;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
