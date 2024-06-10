<template>
  <!-- 轮播图  -->
  <el-carousel v-if = "swiperList.length" type="card" class="el-carousel-style" height="10vw" :interval="4000">
    <el-carousel-item v-for="(item,index) in swiperList" :key="index" style="height: 100%;">
      <img :src="HttpManager.attachImageUrl(item.picture)" alt="">
      </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HttpManager } from '@/api'
import {type ResponseBody} from '@/types'
import { type SwiperItem } from '@/types/SwiperItem';


// 轮播图
const swiperList = ref<SwiperItem[]>([]); 
// 歌手
const singerList = ref([])


try {
  HttpManager.getBannerList().then((res)=>{
    console.log(res);

  swiperList.value = (res as ResponseBody).data.sort();
  console.log("-------------- ");
  console.log(swiperList.value);
})
} catch (error) {
  console.log(error)
}
</script>

<style scoped>
/* 添加样式到这里 */

/* 设置轮播图容器的样式 */
.el-carousel-style {
  width: 95%;

  /* margin: auto; */
  /* padding-top: 2px; */
  /* 添加水平居中样式 */
  text-align: center; 
}

.swiper-container:deep(.el-carousel__indicators.el-carousel__indicators--outside) {
  display: inline-block;
  transform: translateX(30vw);
}


/* 设置轮播项中图片的样式 */
/* .el-carousel-item img {
  width: 100%;
} */
</style>