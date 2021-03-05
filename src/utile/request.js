import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = ' https://blog-server.hunger-valley.com'
// axios.defaults.withCredentials = true

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
    // 主动带上token
    if (localStorage.token) {
      axios.defaults.headers.common['Authorization'] = localStorage.token
    }

    axios(option).then(res => {
      console.log(res.data)
      let data = res.data
      if (data.status === 'ok') {
        if (res.data.token) {
          /**
           * 其实可以自动存储在cookie里，因为cookie有过期时间，安全性更高一些
           **/
          localStorage.token = res.data.token
        }
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
