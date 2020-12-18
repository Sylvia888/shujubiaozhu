import request from '@/utils/request'

// 主要构筑物-列表接口
export function selectCompanyStructuresList(companyId) {
    return request({
      url: 'company/selectCompanyStructuresList',
      params: {
        companyId
      }
    })
  }
  
  //主要构筑物-新增接口
  export function addCompanyStructures(data) {
    return request({
      url: 'company/addCompanyStructures',
      method: 'post',
      data
    })
  }
  
  //主要构筑物-删除接口
  export function delCompanyStructures(id) {
    return request({
      url: `company/delCompanyStructures?id=${id}`,
      method: 'post'
    })
  }
  
  //主要构筑物-修改接口
  export function updateCompanyStructures(data) {
    return request({
      url: 'company/updateCompanyStructures',
      method: 'post',
      data
    })
  }