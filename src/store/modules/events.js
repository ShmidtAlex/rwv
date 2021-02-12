
import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
    { id: 3, text: '...', done: true },
    { id: 4, text: '...', done: true },
  ],
  events: [
    
  ],
  totalPagesAmount: null,
  event: {}
}
export const mutations = {
  ADD_EVENT(state, event){
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  SET_TOTAL_PAGES(state, amount) {
    state.totalPagesAmount = amount
  }
}

  
export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
      const notification = {
        type: 'success',
        message: `The event has been created`
      }
      dispatch('notification/add', notification, { root: true }) 
    })
    .catch(error => {
      const notification = {
        type: 'error',
        message: `There was a problem in creating event: ${ error.message }`
      }
      dispatch('notification/add', notification, { root: true })
      throw error
    }) 
  },
  fetchEvents({ commit, dispatch, state }, { perPage, page }) {
   return EventService.getEvents(perPage, page)
    .then(response => {
      commit('SET_TOTAL_PAGES', response.headers['x-total-count'])
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit, getters, state, /*dispatch*/ }, id) {
    //this condition allows not to fetch data if they already exists
    let event = getters.getEventById(id)
    if(event) {
      commit('SET_EVENT', event) 
    } else {
      return EventService.getEvent(id)
      .then(response => {        
        commit('SET_EVENT', response.data) 
      })
    }
  }
}
 
export const getters = {
  catLength: (rootState) => {//rootState allows to get access to states of other modules
    if(rootState.categories) {
      return rootState.categories.length
     } else {
      return 0
     }   
  },
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  activeTodos: state => {
    return state.todos.filter(todo => !todo.done).length
  },
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}