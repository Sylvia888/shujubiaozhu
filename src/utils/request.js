import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import router from '../router/index'

// 正式环境
// let httpUrl = 'http://192.168.0.254/api';
// 测试环境
let httpUrl = 'http://192.168.0.253:8081';
// let httpUrl = 'http://xiaohua.test.utools.club';
axios.defaults.domainName = httpUrl;
axios.defaults.baseURL = httpUrl;

// create an axios instance
const service = axios.create({
  baseURL: httpUrl,
  withCredentials: false,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(config => {
   config.headers.Authorization = localStorage.getItem('accessToken') 
    return config
})

// response interceptor
service.interceptors.response.use( res => {
     if(res.data.code == 1001){
        router.push('/login')
     }
    return Promise.resolve(res)
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
