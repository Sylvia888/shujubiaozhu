import request from '@/utils/request'

// 公用工程-列表接口
export function selectCompanyPublicProjectList(companyId) {
    return request({
      url: 'company/selectCompanyPublicProjectList',
      params: {
        companyId
      }
    })
  }
  
  //公用工程-新增接口
  export function addCompanyPublicProject(data) {
    return request({
      url: 'company/addCompanyPublicProject',
      method: 'post',
      data
    })
  }
  
  //公用工程-删除接口
  export function delCompanyPublicProject(id) {
    return request({
      url: `company/delCompanyPublicProject?id=${id}`,
      method: 'post'
    })
  }
  
  //公用工程-修改接口
  export function updateCompanyPublicProject(data) {
    return request({
      url: 'company/updateCompanyPublicProject',
      method: 'post',
      data
    })
  }