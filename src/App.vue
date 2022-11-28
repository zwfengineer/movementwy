<template>
  <div class="box">
    <router-view></router-view>
<Tabbar></Tabbar>

  </div>

</template>

<script setup>

</script>

<style scoped>

.el-tabs {
  position: fixed;
  bottom: 0rem;
  height: 2rem;
}
.box{
  bottom: -20px;
  margin: 0;
  padding: 0;
}
</style>
