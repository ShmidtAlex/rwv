<template>
   <div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : '' }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>

    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <h2>
      Attendees
      <span class="badge -fill-gradient">{{ event.attendees ? event.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
  //no longer need mapActions
  import { mapState, /*mapActions*/ } from 'vuex'
  import NProgress from 'nprogress'
  //while we don't have access to 'this', we should import store directly:
  import store from '@/store'
  console.log(NProgress)
export default {

  name: 'EventShow',
  beforeRouteEnter(routeTo, routeFrom, next){
    NProgress.start()
    store.dispatch('events/fetchEvent', routeTo.params.id).then(() => {
      NProgress.done()
      next()//but if we did only this, it won't help us in our problem, we should 
      //correct it in events.js, returning EventService.getEvent(id), instead of simply evoking it
    })
  },
  props: {
    id: {
      type: String | Number,
      required: false
    }
  },
//no longer need this hook
  // created(){   
  //   // this.$store.dispatch('events/fetchEvent', this.id)
  //    this.fetchEvent(this.id)
  // },

  methods: {
    //no longer need map actions, because of evnoke fetchEvent directly
    // ...mapActions('events', ['fetchEvent'])
  },

  computed: {
    ...mapState({
      event: state => state.events.event 
    })
  }
}
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
