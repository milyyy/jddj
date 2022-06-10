import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

axios.defaults.timeout = 5000;

function startLoading() {
  console.log('start loading ...');
}
function closeLoading() {
  console.log('close loading ...');
}
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // do sth as start loading
    startLoading();
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  (err) => {
    closeLoading();
    // do sth as end loading
    return Promise.reject(err);
  },
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    closeLoading();
    return response;
  },
  (err) => {
    closeLoading();
    let status = err.response && err.response.status;
    switch (status) {
      case 400:
        alert('请求错误！');
        break;
      case 401:
        alert('token过期，请重新登录！');
        router.push('/login');
        localStorage.removeItem('token');
        break;
      case 404:
        alert('请求错误，未找到该资源');
        break;
      default:
        alert('请求失败请联系开发者');
        return Promise.reject(err);
    }
  },
);

export default axios;
