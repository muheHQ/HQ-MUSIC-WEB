<template>
      <div class="carousel">
      <img src="../img/1.png" alt="Carousel Image 1" class="slide">
      <img src="../img/2.png" alt="Carousel Image 2" class="slide">
      <img src="../img/3.png" alt="Carousel Image 3" class="slide">
    </div>
    <!-- <button @click="goToError">跳转到error</button> -->
</template>

<script>

export default {
  mounted() {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    setInterval(() => {
      slides[index].style.opacity = '0';
      index = (index + 1) % slides.length;
      slides[index].style.opacity = '1';
    }, 3000);
  },
  created(){
    console.log("created");
  }
};
</script>

<style>
.carousel {
  position: relative;
  width: 80%;
  height: 30%;
  overflow: hidden;
  text-align: center;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片填充整个容器 */
  transition: opacity 1s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.slide:first-child {
  opacity: 1;
}
</style>