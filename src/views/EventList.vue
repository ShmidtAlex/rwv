<template>
  <div class="home">
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />  
    <BaseIcon />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventServise from '@/services/EventService.js'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data () {
    return {
      events: []
    };
  },
  created() {
    EventServise.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        alert(`there is an error ${ error }`)
      })
  },
  
}
</script>
<style>
  .home {
    width: 50%;
  }
</style>
