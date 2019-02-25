<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in newBlogs" :to="`/detail/${blog.id}`" :key="blog.id">
        <router-link :to="`/user/${blog.user.id}`" class="avatar">
          <figure>
            <img :src="blog.user.avatar" alt="">
            <figcaption>{{blog.user.username}}</figcaption>
          </figure>
        </router-link>
        <h3>{{blog.title}}<span>{{blog.relativeAt}}</span></h3>
        <p>{{blog.description}}</p>
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
import moment from 'moment'
import blog from '@/API/blog'

export default {
  name: 'index',
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created () {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({page: this.page}).then(res => {
      loading.close()
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },
  computed: {
    newBlogs: function () {
      let newBlogs = this.blogs.map((item) => {
        item.relativeAt = moment(item.createdAt).fromNow()
        return item
      })
      return newBlogs
    }
  },
  methods: {
    handleCurrentChange (val) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      blog.getIndexBlogs({page: val}).then(res => {
        loading.close()
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({
          path: '/',
          query: {page: val}
        })
      }).catch(() => {
        loading.close()
      })
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/base";

  #index {

    .item {
      display: grid;
      grid: auto auto / 80px 1fr;
      margin: 20px 0;

      .avatar {
        grid-column: 1;
        grid-row: 1 / span 2;
        justify-self: center;
        align-self: center;
        margin-left: 0;
        text-align: center;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        figure {
          margin: 0;
        }

        figcaption {
          margin: 0;
          font-size: 12px;
          color: @textLighterColor;
        }
      }

      h3 {
        grid-column: 2;
        grid-row: 1;

        &>span {
          margin-left: 10px;
          color: @textLighterColor;
          font-size: 12px;
          font-weight: normal;
        }
      }

      p {
        grid-column: 2;
        grid-row: 2;
        margin-top: 0;
      }

    }
    .pagination {
      display: grid;
      justify-items: center;
    }

  }
</style>
