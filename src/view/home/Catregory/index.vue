<template>
  <div>
    <div class="carousel">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in categoryCarousel" :key="index"
          ><img :src="item.picUrl"
        /></van-swipe-item>
      </van-swipe>
    </div>

    <div class="mainItem" v-for="item in 3" :key="item">
      <p class="mainItemP1">{{categoryList.category||{}.name}}</p>
      <p class="mainItemP2">{{categoryList.category||{}.frontName}}</p>
      <div class="mainItemBox">
        <div class="good" v-for="(item, index) in categoryList.itemList" :key="index">
          <img :src="item.listPicUrl" alt="" />
          <p class="p1">{{ item.simpleDesc }}</p>
          <p class="p2">到手价￥<span>{{ item.sortOriginPrice }}</span></p>
          <button>满<span>99</span>减<span>22</span>元</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Category",
};
</script>

<script setup lang="ts">

defineProps(['categoryCarousel','categoryList'])

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
.mainItem {
  margin-top: 12px;
  text-align: center;
}
.mainItemP1 {
  font-size: 16px;
  font-weight: 700;
}
.mainItemP2 {
  font-size: 14px;
  margin-top: 5px;
}
.mainItemBox {
  display: flex;
  width: 100%;
  min-height: 300px;
  background-color: pink;

  flex-wrap: wrap;
}
.good {
  width: 50%;
  margin-top: 10px;
}
.good img {
  width: 180px;
  height: 180px;
}
.good .p1 {
  font-size: 22px;
}
.good .p2 {
  font-size: 16px; 
  margin-bottom: -10px;
}
.good button {
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 25px;
  font-size: 16px;
 
}
</style>
