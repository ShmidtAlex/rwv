<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
  import NotificationBar from './NotificationBar.vue'
  import { mapState } from 'vuex'
export default {

  name: 'NotificationContainer',
  components: {
    NotificationBar
  },
  computed: {
    ...mapState('notification', ['notifications'])
  }
}
</script>

<style lang="scss" scoped>
.notification-container {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding-right: 40px;
  background: rgba(0,0,0, .8);
  border-radius: 2px;
}
</style>