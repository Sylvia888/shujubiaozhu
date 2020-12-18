import request from '../utils/request'

//列表
export function getBatchNoList(data) {
  return request({
    url: '/AdvertResource/getBatchNoList',
    method: 'post',
    data
  })
}
//导出
export function batchExportData(data) {
  return request({
    url: '/AdministratorOperation/batchExportData',
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
