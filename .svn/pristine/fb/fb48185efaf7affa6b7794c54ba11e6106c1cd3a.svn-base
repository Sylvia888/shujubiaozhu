import request from '@/utils/request'

// 重点单位列表接口
export function selectCompanyInfoPage(params) {
  return request({
    url: 'company/selectCompanyInfoPage',
    method: 'get',
    params
  })
}

// 重点单位列表接口
export function selectCompanyInfoDetail(params) {
  return request({
    url: 'company/selectDetail',
    method: 'get',
    params
  })
}
// 重点单位列表接口
export function delCompanyInfo(params) {
  return request({
    url: `company/delCompanyInfo?id=${params.id}`,
    method: 'post'
  })
}

// 新增-重点单位-基本信息
export function addCompanyInfo(data) {
  return request({
    url: 'company/addCompanyInfo',
    method: 'post',
    data
  })
}

// 修改-重点单位-基本信息
export function updateCompanyInfo(data) {
  return request({
    url: 'company/updateCompanyInfo',
    method: 'post',
    data
  })
}

// 重点部位列表接口
export function selectCompanyPartsList(id) {
  return request({
    url: `company/selectCompanyPartsList?companyId=${id}`
  })
}

// 新增重点部位
export function addCompanyParts(data) {
  return request({
    url: 'company/addCompanyParts',
    method: 'post',
    data
  })
}

// 新增重点部位
export function delCompanyParts(data) {
  return request({
    url: `company/delCompanyParts?id=${data.id}`,
    method: 'post'
  })
}

// 重点部位-装置-查询装置信息接口
export function selectInstallationById(params) {
  return request({
    url: 'company/selectInstallationById',
    params
  })
}

// 重点部位-装置-修改装置信息接口
export function updateCompanyInstallation(data) {
  return request({
    url: 'company/updateCompanyInstallation',
    method: 'post',
    data
  })
}
// 重点部位-装置-添加装置信息接口
export function addCompanyInstallation(data) {
  return request({
    url: 'company/addCompanyInstallation',
    method: 'post',
    data
  })
}

// 重点部位-装置-作战卡(东南风)和作战卡(西北风)-查询[东南风和西北风一起查询并返回]接口
export function selectCompanyCombatCards(params) {
  return request({
    url: 'company/selectCompanyCombatCards',
    params
  })
}

// 重点部位-装置-作战卡-泵出口压力-查询详细接口
export function selectCompanyCombatPressure(params) {
  return request({
    url: 'company/selectCompanyCombatPressure',
    params
  })
}

// 重点部位-[装置、储罐区、包装车间和产品仓库、天然气调压站]-作战卡(东南风|西北风)-（添加|修改）接口
export function updateCompanyCombatCard(data, type) {
  return request({
    url: 'company/updateCompanyCombatCard?type=' + type,
    method: 'post',
    data
  })
}

// 重点部位-装置-作战卡-泵出口压力-（添加|修改）接口
export function updateCompanyCombatPressure(data, type) {
  return request({
    url: 'company/updateCompanyCombatPressure?type=' + type,
    method: 'post',
    data
  })
}

// 重点部位-[装置、包装车间和产品仓库]-装置物料信息和仓库物料信息-列表查询接口
export function selectCompanyMsds(params) {
  return request({
    url: 'company/selectCompanyMsds',
    params
  })
}

// 重点部位-[装置、包装车间和产品仓库]-装置物料信息和仓库物料信息-新增物料接口
export function addCompanyMsds(data) {
  return request({
    url: 'company/addCompanyMsds',
    method: 'post',
    data
  })
}

// 重点部位-[装置、包装车间和产品仓库]-装置物料信息和仓库物料信息-修改物料接口
export function updateCompanyMsds(data) {
  return request({
    url: 'company/updateCompanyMsds',
    method: 'post',
    data
  })
}

// 重点部位-[装置、包装车间和产品仓库]-装置物料信息和仓库物料信息-删除物料接口
export function delCompanyMsds(id) {
  return request({
    url: 'company/delCompanyMsds?id=' + id,
    method: 'post'
  })
}

// 企业部位火灾-列表接口
export function selectCompanyPartsFireRiskList(companyId) {
  return request({
    url: 'company/selectCompanyPartsFireRiskList',
    params: {
      companyId
    }
  })
}

