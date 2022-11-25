<script setup></script>

<template>
  <RouterView></RouterView>
  <el-tabs v-model="activeName" class="demo-tabs" tap-position="bottom" @tab-click="handleClick">
    <el-tab-pane >
      <template #label>
        <RouterLink to="/home">
          主页
        </RouterLink>
      </template>
    </el-tab-pane>
    <el-tab-pane >
      <template #label>
        <RouterLink to="/category">
          分类
        </RouterLink>
      </template>
    </el-tab-pane>
    <el-tab-pane >
      <template #label>
        <RouterLink to="/buying">
          值得买
        </RouterLink>
      </template>
    </el-tab-pane>
    <el-tab-pane >
      <template #label>
        <RouterLink to="/shopcart">
          购物车
        </RouterLink>
      </template>
    </el-tab-pane>    <el-tab-pane >
      <template #label>
        <RouterLink to="/personal">
          用户
        </RouterLink>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>

.el-tabs{
  position: absolute;
  bottom: 0rem;
  height: 2rem;
}

</style>
