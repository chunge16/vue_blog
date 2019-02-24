import request from '@/utile/request'
import URL from './URL'

export default {
  getBlogs ({ page = 1, userId, aIndex }) {
    return request(URL.GET_LIST, 'GET', { page, userId, aIndex })
  },

  getIndexBlogs ({ page = 1 } = { page: 1 }) {
    return this.getBlogs({ page, aIndex: true })
  },

  getBlogsByUserId (userId, { page = 1, aIndex } = { page: 1 }) {
    return this.getBlogs({page, userId, aIndex})
  },

  getDetail ({blogId}) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId))
  },

  updateBlog ({blogId}, {title, content, description, atIndex}) {
    return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
  },

  deleteBlog ({blogId}) {
    return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
  },

  createBlog ({title = '', content = '', description = '', atIndex = false} = {title: '', content: '', description: '', atIndex: false}) {
    return request(URL.CREATE, 'POST', { title, content, description, atIndex })
  }
}
