<template>
  <div id="myport_app">
    <HeaderView></HeaderView>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from "./views/Header.vue";
export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script>

<style>
  #myport_app {
    margin: 0 25%;
  }
</style>
