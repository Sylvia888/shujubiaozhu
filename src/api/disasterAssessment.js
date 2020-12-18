import request from '@/utils/request'

// 灾情评估列表接口
export function selectDisasterPage(params) {
  return request({
    url: 'disaster/selectDisasterPage',
    params
  })
}

// 灾情评估列表接口
export function selectDisasterById(id) {
  return request({
    url: 'disaster/selectDisasterById?id=' + id ,
  })
}

// 删除灾情评估接口
export function delDisaster(id) {
  return request({
    url: 'disaster/delDisaster',
    method: 'post'
  })
}
