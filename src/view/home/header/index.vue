<template>
    <div class="header">
      <img src="./images/logo.png" class="logo">
        <div class="search" @click="goSearch">
          <van-icon name="search" />
          <span class="ipt">搜索商品,共6573件商品</span>
        </div>
      </div>
</template>

<script lang="ts">

export default {
    name:'Header'
}
</script>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router=useRouter()
const goSearch=()=>{
    router.push('/search')
}
</script>

<style scoped>
.header {
    width: 375px;
    height: 44px;
    display: flex;
    box-sizing: border-box;
    padding: 8px 15px;
    align-items: center;
    background: #fff;
  }
  .logo {
    width: 70px;
    height: 24px;
    margin-right: 8px;
  }
  .search {
    flex: 1;
    flex-grow: 1;
    display: flex;
    height: 28px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #ededed;
  }
  .search .ipt {
    font-size: 16px;
    color: #666;
  }
  
  :deep().van-icon-search {
    font-size: 16px;
  }

</style>