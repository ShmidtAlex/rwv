<template>
  <div class="home">
    <h1>Events Listing</h1>
    <EventCard />  
    <BaseIcon />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data () {
    return {
      // name:data
    };
  }
}
</script>
<style>
  .home {
    width: 50%;
  }
</style>
