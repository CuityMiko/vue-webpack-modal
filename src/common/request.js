import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  $.showIndicator();
  return config
}, error => {
  return Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
    $.hideIndicator()
    return response.data
  },
  error => {
    $.hideIndicator()
    return Promise.reject(error)
  }
)

export default service
