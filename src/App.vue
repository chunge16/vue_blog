<template>
  <div id="app">
    <Header id="header"/>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import "assets/common.less";
  #app {
    display: grid;
    grid-template-columns: 12% auto 12%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header header header"
                       ". main ."
                        "footer footer footer";
    height: 100%;
  }

  #header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }

  #main {
    grid-area: main;
  }

  #footer {
    grid-area: footer;
    padding: 20px 12%;
  }

</style>
