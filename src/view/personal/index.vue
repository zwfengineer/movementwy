<template>
  <div class="box">
    <div class="header" v-if="userInfo.nickName">
      <img class="userImg" src="../../assets/1.png" mode="" />
      <div class="userInfo">
        <p>{{ nickName }}</p>
      </div>
    </div>
    <div class="header" v-else>
      <img class="userImg" src="../../assets/1.png" mode="" />
      <div class="userInfo">
        <router-link to="/login"> <p>未登录</p></router-link>
      </div>
    </div>

    <div class="content">
      <h5>我的资产</h5>
      <p class="line"></p>
      <div class="myAssetList">
        <div class="assetItem">
          <span>￥0</span>
          <span>余额</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>红包</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>优惠券</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>积分</span>
        </div>
        <div class="assetItem">
          <span>￥0</span>
          <span>礼品卡</span>
        </div>
      </div>
      <!-- 列表选项 -->
      <div class="personalList">
        <div class="navItem">
          <span class="iconfont icon-dingdan1"></span>
          <p>我的订单</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-zhanghaoguanli"></span>
          <p>我的订单</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-shouji"></span>
          <p>账号管理</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-shouji"></span>
          <p>我的手机号</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-rili4"></span>
          <p>周六一起拼</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-shouhou"></span>
          <p>售后服务</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-yaoqingma"></span>
          <p>邀请返利</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-gouwu"></span>
          <p>优先购</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-huiyuan1"></span>
          <p>会员俱乐部</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-dizhi1"></span>
          <p>地址管理</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-anquan"></span>
          <p>支付安全</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-weibiaoti-"></span>
          <p>帮助与客服</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-yijianfankui"></span>
          <p>意见反馈</p>
        </div>
        <div class="navItem">
          <span class="iconfont icon-sifapaimai"></span>
          <p>我的竞拍</p>
        </div>
      </div>

      <div class="footer">
        <button @click="goOut">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { reqLogOut, reqUserInfo } from "../../personal-api-";
import { useRouter } from "vue-router";
const nickName = ref("zs");

const userInfo = reactive({
  nickName: "",
  avatar: "",
});

const router = useRouter();
onMounted(() => {
  getUserInfo();
});

const getUserInfo = async () => {
  let result = await reqUserInfo();
  console.log(result);
};

const goOut = async () => {
  Object.assign(userInfo, {
    nickName: "",
    avatar: "",
  });
  router.push('/login')
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  background: #eed7b5;
  padding: 10px 0;}
  .userImg {
    width: 100px;
    height: 100px;
    margin: 0 5px 0 10px;
    background: #ffffff;
    border-radius: 100%;
  }
  .userInfo p {
    height: 50px;
    line-height: 80px;
    &:first-child {
      font-size: 28px;
    }
    &:last-child {
      font-size: 24px;
    }
  }

.content {
  h5 {
    font-size: 20px;
    line-height: 16px;
    margin: 20px 10px;
  }
  .line {
    width: 100%;
    height: 1px;
    background: #eee;
  }
  .myAssetList {
    width: 100%;
    margin: 10px auto;
    display: flex;
    .assetItem {
      width: 23%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      color: #333333;
      line-height: 20px;
    }
  }
  .personalList {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #eeeeee;
    .navItem {
      width: 33.3333%;
      height: 90px;
      text-align: center;
      border-bottom: 1px solid #eeeeee;
      border-right: 1px solid #eeeeee;
      box-sizing: border-box;
      padding: 5px 0;
      &:nth-child(3n) {
        border-right: none;
      }
      span {
        display: inline-block;
        font-size: 36px;
      }
      p {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }
}
.footer {
  background-color: #fff;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  button {
    width: 100px;
    height: 30px;
    margin-top: 20px;
    background-color: red;
  }
}
</style>