/*
 * 储罐类型
 */

// 重点部位-储罐区-查询储罐区信息接口
export function selectCompanyPartsVO(params) {
  return request({
    url: 'company/selectCompanyPartsVO',
    method: 'get',
    params
  })
}



// 重点部位-储罐区-修改储罐区详情接口
export function updateCompanyPartStora(data) {
  return request({
    url: 'company/updateCompanyPartStora',
    method: 'post',
    data
  })
}

// 重点部位-储罐区-添加储罐区信息接口
export function addStoraAreaList(data) {
  return request({
    url: 'company/addStoraAreaList',
    method: 'post',
    data
  })
}
// 重点部位-储罐区-修改储罐区信息接口
export function updateStoraAreaList(data) {
  return request({
    url: 'company/updateStoraAreaList',
    method: 'post',
    data
  })
}

// 重点部位-储罐区-删除储罐区信息接口
export function delStoraAreaList(params) {
  return request({
    url: `company/delStoraAreaListVO?storaAreaListId=${params.id}&companyId=${params.companyId}`,
    method: 'post'
  })
}

// 重点部位-储罐区-储罐物料信息列表
export function selectStoraAreaListVO(storaAreaListId, companyId) {
  return request({
    url: 'company/selectStoraAreaListVO',
    params: {
      storaAreaListId,
      companyId
    }
  })
}

// 企业部位火灾-新增接口
export function addCompanyPartsFireRisk(data) {
  return request({
    url: 'company/addCompanyPartsFireRisk',
    method: 'post',
    data
  })
}

// 企业部位火灾-修改接口
export function updateCompanyPartsFireRisk(data) {
  return request({
    url: 'company/updateCompanyPartsFireRisk',
    method: 'post',
    data
  })
}

// 企业部位火灾-删除接口
export function delCompanyPartsFireRisk(id) {
  return request({
    url: `company/delCompanyPartsFireRisk?id=${id}`,
    method: 'post'
  })
}

// 企业应急药物-列表接口
export function selectCompanyEmergencyMedicineList(companyId) {
  return request({
    url: `company/selectCompanyEmergencyMedicineList?companyId=${companyId}`
  })
}

// 企业应急药物-新增接口
export function addCompanyEmergencyMedicine(data) {
  return request({
    url: 'company/addCompanyEmergencyMedicine',
    method: 'post',
    data
  })
}

// 企业应急药物-修改接口
export function updateCompanyEmergencyMedicine(data) {
  return request({
    url: 'company/updateCompanyEmergencyMedicine',
    method: 'post',
    data
  })
}

// 企业应急药物-删除接口
export function delCompanyEmergencyMedicine(id) {
  return request({
    url: `company/delCompanyEmergencyMedicine?id=${id}`,
    method: 'post'
  })
}

// 企业毒害物-列表接口
export function selectCompanyPoisonList(companyId) {
  return request({
    url: `company/selectCompanyPoisonList?companyId=${companyId}`
  })
}

// 企业应急药物-新增接口
export function addCompanyPoison(data) {
  return request({
    url: 'company/addCompanyPoison',
    method: 'post',
    data
  })
}

// 企业应急药物-修改接口
export function updateCompanyPoison(data) {
  return request({
    url: 'company/updateCompanyPoison',
    method: 'post',
    data
  })
}

// 企业应急药物-删除接口
export function delCompanyPoison(id) {
  return request({
    url: `company/delCompanyPoison?id=${id}`,
    method: 'post'
  })
}

// 专家信息-列表接口
export function selectCompanyExpertList(companyId) {
  return request({
    url: `company/selectCompanyExpertList?companyId=${companyId}`
  })
}

// 专家信息-新增接口
export function addCompanyExpert(data) {
  return request({
    url: 'company/addCompanyExpert',
    method: 'post',
    data
  })
}

// 专家信息-修改接口
export function updateCompanyExpert(data) {
  return request({
    url: 'company/updateCompanyExpert',
    method: 'post',
    data
  })
}

// 专家信息-删除接口
export function delCompanyExpert(id) {
  return request({
    url: `company/delCompanyExpert?id=${id}`,
    method: 'post'
  })
}

