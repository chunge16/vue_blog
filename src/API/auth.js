import request from '@/utile/request'
import URL from './URL'

export default {
  register ({ username, password }) {
    return request(URL.REGISTER, 'POST', { username, password })
  },

  login ({ username, password }) {
    return request(URL.LOGIN, 'POST', { username, password })
  },

  logout () {
    return request(URL.LOGOUT)
  },

  getUserInfo () {
    return request(URL.GET_INFO)
  }
}
