<template>
  <div class="pay" style="background-color: #eee">
    <Header></Header>
    <div class="swiperTab-container">
      <div class="swiperTab-title">
        <img src="./images/pay/1.png" class="z-img" />
        <div class="y-text">严选好物 用心生活</div>
        <img src="./images/pay/2.png" class="b-img" />
      </div>
      <div class="swiper">
        <!-- <van-swipe class="my-swipe" indicator-color="red">
          <van-swipe-item v-for="(item, index) in 2" :key="index">
            <div class="swipe_slid">
              <a href="javascript:;" >
                <div class="img">
                  <img
                  :src="item.columnUrl"
                    style="width: 60px; height: 60px"
                  />
                </div>
                <div class="mainText"></div>
                <div class="descText"></div>
              </a>
            </div>
          </van-swipe-item>
        </van-swipe> -->

        <el-carousel
          class="my-swipe"
          indicator-position="outside"
          arrow="never"
          autoplay="false"
          trigger="click"
          loop="false"
        >
          <el-carousel-item v-for="item in 4" :key="item" class="swipe_slid">
            <div class="swipe_slid">
              <a href="javascript:;">
                <div class="img">
                  <img :src="item.columnUrl" style="width:60px; height:60px" />
                </div>
                <div class="mainText"></div>
                <div class="descText"></div>
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="wrappers">
      <div class="lookList">
        <div class="lookColumn">
          <section class="innerWrapper" v-for="(item, index) in 3" :key="index">
            <img class="first_img" src="./images/pay/1.png" alt="" />
            <div class="first">买好五必买好五必买好五</div>
            <div class="second">
              <div class="left_div">
                <img class="m-userpic" src="./images/pay/4.png" alt="" />
                <span class="m-userName">毫无打赏</span>
              </div>
              <div class="right_div">
                <img src="./images/pay/5.png" alt="" />
                <span style="color: #7f7f7f">333</span>
              </div>
            </div>
          </section>
        </div>
        <div class="lookColumn">
          <section class="innerWrapper" v-for="(item, index) in 3" :key="index">
            <img class="first_img" src="./images/pay/1.png" alt="" />
            <div class="first">必买好五必买好五必买好五必买好五必买好五</div>
            <div class="second">
              <div class="left_div">
                <img class="m-userpic" src="./images/pay/4.png" alt="" />
                <span class="m-userName">毫无打赏</span>
              </div>
              <div class="right_div">
                <img src="./images/pay/5.png" alt="" />
                <span style="color: #7f7f7f">333</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// import {usepayStore} from '../../stores/pay'
// let payStore=usepayStore();
let page = ref("2");
let size = ref("2");
// let params=ref({
//     page:2,
//     size:2
// })
onMounted(() => {
  // payStore.getListpay()
  // payStore.getList1pay()
});
</script>

<style scoped>
.pay .row {
  width: 23.4rem;
  height: 3.1rem;
}
.pay .swiperTab-container {
  position: relative;
  padding-top: 6.25rem;
  background: #eee;
}
.pay .swiperTab-container .swiperTab-title {
  position: absolute;
  top: 3.1rem;
  z-index: 1;
}
.pay .swiperTab-container .swiperTab-title .z-img {
  position: absolute;
  width: 4rem;
  height: auto;
  top: 1.8rem;
  left: 0.3rem;
  z-index: 2;
}
.pay .swiperTab-container .swiperTab-title .y-text {
  font-size: 0.8rem;
  line-height: 1.3rem;
  height: 1.3rem;
  position: absolute;
  font-family: PingFangSC-Regular;
  left: 4.5rem;
  top: 2.5rem;
  color: #fff;
}
.pay .swiperTab-container .swiperTab-title .b-img {
  width: 23.4rem;
  height: 16.2rem;
}
.pay .swiperTab-container .swiper .my-swipe {
  position: relative;
  z-index: 3;
  width: 22.1rem;
  height: 21rem;
  background: #fff;
  border-radius: 0.5rem;
  margin: 1.1rem auto 0;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid {
  display: flex;
  justify-content: space-between;
  width: 23.4rem;
  height: 21rem;
  flex-wrap: wrap;
  align-content: flex-start;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a {
  flex: 25%;
  display: inline-block;
  width: 5.25rem;
  height: 6.2rem;
  margin: 1.25rem 0 0 0;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a .img {
  margin: 0 auto;
  width: 60px;
  height: 60px;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a .mainText {
  width: 5.25rem;
  height: 1.25rem;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  margin: 0.18rem 0;
  line-height: 1.25rem;
  color: #000;
}
.pay .swiperTab-container .swiper .my-swipe .swipe_slid a .descText {
  width: 5.25rem;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
  font-sizinnerwrappere: 0.62rem;
  color: #999999;
}
.pay .comments {
  display: flex;
}
.pay .wrappers .lookList {
  display: flex;
  justify-content: space-between;
  background-color: #eeeeee;
  margin: 0.9rem 0.62rem 3.1rem;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.pay .wrappers .lookList .innerWrapper {
  background-color: #fff;
  margin-bottom: 0.62rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
  width: 10.8rem;
}
.pay .wrappers .lookList .innerWrapper .first_img {
  border-radius: 0.5rem;
}
.pay .wrappers .lookList .innerWrapper .first {
  width: 10.7rem;
  font-size: 0.8rem;
  box-sizing: border-box;
  padding-left: 0.75rem;
}
.pay .wrappers .lookList .innerWrapper .second {
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.62rem 0.62rem;
  box-sizing: border-box;
  width: 100%;
}
.pay .wrappers .lookList .innerWrapper .second .left_div {
  display: flex;
  align-items: center;
}
.pay .wrappers .lookList .innerWrapper .second .left_div .m-userpic {
  border: 0.06rem solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
}
.pay .wrappers .lookList .innerWrapper .second .left_div .m-userName {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.75rem;
  color: #7f7f7f;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-left: 0.25rem;
}
.pay .wrappers .lookList .innerWrapper .second .right_div {
  width: 2.1rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 0.62rem;
}
.pay .wrappers .lookList .innerWrapper .second .right_div img {
  width: 1rem;
  height: 1rem;
}
</style>
