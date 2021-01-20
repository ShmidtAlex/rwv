import axios from 'axios'
import  NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials:  false,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
//for simulating delay use terminal command "json-server -d 1500 db.json"
apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})
apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

/*Caviats of this (axios interceptors + NProgress library) approach: 
  1. Not appropriate whith multiple API calls at the same time, because will show the progress
    of all three calls, but not one. (It can be resolved with a Loading Vuex Module watch lesson 
    2, 5:54)
  2. The templates get loaded before API calls is returned. And they look empty, 
    which is not good, it's not optimal user experience.
Pros of the approach:
  1. Interceptors allows to set authorization tokens
  2. On response to format or filter data before it reaches into the app
*/
export default { 
  getEvents(perPage, currentPage) {
    return apiClient.get(`/events?_limit=${ perPage }&_page=${currentPage}`)
  },
  getEvent(id) {
    return apiClient.get(`events/${id}`)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}