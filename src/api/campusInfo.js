import request from '@/utils/request'

// 园区单位信息列表
export function selectFireBrigadeBases() {
  return request({
    url: 'park/selectFireBrigadeBases'
  })
}

// 新增-园区单位信息
export function addFireBrigadeBase(name) {
  return request({
    url: 'park/addFireBrigadeBase?name=' + name,
    method: 'post'
  })
}

// 修改-园区单位信息
export function updateFireBrigadeBase(data) {
  return request({
    url: 'park/updateFireBrigadeBase',
    method: 'post',
    data
  })
}

// 删除-园区单位信息
export function delFireBrigadeBase(id) {
  return request({
    url: 'park/delFireBrigadeBase?id=' + id,
    method: 'post'
  })
}

// 查询-支队执勤力量信息列表
export function selectPowerPage(params) {
  return request({
    url: 'park/selectPowerPage',
    params
  })
}

// 新增-支队执勤力量信息列表
export function addPower(data) {
  return request({
    url: 'park/addPower',
    method: 'post',
    data
  })
}

// 修改-支队执勤力量信息列表
export function updatePower(data) {
  return request({
    url: 'park/updatePower',
    method: 'post',
    data
  })
}

// 删除-支队执勤力量信息列表
export function delPower(id) {
  return request({
    url: 'park/delPower?id=' + id,
    method: 'post'
  })
}

// 支队执勤力量信息->获取车辆列表
export function selectVehicleInfoes(powerId) {
  return request({
    url: 'park/selectVehicleInfoes?powerId=' + powerId
  })
}

// 支队执勤力量信息->新增车辆
export function addVehicleInfo(data) {
  return request({
    url: 'park/addVehicleInfo',
    method: 'post',
    data
  })
}

// 支队执勤力量信息->删除车辆
export function delVehicleInfo(id) {
  return request({
    url: `park/delVehicleInfo?id=${id}`,
    method: 'post'
  })
}

// 支队执勤力量信息->修改车辆
export function updateVehicleInfo(data) {
  return request({
    url: 'park/updateVehicleInfo',
    method: 'post',
    data
  })
}

// 查询-联动单位联系信息列表
export function selectFireBrigadeContactPage(params) {
  return request({
    url: 'park/selectFireBrigadeContactPage',
    params
  })
}

// 动单位联系信息->新增联动单位接口
export function addFireBrigadeContact(data) {
  return request({
    url: 'park/addFireBrigadeContact',
    method: 'post',
    data
  })
}

// 联动单位联系信息->删除联动单位接口
export function delFireBrigadeContact(id) {
  return request({
    url: 'park/delFireBrigadeContact?id=' + id,
    method: 'post'
  })
}

// 联动单位联系信息->联动单位联系详细接口
export function selectFireBrigadeContactDetail(params) {
  return request({
    url: 'park/selectFireBrigadeContactDetail',
    method: 'get',
    params
  })
}

// 联动单位联系信息->联动单位联系修改接口
export function updateFireBrigadeContact(data) {
  return request({
    url: 'park/updateFireBrigadeContact',
    method: 'post',
    data
  })
}

// ------------
// 微型消防站联系表->列表接口
export function selectMicroFirecontrolPdfPage(params) {
  return request({
    url: 'park/selectMicroFirecontrolPdfPage',
    params
  })
}

// 微型消防站联系表->新增接口
export function addMicroFirecontrolPdf(data) {
  return request({
    url: 'park/addMicroFirecontrolPdf',
    method: 'post',
    data
  })
}

// 微型消防站联系表->删除接口
export function delMicroFirecontrolPdf(id) {
  return request({
    url: `park/delMicroFirecontrolPdf?id=${id}`,
    method: 'post'
  })
}

// 微型消防站联系表->修改接口
export function updateMicroFirecontrolPdf(data) {
  return request({
    url: 'park/updateMicroFirecontrolPdf',
    method: 'post',
    data
  })
}
