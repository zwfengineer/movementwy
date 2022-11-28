<template>
  <div class="main">
    <!-- 头部 -->
    <Header></Header>
    <!-- 导航菜单 -->
    <!-- <van-tabs v-model="active">
      <van-tab title="推荐" class="{active:indexId==-1}"> </van-tab> -->
    <ul>
      <li
        class="item"
        @click="goRecommend(-1)"
        :class="goodIndex === -1 ? 'active' : ''"
      >
        推荐
      </li>
      <li
        v-for="(item, index) in homeDataRecommend.nav"
        :key="index"
        class="item"
        :class="goodIndex == index ? 'active' : ''"
        @click="goCategory(index, item.extra.operationResource.categoryId)"
      >
        {{ item.extra.operationResource.categoryName }}
      </li>
    </ul>

    <!-- <li
        v-for="(item, index) in homeDataRecommend.nav"
        :key="index"
        class="item"
        :class="goodIndex == index ? 'active' : ''"
        @click="goCategory(index)"
      >
      </li> -->

    <!-- <van-tab
        :title="item.text"
        v-for="(item, index) in homeDataRecommend.nav"
        :key="index"
        @click="goCategory(index)"
      >
      </van-tab> -->
    <!-- </van-tabs> -->
    <p class="line"></p>

    <div class="TJ" v-show="goodIndex == -1">
      <Carousel
        class="carousel"
        :carousel="homeDataRecommend.carousel"
      ></Carousel>
      <!-- 底部提示 -->
      <div class="smallTip">
        <div
          v-for="(item, index) in homeDataRecommend.tip"
          :key="index"
          class="item"
        >
          <img :src="item.icon" alt="" />
          <span class="smallTiptitle">{{ item.desc }}</span>
        </div>
      </div>

      <div class="goods">
        <div
          class="goodsItem"
          v-for="(item, index) in homeDataRecommend.newGoodsList"
          :key="index"
        >
          <img class="goodsImg" :src="item.picUrl" />
          <span class="goodsTitle">{{ item.text }}</span>
        </div>
      </div>
      <div class="newPerson">--新人专享礼--</div>
      <div class="newBox">
        <div class="newBoxLeft">
          <p>新人专享礼包</p>
          <img src="./images/XRZXL.png" alt="" />
          <button>立即领取</button>
        </div>
        <div class="newBoxRight">
          <div class="newBoxRight">
            <div
              class="top"
              v-for="(item, index) in homeDataRecommend.welfare"
              :key="index"
            >
              <img :src="item.showPicUrl" alt="" />
              <p class="p1">{{ item.title }}</p>
              <p class="p2">{{ item.subTitle }}{{ item.tag }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <p class="category">类目热销榜</p>
      <div class="sale" style="fontsize: 14px">
        <div class="saletop">
          <div
            class="saletopLeft"
            v-for="(item, index) in homeDataRecommend.hotSaleT"
            :key="index"
          >
            <span>{{ item.categoryName }}</span>
            <img :src="item.picUrl" alt="" />
          </div>
        </div>
        <div class="salebottom">
          <div
            class="box"
            v-for="item in homeDataRecommend.hotSaleB"
            :key="item"
          >
            <p>{{ item.categoryName }}</p>
            <img :src="item.picUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="by=tn">
          <button>下载APP</button> <button>电脑版</button>
        </div>
        <p>网易公司版权所有</p>
        <p class="p2">食品经营许可证：JY13301080111719</p>
      </div>
    </div>
    <Category v-show="goodIndex != -1" :categoryCarousel="homeDataRecommend.categoryCarousel" :categoryList="homeDataRecommend.categoryList" ></Category>
  </div>
</template>

<script setup>
import Header from "../home/header/index.vue";
import Carousel from "../home/carousel/index.vue";
import { Fragment, onMounted, ref } from "vue";
import { useHomeDataRecommend } from "../../store/home";
import Category from "./Catregory/index.vue";
const goodIndex = ref(-1);
const goodId = ref("");
let homeDataRecommend = useHomeDataRecommend();

onMounted(() => {
  getData();
});

const getData = () => {
  homeDataRecommend.getrecommend();
};
const goRecommend = (index) => {
  goodIndex.value = index;
  homeDataRecommend.getrecommend();
};

const goCategory = (index, id) => {
  goodIndex.value = index;
  goodId.value = id;
  homeDataRecommend.getCategoryList(goodId.value);
};
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 1px solid red;
}

