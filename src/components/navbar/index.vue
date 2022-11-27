<template>
  <div v-show="route.meta.showbar" class="navbar">
    <el-tabs class="demo-tabs" tap-position="bottom" type="card" stretch @tab-click="handleClick">
      <el-tab-pane>
        <template #label>
          <RouterLink to="/home">
            <el-icon :size="iconsize"><House /></el-icon>
          </RouterLink>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <RouterLink to="/category">
            <el-icon :size="iconsize"><Grid /></el-icon>
          </RouterLink>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <RouterLink to="/buying">
            <el-icon :size="iconsize"><Reading /></el-icon>
          </RouterLink>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <RouterLink to="/shopcart">
            <el-icon :size="iconsize"><ShoppingCart /></el-icon>
          </RouterLink>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <RouterLink to="/personal">
            <el-icon :size="iconsize"><User /></el-icon>
          </RouterLink>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {
  House,
  Grid,
  User,
  ShoppingCart,
  Reading,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const iconsize = ref("25px");
</script>
<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.el-tabs {
  display: flex;
  justify-content: space-evenly;
}
.navbar{
  position:fixed;
  bottom: 25px;
  height: 10px;
  width: 100%;
}
</style>
