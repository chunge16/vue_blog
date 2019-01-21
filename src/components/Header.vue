<template>
  <header :class="{'no-login': !isLogin, 'login': isLogin}">
    <template v-if="isLogin">
      <h1>LET'S SHARE</h1>
      <i class="edit el-icon-edit"></i>
      <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
    </template>
    <template v-else>
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <el-button>注册</el-button>
        <el-button>登录</el-button>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isLogin: false
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/base";

  header.no-login {
    padding: 0 12% 30px 12%;
    background: @themeColor;
    display: grid;
    justify-items: center;
  }
  header.no-login h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }
  header.no-login p {
    margin: 15px 0 0 0;
    color: #fff;
  }
  header.no-login .btns {
    margin-top: 20px;
  }
  header.no-login button {
    margin: 20px 5px 0;
  }
  header.login {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: @themeColor;
    color: #fff;
  }
  header.login h1 {
    margin: 0;
    padding: 0;
    font-size: 40px;
    text-transform: uppercase;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  header.login h1 a {
    color: #fff;
  }
  header.login .edit {
    color: #fff;
    font-size: 30px;
  }
  header.login .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
  header.login .user {
    position: relative;
  }
  header.login .user ul {
    display: none;
    position: absolute;
    right: 0;
    list-style: none;
    border: 1px solid #eaeaea;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
  header.login .user ul a {
    text-decoration: none;
    color: #333;
    font-size: 12px;
    display: block;
    padding: 5px 10px;
  }
  header.login .user ul a:hover {
    background-color: #eaeaea;
  }
  header.login .user:hover ul {
    display: block;
  }
</style>
