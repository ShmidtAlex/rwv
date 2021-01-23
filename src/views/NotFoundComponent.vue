<template>
  <div>
    <h1>Error:404, Sorry the {{ resource }} is not found!</h1>
    <router-link :to="{ name: 'event-list' }">turn to the event list page</router-link>
  </div>  
</template>

<script>
export default {

  name: 'NotFoundComponent',

  props: {
    resource: {
      type: String,
      required: true
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>