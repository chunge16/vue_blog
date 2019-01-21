import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = ' https://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true

export default function request (url, method = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method
    }
    if (method.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }

    axios(option).then(res => {
      let data = res.data
      if (data.status === 'ok') {
        resolve(data)
      } else {
        Message.error(data.msg)
        reject(data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject(err)
    })
  })
}
