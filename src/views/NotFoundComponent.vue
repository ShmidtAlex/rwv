<template>
  <div>
    <h1>Error:404, Sorry the {{ resource ? resource : 'page' }} is not found!</h1>
    <router-link :to="{ name: 'event-list' }">turn to the event list page</router-link>
  </div>  
</template>

<script>
  window.onbeforeunload = function() {
  alert('не уходи! :((')
};
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