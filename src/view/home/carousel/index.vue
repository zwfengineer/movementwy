<template>
  <div class="carousel">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in carousel" :key="index"
        ><img :src="item.picUrl" 
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
export default {
  name: "carousel",
};
</script>
<script setup lang="ts">
defineProps(["carousel"]);
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 185px;
}
.my-swipe .van-swipe-item {
  width: 100%;
  height: 185px;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
  display: block;
}
</style>
