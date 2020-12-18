import request from '@/utils/request'

// 化学工业区应急物资清单-新增物资接口
export function addEmergencySupplies(data) {
  return request({
    url: 'resource/addEmergencySupplies',
    method: 'post',
    data
  })
}

// 化工区生产技术专家|化工区专家咨询委员会|医疗支持信息|园区内专业技术信息表-新增接口
export function addResourceInfo(data) {
  return request({
    url: 'resource/addResourceInfo',
    method: 'post',
    data
  })
}

// 化学工业区应急物资清单-删除物资接口
export function delEmergencySupplies(id) {
  return request({
    url: `resource/delEmergencySupplies?id=${id}`,
    method: 'post'
  })
}

// 化工区生产技术专家|化工区专家咨询委员会|医疗支持信息|园区内专业技术信息表-删除接口
export function delResourceInfo(id, rid) {
  return request({
    url: `resource/delResourceInfo?id=${id}&rid=${rid}`,
    method: 'post'
  })
}

// 化学工业区应急物资清单-物资详细接口
export function selectEmergencySuppliesDetail(params) {
  return request({
    url: 'resource/selectEmergencySuppliesDetail',
    method: 'get',
    params
  })
}

// 化学工业区应急物资清单-列表接口
export function selectEmergencySuppliesPage(params) {
  return request({
    url: 'resource/selectEmergencySuppliesPage',
    method: 'get',
    params
  })
}

// 化工区生产技术专家|化工区专家咨询委员会|医疗支持信息|园区内专业技术信息表-详细接口
export function selectResourceInfoDetail(params) {
  return request({
    url: 'resource/selectResourceInfoDetail',
    method: 'get',
    params
  })
}

// 化工区生产技术专家|化工区专家咨询委员会|医疗支持信息|园区内专业技术信息表-列表接口
export function selectResourceInfoPage(params) {
  return request({
    url: 'resource/selectResourceInfoPage',
    method: 'get',
    params
  })
}

// 化学工业区应急物资清单-修改物资接口
export function updateEmergencySupplies(data) {
  return request({
    url: 'resource/updateEmergencySupplies',
    method: 'post',
    data
  })
}

// 化工区生产技术专家|化工区专家咨询委员会|医疗支持信息|园区内专业技术信息表-修改接口
export function updateResourceInfo(data) {
  return request({
    url: 'resource/updateResourceInfo',
    method: 'post',
    data
  })
}
