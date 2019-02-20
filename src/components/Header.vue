<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button >立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>
<script>
import {mapState, mapActions } from 'vuex'
import auth from '@/api/auth'
window.auth = auth
export default {
  name: 'Header',
  data () {
    return {}
  },
  computed: {
    ...mapState('auth', ['isLogin', 'user'])
    // ...mapGetters('auth', ['isLogin', 'user'])
  },
  methods: {
    ...mapActions('auth', ['checkLogin', 'logout']),
    onLogout () {
      this.logout()
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
