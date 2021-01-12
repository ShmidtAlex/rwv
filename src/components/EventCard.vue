<template>
  <div class="event-card -shadow">
    <span class="eybrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span>{{ event.attendees.length }} attending </span>    
  </div>
  
</template>

<script>
export default {

  name: 'EventCard',

  data () {
    return {
      event: {
        id: 1,
        title: "Beach Cleanup",
        date: 'Tues Aug 19, 2020',
        time: '6:00',
        attendees: [
          { id: 'abc124', name: 'Michael Sukhomlinov' },
          { id: 'def456', name: 'Alexander Shmidt' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .event-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;
    border-radius: 3px;
  }
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0,0,0, 0.19);
  }
  .event-card > .titile {
    margin: 0;
  }
  .event-link {
    color: black;
    text-decoration: none;
  }
  h4 {
    color: green;
  }
</style>