<template>
  <div id="nav">
    <router-link to="/" class="brand">Real World Events</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">Event List</router-link>  |    
      <router-link :to="{ name: 'event-create' }">Create Event</router-link>
    </nav>     
  </div>
</template>

<script>
export default {

  name: 'NavBar',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;    
  }
  .brand {
    color: #42b983;
  }
  nav {
    a {
      text-decoration: underline;
    }
  } 
}

</style>