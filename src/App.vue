<template>
  <div id="app">
    <NavBar />
    <NotificationContainer />
    <!-- :key="$route.fullPagh" allows reload page when user navigates between pages, using pagination -->
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
  import NavBar from '@/components/NavBar.vue'
  import NotificationContainer from '@/components/NotificationContainer.vue'
  export default {
    components: {
      NavBar,
      NotificationContainer
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
