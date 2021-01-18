import axios from 'axios'
const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials:  false,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

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