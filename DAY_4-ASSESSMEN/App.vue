<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <vue_day4/>
       <!-- msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import vue_day4 from './components/vue_day4.vue'

export default {
  name: 'App',
  components: {
    vue_day4
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

