<template>
  <div id="my">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in newBlogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{blog.date.day}}</span>
          <span class="month">{{blog.date.month}}</span>
          <span class="year">{{blog.date.year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
        <div class="actions">
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="page"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script>
import blog from '@/API/blog'
import {mapState} from 'vuex'
export default {
  name: 'my',
  data () {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  created () {
    this.page = parseInt(this.$route.query.page) || 1
    let userId = this.user.id
    blog.getBlogsByUserId(userId, {page: this.page}).then(res => {
      this.page = res.page
      this.total = res.total
      this.blogs = res.data
    })
  },
  computed: {
    ...mapState('auth', ['user']),
    newBlogs () {
      let blogs = this.blogs.map(blog => {
        blog.date = this.splitDate(blog.createdAt)
        return blog
      })
      return blogs
    }
  },
  methods: {
    splitDate (dateStr) {
      let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
      return {
        day: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    handleCurrentChange (val) {
      let userId = this.user.id
      blog.getBlogsByUserId(userId, {page: val}).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({
          path: '/my',
          query: {page: val}
        })
      })
    },
    async onDelete (blogId) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({ blogId })
      this.$message.success('删除成功')
      this.blogs = this.blogs.filter(blog => blog.id !== blogId)
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/base.less";

  #my{

    .user-info {
      display: grid;
      grid: auto auto / 80px 1fr;

      margin-top: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ebebeb;

      .avatar {
        grid-column: 1;
        grid-row: 1 / span 2;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }

      h3 {
        grid-column: 2;
        grid-row: 1;
        margin-top: 10px;
      }
    }

    .item {
      display: grid;
      grid: auto  auto auto / 80px 1fr;
      margin: 20px 0;

      .date {
        grid-column: 1;
        grid-row: 1 / span 3;
        justify-self: center;
        text-align: center;

        span {
          display: block;
          color: @textLighterColor;
        }

        .day {
          font-size: 40px;
        }
      }

      h3 {
        grid-column: 2;
        grid-row: 1;
      }

      p {
        grid-column: 2;
        grid-row: 2;
        margin-top: 0;
      }

      .actions {
        grid-column: 2;
        grid-row: 3;
        font-size: 12px;

        a {
          color: @themeLighterColor;
        }

      }

    }

    .pagination {
    display: grid;
    justify-items: center;
  }

  }
</style>
