<template>
  <div class="home">
    <h1>Events for {{ user.user.name }}</h1>
      <EventCard v-for="event in events.events" :key="event.id" :event="event" />  
    <div class="pagination-nav">
      <div class="first-page" v-if="page != 1">
       <router-link :to="{ name: 'event-list', query: { page: page - 1}}" rel="prev"> Prev Page </router-link>
      </div>
      <span v-if="page != 1 && events.totalPagesAmount > page * perPage ">|</span>
      <div class="next-page" v-if="events.totalPagesAmount > page * perPage">
        <router-link :to="{ name: 'event-list', query: { page: page + 1}}" rel="next"> Next Page </router-link>
      </div>
    </div>
    
   
    
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState, mapActions } from 'vuex'
import store from '@/store'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data () {
    return {
      // events: this.$store.state.events
      perPage: 3,
      nextPageLoaded: false
    };
  },  
  beforeRouteUpdate(routeTo, routeFrom, next){
    this.nextPageLoaded = true
    store.dispatch('events/fetchEvents', { perPage: 3, page: routeTo.query.page }).then(() => {
      next()
    })
  },   
  computed: {
    page() {
      return parseInt(this.$route.query.page || 1)
    },
    ...mapState(['events', 'totalPagesAmount', 'user'])
  }
}
</script>
<style>
  .home {
    width: 50%;
  }
  .pagination-nav {
    display: flex;
  }
  .first-page, .next-page {
    padding: 0 5px;
  }
</style>
