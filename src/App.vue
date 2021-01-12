<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'event-list' }">Event List</router-link> |
      
      <router-link :to="{ name: 'event-create' }">Create Event</router-link>
      <!-- <router-link :to="{ name: 'user', params: { username: 'Alexander'} }">Alexander</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

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
