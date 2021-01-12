import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
// import User from '@/components/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EventShow.vue')
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: () => import('../views/EventCreate.vue')
  },
  // {
  //   path: '/user/:username',
  //   name: 'user',
  //   component: () => import('../views/User.vue'),
  //   props: true //it sends parameters to a component as a props
  // },
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
