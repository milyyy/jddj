import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'utils/request'
import 'normalize.css' // 解决浏览器差异
import './style/index.scss'

const app = createApp(App)

/** 全局挂载对象 globalProperties */
app.config.globalProperties.$axios = axios

app.use(store).use(router).mount('#app')
