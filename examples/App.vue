<template>
  <div id="app">
    <!-- <img alt="Vue logo" :src="imgSrc"> -->
        <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      imgSrc: require('./assets/logo.png')
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
