import request from '@/utils/request'

// 实战资料列表接口
export function selectCaseInfoPage(params) {
  return request({
    url: 'case/selectCaseInfoPage',
    method: 'get',
    params
  })
}

// 删除实战资料接口
export function delCaseInfo(id) {
  return request({
    url: `case/delCaseInfo?id=${id}`,
    method: 'post'
  })
}

// 新增实战资料接口
export function addCaseInfo(data) {
  return request({
    url: 'case/addCaseInfo',
    method: 'post',
    data
  })
}

// 修改实战资料接口
export function updateCaseInfo(data) {
  return request({
    url: 'case/updateCaseInfo',
    method: 'post',
    data
  })
}
