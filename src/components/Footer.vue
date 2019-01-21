<template>
  <footer>
    <p>{{msg}}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: '© xiedaimala.com 2018 wechat: xiedaimala01'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/base";
  footer {
    background-color: #f5f5f5;
    text-align: center;
    color: @mainTextColor;
    font-size: 13px;
  }
</style>
