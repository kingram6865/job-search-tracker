import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://jobsearchtracker-api.herokuapp.com' : 'http://192.168.1.19:3000'

const api = axios.create({
  baseURL: baseUrl
})

export default api