import request from '@/utils/request'

// 企业资源信息-列表接口
export function selectCompanyResourceList(companyId) {
    return request({
      url: 'company/selectCompanyResourceList',
      params: {
        companyId
      }
    })
  }
  
  //企业资源信息-新增接口
  export function addCompanyResource(data) {
    return request({
      url: 'company/addCompanyResource',
      method: 'post',
      data
    })
  }
  
  //企业资源信息-删除接口
  export function delCompanyResource(id) {
    return request({
      url: `company/delCompanyResource?id=${id}`,
      method: 'post'
    })
  }
  
  //企业资源信息-修改接口
  export function updateCompanyResource(data) {
    return request({
      url: 'company/updateCompanyResource',
      method: 'post',
      data
    })
  }