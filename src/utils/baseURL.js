import axios from "axios"

let protocol = window.location.protocol
let host = window.location.host
let port = window.location.port
let reg = /(^localhost+)|(^127\.0\.0\.1)/
let baseURL = ''
if(reg.test(host)) {
  // baseURL = 'localhost:9000'
  // 本地调试
  baseURL = 'https://www.fastmock.site/mock/a8d6e6e531d0a37f4b8d962892c08cda'
} else {
  baseURL = `${protocol}//${host}:${port}`
}
export default baseURL