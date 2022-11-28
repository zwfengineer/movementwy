<template>
  <div class="container">
    <!-- 搜索栏 -->
    <div class="searchBar">
      <div class="searchButton" icon="search" @click="goSearch">
        <el-button :icon="Search" size="23px" /><span
          >搜索商品，共***款好物</span
        >
      </div>
    </div>
    <!-- 导航栏和展示区 -->
    <div class="main">
      <!-- 左侧 -->
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in navList.categoryL1List"
            :key="item.id"
            :class="currntIndex === index ? 'active' : ''"
            @click="changeIndex(index, $event)"
            :data-id="item.id"
            :data-banner="item.bannerUrl"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 右侧商品展示区 -->
      <div class="subCateList">
        <List
          :bannerUrl="bannerUrl"
          :categoryDroupList="categoryDroupList"
          :categoty2List="categoty2List"
        ></List>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import { onMounted, ref, nextTick, watch } from "vue";
import { getCategoryList, getGoodsList } from "../../api/category";
import { useRouter, useRoute } from "vue-router";
import List from "./List/index.vue";
let route = useRoute();
//从路由中获取categoryid
let id = ref();
let router = useRouter();
//存储当前索引值
let currntIndex = ref(0);
//存储当前的分类id
let categoryId = ref();
//存储列表数据
let navList = ref({});
//存储商品的信息
let goodList = ref();
//获取轮播的数据
let bannerUrl = ref("");
bannerUrl.value =
  "https://yanxuan.nosdn.127.net/66c12204463be8b4678f3c2c86083494.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=0x196";
//分类组的
let categoryDroupList = ref([]);
//二级分类的数组
let categoty2List = ref([]);
//获取左侧导航栏数据,一上来就挂载
onMounted(() => {
  getNav();
  getList();
});
const getNav = async () => {
  let result = await getCategoryList();
  // console.log(result);
  navList.value = result.data;
};
//点击li,高亮切换,并获取当前的分类id
const changeIndex = async (index, event) => {
  currntIndex.value = index;
  categoryId.value = event.target.dataset.id;
  if (event.target.dataset.banner) {
    bannerUrl.value = event.target.dataset.banner;
  } else {
    bannerUrl.value =
      "https://yanxuan.nosdn.127.net/66c12204463be8b4678f3c2c86083494.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=0x196";
  }
  //路由跳转自己跳自己
  let locations = {
    name: "category",
    query: { categoryId: categoryId.value, bannerUrl: bannerUrl.value },
  };
  //路由跳转
  router.push(locations);
  // console.log(event);
  getList(event.target.dataset.id);
};
//获取商品详情的id
let getList = async (id) => {
  let result = await getGoodsList(id);
  // console.log(result);
  categoryDroupList.value = result.data.categoryGroupList;
  categoty2List.value = result.data.categoryL2List;
};

//跳转到搜索页
const goSearch = () => {
  router.push({ name: "search" });
};
</script>

<style lang="less" scoped>
/deep/ .el-button {
  background: #ededed;
  border: none;
  font-size: 23px;
}
.container {
  height: 100%;
}
.searchBar {
  // padding: 8px 15px;
  height: 44px;
  // line-height:44px;
  border-bottom: 2px solid #ebebeb;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  // 搜索按钮
  .searchButton {
    width: 345px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    color: #666666;
    font-size: 23px;
    background-color: #ededed;
  }
}

.main {
  height: 574px;
  display: flex;
  margin-top: 10px;
  box-sizing: border-box;
}
.left {
  width: 170px;
  height: 100%;
  margin-right: 10px;
}
.left ul {
  width: 100%;
  height: 100%;
  margin-top: -1px;
}
.left ul li {
  width: 100%;
  height: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 10px;
  white-space: nowrap;
}
.left ul .active {
  background: yellowgreen;
}
</style>
