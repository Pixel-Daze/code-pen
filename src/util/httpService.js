import axios from 'axios'
import {request, response} from './httpInterceptor'

axios.interceptors.request.use(request)
axios.interceptors.response.use(response)

/* ajax-get */
export const fetch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url,
      params: data,
      withCredentials: true // 允许携带cookie
    }).then(resp => {
      resolve(resp)
    }, reject)
  })
}

/* ajax-post */
export const postData = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: data,
      withCredentials: true // 允许携带cookie
    }).then(resp => {
      resolve(resp)
    }, reject)
  })
}
