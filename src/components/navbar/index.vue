<template>
  <div :v-show="route.meta.showbar" class="navbar">
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <template #icon>
          <RouterLink to="/home">
            <van-icon name="wap-home-o" />
          </RouterLink>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <RouterLink to="/categroy">
            <van-icon name="cluster-o" />
          </RouterLink>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <RouterLink to="/buying">
            <van-icon name="smile-comment-o" />
          </RouterLink>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <RouterLink to="/shopcart">
            <van-icon name="cart-o" />
          </RouterLink>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <template #icon>
          <RouterLink to="/personal">
            <van-icon name="user-o" />
          </RouterLink>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  height: 100%;
  width: 100%;
}
</style>
