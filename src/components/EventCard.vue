<template>
  <router-link class="event-link" :to="{ name: 'event-show', params: { id: 1 } }">
  <div class="event-card -shadow">
    <span class="eybrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <div style="display:flex; justify-content: space-between; width: 25%">
      <BaseIcon name="users"><div class="slot-content" slot="heading">{{ event.attendees.length }} attending</div></BaseIcon>
    </div>
      
  </div>
  </router-link>
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 7px 0 rgba(0,0,0, 0.19);
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
  .slot-content {
    color: rgba(0,0,0, .8);
    font-weight: 600;
  }
</style>