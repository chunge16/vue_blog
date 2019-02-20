<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=3></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=20></el-input>
    <p class="msg">限30个字</p>
    <el-button>确定</el-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/base.less";

  #edit, #create {
    padding-bottom: 30px;

    h1 {
      text-align: center;
    }

    .msg {
      text-align: right;
      font-size: 12px;
      color: @textLighterColor;
    }
  }
</style>
