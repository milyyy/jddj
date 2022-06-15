import { request } from './http'
export function Login(params) {
  return request('/api/login', params, 'POST')
}
export function GetShopList(params) {
  return request('/api/getShopList', params, 'GET')
}
export function getShopTypeList(params) {
  return request('/api/getShopTypeList', params, 'GET')
}