import request from '../utils/request'

// 组长获取抽检数据
export function drawlots (data) {
  return request({
    url: 'GroupLeaderOperation/drawlots',
    method: 'post',
    data
  })
}
// 组长提交数据
export function submitData (data) {
  return request({
    url: 'GroupLeaderOperation/submitData',
    method: 'post',
    data
  })
}
