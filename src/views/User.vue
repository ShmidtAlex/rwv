<template>
  <div class="user">
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