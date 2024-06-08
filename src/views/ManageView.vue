<template>
  <el-container class="container">
    <Header/>
    <Main>
      <!-- <router-view></router-view> -->
    </Main>
    <Footer/>
  </el-container>
</template>

<script>
import Footer from '../components/FooterComponent.vue'
import Header from '../components/HeaderComponent.vue'
import Main from '../components/MainComponent.vue'
export default {
  components: {
    Footer,
    Header,
    Main
  },
  created() {
  console.log('ManageView created');
}

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 使容器铺满整个视口 */
}
</style>