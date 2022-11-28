<script setup></script>

<template>
  <RouterView></RouterView>
  <el-tabs
    class="demo-tabs"
    tap-position="bottom"
    v-if="!(route.path == '/detail')"
  >
    <el-tab-pane>
      <template #label>
        <RouterLink to="/home"> 主页 </RouterLink>
      </template>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <RouterLink to="/category"> 分类 </RouterLink>
      </template>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <RouterLink to="/buying"> 值得买 </RouterLink>
      </template>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <RouterLink to="/shopcart"> 购物车 </RouterLink>
      </template>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <RouterLink to="/personal"> 用户 </RouterLink>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { useRoute } from "vue-router";
let route = useRoute();
</script>
<style lang="less">
.el-tabs {
  position: absolute;
  bottom: 0rem;
  height: 2rem;
}
a {
  display: block;
  text-decoration: none;
  border: 1px solid #ccc;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
  background: #ccc;
  line-height: 50px;
  color: black;
}
li {
  list-style: none;
}
</style>