// 包装车间和产品仓库-包装车间和仓库信息接口
export function selectStorehouseInfo(params) {
  return request({
    url: `company/selectStorehouseInfo`,
    method: 'get',
    params
  })
}

// 包装车间和产品仓库-修改包装车间和仓库信息接口
export function updateStorehouseInfo(data) {
  return request({
    url: `company/updateStorehouseInfo`,
    method: 'post',
    data
  })
}


// 重点部位-包装车间和产品仓库-添加包装车间接口
export function addStorehouseList(data) {
  return request({
    url: `company/addStorehouseList`,
    method: 'post',
    data
  })
}

// 重点部位-包装车间和产品仓库-修改包装车间接口
export function updateStorehouseList(data) {
  return request({
    url: `company/updateStorehouseList`,
    method: 'post',
    data
  })
}

// 重点部位-包装车间和产品仓库-删除当前包装车间接口
export function delStorehouseList(id) {
  return request({
    url: `company/delStorehouseList?id=${id}`,
    method: 'post'
  })
}

// 重点部位-天然气调压站-天然气调压站概况接口
export function selectCompanyPartsFour(params) {
  return request({
    url: `company/selectCompanyPartsFour`,
    method: 'get',
    params
  })
}

// 重点部位-天然气调压站-天然气调压站添加接口
export function addCompanyPartsFour(data) {
  return request({
    url: `company/addCompanyPartsFour`,
    method: 'post',
    data
  })
}

// 重点部位-天然气调压站-天然气调压站修改接口
export function updateCompanyPartsFour(data) {
  return request({
    url: `company/updateCompanyPartsFour`,
    method: 'post',
    data
  })
}

// 重点部位-[装置、储罐区、包装车间和产品仓库、天然气调压站]-新增物料-回车搜索MSDS信息接口
export function selectMsdsInfosByKeyword(params) {
  return request({
    url: `company/selectMsdsInfosByKeyword`,
    method: 'get',
    params
  })
}




// 重点部位-天然气调压站-天然气物料信息-添加接口
export function selectNaturalGasMsdsList(params) {
  return request({
    url: `company/selectNaturalGasMsdsList`,
    method: 'get',
    params
  })
}

// 重点部位-天然气调压站-天然气物料信息-添加接口
export function addNaturalGasMsds(data) {
  return request({
    url: `company/addNaturalGasMsds`,
    method: 'post',
    data
  })
}

// 重点部位-天然气调压站-天然气物料信息-修改接口
export function updateNaturalGasMsds(data) {
  return request({
    url: `company/updateNaturalGasMsds`,
    method: 'post',
    data
  })
}

// 重点部位-天然气调压站-天然气物料信息-删除接口
export function delNaturalGasMsds(data) {
  return request({
    url: `company/delNaturalGasMsds?id=${data.id}&naturalGasMsdsId=${data.naturalGasMsdsId}`,
    method: 'post'
  })
}

// 重点部位-罐区物料信息-添加接口
export function addCompanyMsdsStora(data) {
  return request({
    url: `company/addCompanyMsdsStora`,
    method: 'post',
    data
  })
}

// 重点部位-罐区物料信息-修改接口
export function updateCompanyMsdsStora(data) {
  return request({
    url: `company/updateCompanyMsdsStora`,
    method: 'post',
    data
  })
}

// 重点部位-罐区物料信息-删除接口
export function delCompanyMsdsStora(data) {
  return request({
    url: `company/delCompanyMsdsStora?id=${data.id}`,
    method: 'post'
  })
}



// 消防设施-查询当前公司下类别|项目|基本情况列表接口
export function selectCompanyFireDeviceList(params) {
  return request({
    url: `company/selectCompanyFireDeviceList`,
    method: 'get',
    params
  })
}

// 消防设施-请选择消防类型列表接口
export function selectFireDeviceTypeList(params) {
  return request({
    url: `company/selectFireDeviceTypeList`,
    method: 'get',
    params
  })
}

// 消防设施-类别-项目列表接口(该列表前端需缓存)
export function selectFireDeviceItemList(params) {
  return request({
    url: `company/selectFireDeviceItemList`,
    method: 'get',
    params
  })
}

// 消防设施-新增基本情况接口
export function addCompanyFireDevice(data) {
  return request({
    url: `company/addCompanyFireDevice`,
    method: 'post',
    data
  })
}
