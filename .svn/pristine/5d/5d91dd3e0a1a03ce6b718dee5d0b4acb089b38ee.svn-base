import request from '@/utils/request'

// 查询数据库版本
export function selectDB() {
  return request({
    url: 'common/selectDB'
  })
}

// 发布数据版本
export function publishDB() {
  return request({
    url: 'common/publishDB',
    method: 'post'
  })
}

//  获取用户列表接口
export function selectUserPage(pageIndex) {
  return request({
    url: 'user/selectUserPage',
    params: {
      pageIndex
    }
  })
}

// 修改用户信息接口
export function updateUser(data) {
  return request({
    url: 'user/updateUser',
    method: 'post',
    data
  })
}

// 新增用户
export function addUser(data) {
  return request({
    url: 'user/addUser',
    method: 'post',
    data
  })
}

// 删除用户
export function delUser(id) {
  return request({
    url: 'user/delUser?id=' + id,
    method: 'post'
  })
}
