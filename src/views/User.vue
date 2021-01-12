<template>
  <div class="user">
    <!-- such a using $route limited flexibility, so instead we should use modular way -->
    <!-- <h1>{{ $route.params.username }}'s page</h1> -->
    <!-- for getting username parameter we should add 'props: true' option in router/index.js and than, access to the parameter as a common prop -->
    <h1>{{ username }}'s page</h1>
  </div>
</template>

<script>
export default {

  name: 'User',

  props: {
    username: {
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

<style lang="css" scoped>
</style>