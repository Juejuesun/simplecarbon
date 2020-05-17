<template>
  <div id="app">
    <!-- <Login/> -->
    <router-view/>
  </div>
</template>

<script>
// import Login from './components/Home'

export default {
  name: 'app',
  components: {
    // Login
  },
  created() {
    this.$store.dispatch('pushUserid')
    this.$store.dispatch('getCityRank')
  }
}
</script>

<style>

</style>
