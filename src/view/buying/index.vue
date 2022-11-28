<template>
  <div class="pay" style="background-color: #eee">
    <Header></Header>
    <div class="swiperTab-container">
      <div class="swiperTab-title">
        <img src="./images/buying/1.png" class="z-img" />
        <div class="y-text">严选好物 用心生活</div>
        <img src="./images/buying/2.png" class="b-img" />
      </div>
      <div class="swiper">
        <el-carousel
          class="my-swipe"
          arrow="never"
          trigger="hover"
          color="#1e1e1e"
        >
          <el-carousel-item v-for="(item, index) in 1" :key="index">
            <div class="swipe_slid">
              <a
                href="javascript:;"
                v-for="(item, index) in buyStore.buyinglb"
                :key="index"
              >
                <div class="img">
                  <img :src="item.picUrl" />
                </div>
                <div class="mainText">{{ item.mainTitle }}</div>
                <div class="descText">{{ item.viceTitle }}</div>
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="wrappers">
      <div class="lookList">
        <div class="lookColumn" v-for="(item, index) in 2" :key="index">
          <section class="innerWrapper">
            <div
              class="pb"
              href="javascript:;"
              v-for="(item, key, index) in buyStore.buyingpb.result"
              :key="index"
            >
              <a
                href="javascript:;"
                v-for="(itema, index) in item.topics"
                :key="index"
              >
                <img class="first_img" :src="itema.picUrl" />
                <div class="first">{{ itema.title }}</div>
                <div class="second">
                  <div class="left_div">
                    <img class="m-userpic" src="./images/buying/4.png" alt="" />
                    <span class="m-userName">{{ itema.nickname }}</span>
                  </div>
                  <div class="right_div">
                    <img src="./images/buying/5.png" alt="" />
                    <span style="color: #7f7f7f">{{
                      itema.readCount
                    }}</span>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>

        <!-- <div class="lookColumn">
          <section class="innerWrapper" v-for="(item, index) in 3" :key="index">
            <img class="first_img" src="./images/buying/1.png" alt="" />
            <div class="first">必买好五必买好五必买好五必买好五必买好五</div>
            <div class="second">
              <div class="left_div">
                <img class="m-userpic" src="./images/buying/4.png" alt="" />
                <span class="m-userName">毫无打赏</span>
              </div>
              <div class="right_div">
                <img src="./images/buying/5.png" alt="" />
                <span style="color: #7f7f7f">333</span>
              </div>
            </div>
          </section>
        </div> -->

        <!-- <div class="lookColumn" v-for="(item,index) in buyStore.buyingpb" :key="index">
          <section class="innerWrapper">
            <a href="javascript:;">
              <img class="first_img" :src="item.look.picUrl" :height="item.look.appBanHeight / 8"/>
            </a>
            
            <div class="first">{{item.topics[0].title}}</div>
            <div class="second">
              <div class="left_div">
                <img
                  class="m-userpic"
                  :src="item.look.avatar"
                />
                <span class="m-userName">{{item.look.nickname}}</span>
              </div>
              <div class="right_div">
                <img src="./images/pay/5.png" alt="" />
                <span style="color: #7f7f7f">{{item.topics.readCount}}</span>
              </div>
            </div>
          </section>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { usebuyStore } from "../../store/buying";

import { reqBuy2 } from "../../api/buying/buying";
console.log(123, reqBuy2());

let buyStore = usebuyStore();
onMounted(() => {
  buyStore.getListbuy();
  buyStore.getList1buy();
});
console.log(buyStore);
</script>

<style scoped>
.pay .row {
  width: 375px;
  height: 50px;
}
.pay .swiperTab-container {
  position: relative;
  padding-top: 100px;
  background: #eee;
}
.pay .swiperTab-container .swiperTab-title {
  position: absolute;
  top: 50px;
  z-index: 1;
}
.pay .swiperTab-container .swiperTab-title .z-img {
  position: absolute;
  width: 65px;
  height: auto;
  top: 30px;
  left: 6px;
  z-index: 2;
}
.pay .swiperTab-container .swiperTab-title .y-text {
  font-size: 14px;
  line-height: 22px;
  height: 22px;
  position: absolute;
  left: 73px;
  top: 40px;
  color: #fff;
}
.pay .swiperTab-container .swiperTab-title .b-img {
  width: 375px;
  height: auto;
}
.pay .swiperTab-container .swiper .my-swipe {
  position: relative;
  z-index: 3;
  width: 355px;
  height: 270px;
  background: #fff;
  border-radius: 8px;
  margin: 18px auto 0;
}

.pay .swiperTab-container .swiper .my-swipe .swipe_slid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
}

.pay .swiperTab-container .swiper .my-swipe .swipe_slid a {
  flex: 25%;
  display: inline-block;
  width: 84px;
  height: 100.5px;
  margin: 20px 0 0 0;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a .img {
  margin: 0 auto;
  width: 60px;
  height: 60px;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a .img img{
  margin:0 auto;
  width: 60px;
  height: 60px;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a .mainText {
  width: 84px;
  height: 20px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 3px 0;
  line-height: 20px;
  color: #000;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a .descText {
  width: 84px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  font-size: 10px;
  color: #999999;
}
.pay .comments {
  display: flex;
}
.pay .wrappers .lookList {
  display: flex;
  justify-content: space-between;
  background-color: #eeeeee;
  margin: 15px 10px 50px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.pay .wrappers .lookList .innerWrapper {
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  width: 172.5px;
}
.pb {
  float: left;
}
.pay .wrappers .lookList .innerWrapper .first_img {
  border-radius: 8px;
  width: 172.5px;
}
.pay .wrappers .lookList .innerWrapper .first {
  width: 171.5px;
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 12px;
}
.pay .wrappers .lookList .innerWrapper .second {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  box-sizing: border-box;
  width: 100%;
}
.pay .wrappers .lookList .innerWrapper .second .left_div {
  display: flex;
  align-items: center;
}
.pay .wrappers .lookList .innerWrapper .second .left_div .m-userpic {
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 50%;
  width: 22px;
  height: 22px;
}
.pay .wrappers .lookList .innerWrapper .second .left_div .m-userName {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #7f7f7f;
  height: 24px;
  line-height: 24px;
  margin-left: 4px;
}
.pay .wrappers .lookList .innerWrapper .second .right_div {
  width: 35px;
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 10px;
}
.pay .wrappers .lookList .innerWrapper .second .right_div img {
  width: 16px;
  height: 16px;
}
::v-deep .el-carousel__container {
  height: 100%;
}
</style>
