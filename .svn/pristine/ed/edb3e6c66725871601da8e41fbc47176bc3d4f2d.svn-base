import request from '@/utils/request'

// 化学品类型列表接口
export function fetchChemicalsTypes() {
  return request({
    url: 'msds/selectChemicalsTypes'
  })
}

// MSDS列表接口
export function fetchMsdsList(params) {
  return request({
    url: 'msds/selectMsdsPage',
    params
  })
}

// 添加MSDS-基本信息接口
export function addMsdsBaseInfo(data) {
  return request({
    url: 'msds/addMsdsOne',
    method: 'post',
    data
  })
}

// 修改MSDS-基本信息接口
export function updateMsdsBaseInfo(data) {
  return request({
    url: 'msds/updateMsdsOne',
    method: 'post',
    data
  })
}

// 添加MSDS-应急处置接口
export function addMsdsEmergencyDisposal(data) {
  return request({
    url: 'msds/addMsdsTwo',
    method: 'post',
    data
  })
}

// 修改MSDS-应急处置接口
export function updateMsdsEmergencyDisposal(data) {
  return request({
    url: 'msds/updateMsdsTwo',
    method: 'post',
    data
  })
}

// 添加MSDS-急救措施接口
export function addFirstAidMeasures(data) {
  return request({
    url: 'msds/addMsdsThree',
    method: 'post',
    data
  })
}

// 修改MSDS-急救措施接口
export function updateFirstAidMeasures(data) {
  return request({
    url: 'msds/updateMsdsThree',
    method: 'post',
    data
  })
}

// MSDS-Excel导入接口
export function importExcel(file) {
  const data = new FormData()
  data.append('file', file.file)
  return request({
    url: 'msds/importExcel',
    method: 'post',
    data
  })
}

// 删除Msds接口
export function delMsds(id) {
  return request({
    url: `msds/delMsds?id=${id}`,
    method: 'post'
  })
}
