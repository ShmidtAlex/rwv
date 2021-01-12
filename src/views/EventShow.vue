<template>
  <div class="about">
    <h1>This is an Event Show Page #{{ id }}</h1>
  </div>
</template>

<script>
export default {

  name: 'EventShow',
  
  props: {
    id: {
      type: Number,
      required: false
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