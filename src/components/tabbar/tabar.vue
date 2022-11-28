<template>
  <div class="tabbar">
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#ccc"
      :fixed="true"
      :z-index="999"
      :route="true"
    >
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/buying">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopcart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/personal">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { ref } from "@vue/runtime-core";
export default {
  name: "TabBar",
};
</script>
<script setup lang="ts">
const active = ref(0);
</script>

<style scoped></style>
