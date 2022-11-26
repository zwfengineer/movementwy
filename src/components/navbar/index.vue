<template>
  <div v-show="route.meta.showbar">
    <el-tabs class="demo-tabs" tap-position="bottom" @tab-click="handleClick">
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
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<script>
export default{
    name:"Navbar"
}
</script>

<style scoped>
.el-tabs {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 2rem;
}
</style>