ul {
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-bottom: 10px;
}
li {
  display: inline-block;
  list-style: none;
  font-size: 16px;
  width: 100px;
  margin: 5px 5px;
}
.TJ .smallTip {
  width: 100%;
  height: 3px;
  display: flex;
  justify-content: center;
  line-height: 3px;
  align-items: center;
  margin: 20px 0 10px 0;
}
.TJ .smallTip .item {
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.TJ .smallTipimg {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 5px;
}
.TJ .smallTiptitle {
  font-size: 12px;
}
.TJ .goods {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
}
.TJ .goodsItem {
  width: 17%;
  display: flex;
  flex-direction: column;
  margin: 5rpx 0;
  padding: 10rpx;
  box-sizing: border-box;
  margin: 5px;
  text-align: center;
}
.TJ .goodsImg {
  width: 100rpx;
  height: 100rpx;
  border-radius: 20px;
}
.TJ .goodsTitle {
  display: inline-block;
  width: 100rpx;
  height: 20px;
  font-size: 12px;
}

.TJ .firstDecount {
  box-sizing: border-box;
  background-color: #bb2c08;
  width: 100%;
  height: 15px;
  border-radius: 20px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
}
.TJ .textBox {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.TJ .text {
  display: block;
}
.TJ .newPerson {
  width: 375px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
}
.TJ .newBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 300px;
  box-sizing: border-box;
}
.TJ .newBoxLeft {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 300px;
  justify-content: center;
  margin-right: 10px;
  background-color: #f9f3e4;
}
.TJ .newBoxLeft p {
  margin-left: 10px;
  font-size: 16px;
}
.TJ .newBoxLeft img {
  margin-left: 20px;
  width: 150px;
  height: 150px;
}
.TJ .newBoxLeft button {
  margin-left: 20px;
  margin-top: 10px;
  font-size: 14px;
  width: 80px;
  height: 30px;
}
.TJ .newBoxRight {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
}
.TJ .newBoxRight .top {
  position: relative;
  width: 170px;
  height: 140px;
  margin: 3px 10px;
  background-color: #f9f3e4;
}
.TJ .newBoxRight img {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 100px;
  height: 150px;
}
.TJ .newBoxRight .p1 {
  font-size: 16px;
  position: absolute;
  top: 10px;
  left: 10px;
}
.TJ .newBoxRight .p2 {
  display: inline-block;
  font-size: 14px;
  position: absolute;
  top: 30px;
  left: 10px;
}
.TJ .category {
  font-size: 16px;
}
.TJ .sale {
  width: 100%px;
  box-sizing: border-box;
}
.TJ .saletop {
  display: flex;
  justify-content: center;
  width: 375px;
  height: 120px;
}
.TJ .saletop .saletopLeft {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #f9f3e4;
  margin-left: 10px;
}
.TJ .saletop .saletopLeft img {
  width: 40px;
  height: 80px;
  margin-left: 5px;
}
.TJ .saletop .saletopLeft span {
  font-size: 16px;
}
.TJ .salebottom {
  margin: 10px 0 0 0;
  width: 375px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.TJ .salebottom .box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  height: 90px;
  background-color: #f5f5f5;
  margin: 2px;
  text-align: center;
}
.TJ .salebottom .box p {
  font-size: 14px;
  margin: 5px;
}
.TJ .salebottom .box img {
  width: 50px;
  height: 50px;
}
.TJ .footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  background-color: #ccc;
  width: 375px;
  height: 150px;
  font-size: 16px;
  margin: 10px 0 30px 0;
  box-sizing: border-box;
}
.TJ .footer button {
  width: 100px;
  height: 30px;
  margin: 20px 5px 0;
}
.TJ .footer p {
  margin: 15px auto;
}
.TJ .footer .p2 {
  margin: -10px;
}
</style>
