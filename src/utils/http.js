import axios from 'axios'
import baseURL from './baseURL'
import { useRouter } from 'vue-router'
const router = useRouter()

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // do sth as start loading
    if (localStorage.getItem('token')) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return config
  },
  (err) => {
    // do sth as end loading
    return Promise.reject(err)
  },
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    let status = err.response && err.response.status
    switch (status) {
      case 400:
        alert('请求错误！')
        break
      case 401:
        alert('token过期，请重新登录！')
        router.push('/login')
        localStorage.removeItem('token')
        break
      case 404:
        alert('请求错误，未找到该资源')
        break
      default:
        alert('请求失败请联系开发者')
        return Promise.reject(err)
    }
  },
)

export function request(url = '', params = {}, type = 'POST') {
  return new Promise((resolve, reject) => {
    let promise = ''
    if (type.toUpperCase() === 'GET') {
      promise = axiosInstance({
        url,
        params,
        method: 'GET',
      })
    }
    if (type.toUpperCase() === 'POST') {
      promise = axiosInstance({
        url,
        data: params,
        method: 'POST',
      })
    }
    promise
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// export default axiosInstance
