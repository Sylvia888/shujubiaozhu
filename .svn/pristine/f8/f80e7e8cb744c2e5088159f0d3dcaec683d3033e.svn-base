import request from '../utils/request'

//列表
export function getBatchNoList(data) {
  return request({
    url: '/QualityControlOperation/getBatchNoList',
    method: 'post',
    data
  })
}

export function labelLoadData(data) {
  return request({
    url: '/QualityControlOperation/labelLoadData',
    method: 'post',
    data
  })
}
//通过、不通过
export function labelSubmitOperate(data) {
  return request({
    url: '/QualityControlOperation/labelSubmitOperate',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
