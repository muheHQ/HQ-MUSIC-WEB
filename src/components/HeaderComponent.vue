<template>
  <el-header class="header">
    <div class="logo">
      <img src="../img/hong.png" alt="Logo">
      <h1 style="margin-left: 4px; font-size: 35px; color: #f4dde0">{{ MUSCINAME }}</h1>
    </div>
    <div class="links">
      <span @click="$router.push('/manage/home')">首页</span>
      <router-link to="/error"><span>推荐</span></router-link>
      <span @click="$router.push('/manage/singer')">歌手</span>

      <span>歌单</span>
    </div>
    <div class="search">
     <el-input
      placeholder="请输入搜索内容"
      prefix-icon="el-icon-search"
      v-model="input">
     </el-input>
    </div>
    <div class="avatar">
      <img src="../img/HQ.jpg" class="avatar-img">
    </div>
  </el-header>
</template>

<script>
import { MUSCINAME } from '@/enums/musicName';
export default {

  data() {
    return {
      input: 'hong',
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #98b579;
  color: #333;
  line-height: 60px;
  padding: 0 20px;
}

.search {
  margin-left: -500px;
}

.avatar-img{
    display: flex;
  align-items: center; /* 垂直居中 */
}

.logo {
  display: flex;
  align-items: center; /* 垂直居中 */
  margin-left: 80px;
}

.logo img {
  max-height: 40px;
  vertical-align: middle; /* 通过vertical-align属性垂直居中 */
}

.links {
  margin-left: -500px;
  
}
.links span {
  margin: 10px;
  cursor: pointer;
}


.avatar-img {
  max-width: 40px;
  border-radius: 50%;
}
</style>