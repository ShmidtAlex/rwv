<template>
  <div>
    <h1>Event Create</h1>
    <h2>{{ user.name }}</h2>
    <h3>{{ user.id }}</h3>
    <ul><span>choose one of {{ catLength }} categories: </span>
      <li v-for="(category, index) in categories" :key="index">{{ category }}</li>
    </ul>
    <ul>
      <span>number of done todos is {{ doneTodos.length }}</span>
      <li v-for="doneTodo in doneTodos" :key="doneTodo.id">{{ doneTodo.text}}</li>
    </ul>
    <ul><span>number of active todos is {{ activeTodos }}</span></ul>
    <div class="event-description">{{ getEventById(1)}}</div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  // import { mapGetters } from 'vuex'
export default {

  name: 'EventCreate',

  data () {
    return {

    }
  },
  //first solution (doesn't allow to use local computed properties):
  // computed: mapState({
  //   user: 'user',
  //   categories: 'categories'
  // })
  //another way: 
  // computed: mapState({
    // userName: state => state.user.name,
    // userId: state => state.user.id /
  // })
  //and one more way: 
  // computed: mapState(['user', 'categories'])
  //second solution (we can use local computed props):
  computed: {
    localCompProp() {
      return ''
    },
    ...mapState(['user', 'categories']),//or some of above ways
    ...mapGetters(['catLength', 'doneTodos', 'activeTodos', 'getEventById'])
  } 
}
</script>

<style lang="scss" scoped>
  li {
    text-align: left;
  }
</style>