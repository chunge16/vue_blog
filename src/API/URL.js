
const URL = {
  // 用户注册
  REGISTER: '/auth/register',
  // 用户登录
  LOGIN: '/auth/login',
  // 注销登录
  LOGOUT: '/auth/logout',
  // 获取用户信息
  GET_INFO: '/auth',
  // 获取博客列表
  GET_LIST: '/blog',
  // 获取id 为 blogId 的博客详情
  GET_DETAIL: '/blog/:blogId',
  // 创建博客
  CREATE: '/blog',
  // 更新博客
  UPDATE: '/blog/:blogId',
  // 删除博客
  DELETE: '/blog/:blogId'

}

export default URL
