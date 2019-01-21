<template>
  <div>
    <h1>首页</h1>
    <p>{{msg}}</p>
    <el-button @click="handless">默认按钮</el-button>
  </div>
</template>

<script>
import request from '@/utile/request.js'
window.request = request
export default {
  name: 'index',
  data () {
    return {
      msg: '欢迎你的到了'
    }
  },
  methods: {
    handless () {
      this.$message('sdfsdf')
    }
  }
}
</script>

<style scoped lang="less">
  @color: red;
  h1 {
    color: @color;
  }
</style>
