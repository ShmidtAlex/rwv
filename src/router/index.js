import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },  
  {
    path: '/event/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue')
  },
  {
    path: '/event/:id',
    name: 'event-show',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/EventShow.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFoundComponent')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
