<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>若愚</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>若愚</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import request from '@/utile/request.js'
import auth from '@/API/auth.js'
import blog from '@/API/blog.js'
window.request = request
window.auth = auth
window.blog = blog

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    onClick1 () {
      this.$message.error('错了哦，这是一条错误消息')
    },

    onClick2 () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message.success('点了确定')
        }
      })
    },
    onClick3 () {
      // this.$store.commit('setName', 'liu')
      this.setName('liu2')
    },
    ...mapMutations(['increment', 'setName'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
  }
}
</script>

<style scoped lang="less">
  @color: red;
  h1 {
    color: @color;
  }
</style>
