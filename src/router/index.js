import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import NProgress from 'nprogress'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
    props: true,
    beforeEnter(routeTo, routeFrom, next){
      store.dispatch('events/fetchEvents', { perPage: 3, page: routeTo.query.page }).then(() => {
        next()
      })
    }
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
    component: () => import(/* webpackChunkName: "about" */ '../views/EventShow.vue'),
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('events/fetchEvent', routeTo.params.id).then(() => {
        next()
      })
    }
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

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
