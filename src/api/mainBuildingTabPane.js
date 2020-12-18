import request from '@/utils/request'

// 主要建筑物-列表接口
export function selectCompanyBuildingList(companyId) {
    return request({
      url: 'company/selectCompanyBuildingList',
      params: {
        companyId
      }
    })
  }
  
  //主要建筑物-新增接口
  export function addCompanyBuilding(data) {
    return request({
      url: 'company/addCompanyBuilding',
      method: 'post',
      data
    })
  }
  
  //主要建筑物-删除接口
  export function delCompanyBuilding(id) {
    return request({
      url: `company/delCompanyBuilding?id=${id}`,
      method: 'post'
    })
  }
  
  //主要建筑物-修改接口
  export function updateCompanyBuilding(data) {
    return request({
      url: 'company/updateCompanyBuilding',
      method: 'post',
      data
    })
  }