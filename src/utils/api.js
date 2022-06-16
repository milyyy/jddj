import { request } from './http'
export const Login = (params) => request('/api/login', params, 'POST')
export const GetShopList = (params) => request('/api/getShopList', params, 'GET')
export const getShopTypeList = (params) => request('/api/getShopTypeList', params, 'GET')

