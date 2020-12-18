import request from '@/utils/request'

// 企业图片-查询列表
export function selectPictureBaseList(id) {
  return request({
    url: `company/selectPictureBaseList?companyId=${id}`,
    method: 'get'
  })
}


// 企业图片-添加
export function addPictureBase(data) {
  return request({
    url: `company/addPictureBase`,
    method: 'post',
    data
  })
}

// 企业图片-更改
export function updatePictureBase(data) {
  return request({
    url: `company/updatePictureBase`,
    method: 'post',
    data
  })
}

// 企业图片-删除
export function delPictureBase(id) {
  return request({
    url: `company/delPictureBase?id=${id}`,
    method: 'post'
  })
}

// 企业图片类型
export function selectPictureTypeList() {
  return request({
    url: `company/selectPictureTypeList`,
    method: 'get'
  })
}

