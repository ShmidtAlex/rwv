<template>
  <div>
    <h1>Ooops! :( It looks like you're experiencing some network issues, please, click the back button and try again</h1> 
    <button>Back</button>
    <router-link :to="{ name: 'event-list'}">Or go back to the home page</router-link>
  </div>
  
</template>

<script>
export default {

  name: 'NetworkErrorPage',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>