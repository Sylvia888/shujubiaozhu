import request from '@/utils/request'
const apiUrl = '/factory'
export default {

  // selectFactoryInfoPage: params => request.get(apiUrl + '/selectFactoryInfoPage', {
  //   params
  // }),

  // selectFactoryInfoDetail: params => request.get(apiUrl + '/selectFactoryInfoDetail', {
  //   params
  // }),

  // 公司
  companyInfo: {
    // 一厂一策列表
    getList: params => request.get(apiUrl + '/selectFactoryInfoPage', {
      params
    }),
    // 公司概况详情
    getDetail: params => request.get(apiUrl + '/selectFactoryInfoDetail', {
      params
    }),
    add: params => request.post(apiUrl + '/addFactoryInfo', params),
    update: params => request.post(apiUrl + '/updateFactoryInfo', params),
    delete: params => request.post(apiUrl + `/delFactoryInfo?id=${params.id}`)
  },
  // 厂区基本情况
  factoryBase: {
    getList: params => request.get(apiUrl + '/selectFactoryBase', {
      params
    }),
    //详情
    getDetail: params => request.get(apiUrl + '/selectFactoryBaseDetail', {
      params
    }),
    add: params => request.post(apiUrl + '/addFactoryBase', params),
    update: params => request.post(apiUrl + '/updateFactoryBase', params),
    delete: params => request.post(apiUrl + `/delFactoryBase?id=${params.id}`)
  },
  // 重点部位列表
  factoryParts: {
    // 重点部位列表
    getList: params => request.get(apiUrl + '/selectFactoryParts', {
      params
    }),
    // 罐区
    getPartsTank: params => request.get(apiUrl + '/selectFactoryPartsTank', {
      params
    }),
    // 罐区概况列表
    getPartsTankInfoList: params => request.get(apiUrl + '/selectFactoryPartsTankInfoList', {
      params
    }),
    // 罐区基本细信息
    getPartsTankInfoDetail: params => request.get(apiUrl + '/selectFactoryPartsTankInfoDetail', {
      params
    }),

    // 仓库
    getPartsWarehouse: params => request.get(apiUrl + '/selectFactoryPartsWarehouse', {
      params
    }),
    // 仓库信息列表
    getPartsWarehouseInfoList: params => request.get(apiUrl + '/selectFactoryPartsWarehouseInfoList', {
      params
    }),
    // 重点部位-[装置|罐区|仓库]-响应流程-查询接口
    getPartsProcess: params => request.get(apiUrl + '/selectFactoryProcess', {
      params
    }),
    // 重点部位-[装置|罐区|仓库]-工艺处置人员名单及职责-详细接口
    getPeopleDutyList: params => request.get(apiUrl + '/selectFactoryPeopleDutyList', {
      params
    }),
    // 重点部位-[装置|罐区|仓库]-作战信息-查询接口
    getFightInfo: params => request.get(apiUrl + '/selectFactoryFightInfo', {
      params
    }),
    // 重点部位-[罐区-重点部位概况、仓库]-主要物料-查询列表接口
    getMaterialList: params => request.get(apiUrl + '/selectFactoryWarehouseMaterialList', {
      params
    }),
    // 重点部位-[罐区-重点部位概况、仓库]-主要物料-查询详情接口
    getMaterialDetail: params => request.get(apiUrl + '/selectFactoryWarehouseMaterialDetail', {
      params
    }),

    /* 装置 */
    // 重点部位-装置-重点部位概况-查询接口
    getPartsDevice: params => request.get(apiUrl + '/selectFactoryPartsDevice', {
      params
    }),


    // 添加重点部位
    add: params => request.post(apiUrl + '/addFactoryParts', params),
    // 添加装置重点部位概况
    addPartsDevice: params => request.post(apiUrl + '/addFactoryPartsDevice', params),
    // 添加罐区重点部位概况
    addPartsTank: params => request.post(apiUrl + '/addFactoryPartsTank', params),
    // 添加仓库重点部位概况
    addPartsWarehouse: params => request.post(apiUrl + '/addFactoryPartsWarehouse', params),
    // 重点部位-仓库-包装车间和产品仓库信息-添加接口
    addPartsWarehouseInfo: params => request.post(apiUrl + '/addFactoryPartsWarehouseInfo', params),
    // 添加酒店重点部位概况
    addPartsHotel: params => request.post(apiUrl + '/addFactoryPartsHotel', params),
    // 添加罐区基本信息
    addTankInfo: params => request.post(apiUrl + '/addFactoryPartsTankInfo', params),
    // 重点部位-[装置|罐区|仓库]-响应流程-添加接口
    addPartsProcess: params => request.post(apiUrl + '/addFactoryProcess', params),
    // 重点部位-[装置|罐区|仓库]-工艺处置人员名单及职责-添加接口
    addPeopleDuty: params => request.post(apiUrl + '/addFactoryPeopleDuty', params),
    // 重点部位-[装置|罐区|仓库]-作战信息-添加接口
    addFightInfo: params => request.post(apiUrl + '/addFactoryFightInfo', params),
    // 重点部位-[罐区-重点部位概况、仓库]-主要物料-添加接口
    addMaterialInfo: params => request.post(apiUrl + '/addFactoryWarehouseMaterial', params),

    // 修改重点部位概况-装置
    updatePartsDevice: params => request.post(apiUrl + '/updateFactoryPartsDevice', params),
    // 修改重点部位概况-罐区
    updatePartsTank: params => request.post(apiUrl + '/updateFactoryPartsTank', params),
    // 修改重点部位概况-仓库
    updatePartsWarehouse: params => request.post(apiUrl + '/updateFactoryPartsWarehouse', params),
    // 重点部位-仓库-包装车间和产品仓库信息-修改接口
    updatePartsWarehouseInfo: params => request.post(apiUrl + '/updateFactoryPartsWarehouseInfo', params),
    // 修改重点部位概况-酒店
    updatePartsHotel: params => request.post(apiUrl + '/updateFactoryPartsHotel', params),
    // 修改罐区基本信息
    updateTankInfo: params => request.post(apiUrl + '/updateFactoryPartsTankInfo', params),
    // 重点部位-[装置|罐区|仓库]-响应流程-修改接口
    updatePartsProcess: params => request.post(apiUrl + '/updateFactoryProcess', params),
    // 重点部位-[装置|罐区|仓库]-工艺处置人员名单及职责-修改接口
    updatePeopleDuty: params => request.post(apiUrl + '/updateFactoryPeopleDuty', params),
    // 重点部位-[装置|罐区|仓库]-作战信息-修改接口
    updateFightInfo: params => request.post(apiUrl + '/updateFactoryFightInfo', params),
    // 重点部位-[罐区-重点部位概况、仓库]-主要物料-修改接口
    updateMaterialInfo: params => request.post(apiUrl + '/updateFactoryWarehouseMaterial', params),

    delete: params => request.post(apiUrl + `/delFactoryParts?id=${params.id}`),

    deletePartsTankInfo: params => request.post(apiUrl + `/delFactoryPartsTankInfo?id=${params.id}`),
    // 重点部位-[装置|罐区|仓库]-响应流程-删除接口
    deletePartsProcess: params => request.post(apiUrl + `/delFactoryProcess?id=${params.id}`),
    // 重点部位-[装置|罐区|仓库]-工艺处置人员名单及职责-删除接口
    deletePeopleDuty: params => request.post(apiUrl + `/delFactoryPeopleDuty?id=${params.id}`),
    // 重点部位-[罐区-重点部位概况、仓库]-主要物料-删除接口
    deleteMaterialInfo: params => request.post(apiUrl + `/delFactoryWarehouseMaterial?id=${params.id}`),
    // 重点部位-仓库-包装车间和产品仓库信息-删除接口
    deleteWarehouseInfo: params => request.post(apiUrl + `/delFactoryPartsWarehouseInfo?id=${params.id}`),
  },
  // 企业应急救援体系
  rescueSystem: {
    getDetail: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystem`, {
      params
    }),
    getDutyList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemDutyList`, {
      params
    }),
    getEmergencyList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemEmergencyList`, {
      params
    }),
    getExpertList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemExpertList`, {
      params
    }),
    getFirebrigadeList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemFirebrigadeList`, {
      params
    }),
    getFireStationList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemFireStationList`, {
      params
    }),
    getMaterialList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemMaterialList`, {
      params
    }),
    getPeopleList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemPeopleList`, {
      params
    }),
    getRescueList: params => request.get(apiUrl + `/selectFactoryEnterpriseRescueSystemRescueList`, {
      params
    }),
    // 新增
    add: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystem`, params),
    addDuty: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemDuty`, params),
    addEmergency: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemEmergency`, params),
    addExpert: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemExpert`, params),
    addFirebrigade: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemFirebrigade`, params),
    addFireStation: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemFireStation`, params),
    addMaterial: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemMaterial`, params),
    addPeople: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemPeople`, params),
    addRescue: params => request.post(apiUrl + `/addFactoryEnterpriseRescueSystemRescue`, params),
    // 修改
    update: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystem`, params),
    updateDuty: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemDuty`, params),
    updateEmergency: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemEmergency`, params),
    updateExpert: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemExpert`, params),
    updateFirebrigade: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemFirebrigade`, params),
    updateFireStation: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemFireStation`, params),
    updateMaterial: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemMaterial`, params),
    updatePeople: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemPeople`, params),
    updateRescue: params => request.post(apiUrl + `/updateFactoryEnterpriseRescueSystemRescue`, params),
    // 删除
    deleteDuty: params => request.post(apiUrl + `/delFactoryEnterpriseRescueSystemDuty?id=${params.id}`),
    deleteEmergency: params => request.post(apiUrl + `/delFactoryEnterpriseRescueSystemEmergency?id=${params.id}`),
    deleteExpert: params => request.post(apiUrl + `/delFactoryEnterpriseRescueSystemExpert?id=${params.id}`),
    deleteFirebrigade: params => request.post(apiUrl + `/delFactoryEnterpriseRescueSystemFirebrigade?id=${params.id}`),
    deleteFireStation: params => request.post(apiUrl + `/delFactoryEnterpriseRescueSystemFireStation?id=${params.id}`),
    deleteMaterial: params => request.post(apiUrl + `/delFactoryEnterpriseRescueSystemMaterial?id=${params.id}`),
    deletePeople: params => request.post(apiUrl + `/delFactoryEnterpriseRescueSystemPeople?id=${params.id}`),
    deleteRescue: params => request.post(apiUrl + `/deleFactoryEnterpriseRescueSystemRescue?id=${params.id}`),
  },
  warningInfo: {
    getList: params => request.get(apiUrl + `/selectFactoryWarningList`, {
      params
    }),
    add: params => request.post(apiUrl + `/addFactoryWarning`, params),
    update: params => request.post(apiUrl + `/updateFactoryWarning`, params),
    delete: params => request.post(apiUrl + `/delFactoryWarning?id=${params.id}`)
  }
}
