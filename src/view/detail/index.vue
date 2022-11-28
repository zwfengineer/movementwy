<template>
  <div class="detail">
    <div class="header">
      <router-link to="/">
        <House />
      </router-link>
      <img src="./images/logo.png" alt="" />
      <router-link to="/search">
        <Search />
      </router-link>
      <el-button>
        <ShoppingCart />
      </el-button>
    </div>
    <hr />

    <!-- 导航栏 -->
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) in categoryL2List"
          :key="item.id"
          :class="
            currentIndex === index || route.query.superCategoryId == item.id
              ? 'active'
              : ''
          "
          @click="changeIndex(index, $event)"
          :data-categoryid="item.id"
          :data-superId="item.superCategoryId"
          :data-type="item.categoryType"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="goodName">
        {{ (categoryL2List[currentIndex] || {}).name || (goodName || {}).name }}
      </div>
    </div>

    <!-- 商品展示 -->
    <div class="good">
      <div class="item" v-for="(item, index) in goodsDteailList" :key="index">
        <div class="show" @click="goShow">
          <img :src="item.listPicUrl" alt="" />
          <p class="title">{{ item.name }}</p>
          <p class="price">
            ￥{{ item.retailPrice }}
            <span>￥{{ item.sortOriginPrice }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { House, Search, ShoppingCart } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import {
  computed,
  nextTick,
  onBeforeMount,
  onMounted,
  onUpdated,
  ref,
  watch,
} from "vue";
import { getDetailList } from "../../api/detail";
let route = useRoute();
let router = useRouter();
console.log(route);
//存储导航栏数据
let categoryL2List = ref([]);
//存储商品详情相应的数据
let goodsDteailList = ref([]);
//存储二级分类的id
let category2Id = ref("");
//存储二级分类的superId
let superCategoryId = ref("");
//存储分类类型
let categoryType = ref("");
//挂载就获取相应的数据
onMounted(() => {
  getDetail();
});
//存储当前的所选导航栏的索引值
let currentIndex = ref(category2Id.value);
//点击按钮进行导航切换
const changeIndex = (index, event) => {
  currentIndex.value = index;
  //获取相应的二次分类菜单id
  // console.log(event);
  superCategoryId.value = event.target.dataset.categoryid;
  category2Id.value = event.target.dataset.superid;
  categoryType.value = event.target.dataset.type;
  // console.log(category2Id.value, superCategoryId.value, categoryType.value);
  //点击导航栏时自己跳自己
  let locations = {
    name: "detail",
    query: {
      categoryType: categoryType.value,
      superCategoryId: superCategoryId.value,
      categoryId: category2Id.value,
    },
  };
  //路由跳转自己跳自己
  router.push(locations);
  console.log(route.query);
  setTimeout(() => {
    getDetail();
  }, 100);
};
//获取二级分类下面的商品详情
let getDetail = async () => {
  let { categoryType, superCategoryId, categoryId } = route.query;
  console.log(categoryType, superCategoryId, categoryId);
  let result = await getDetailList(categoryType, superCategoryId, categoryId);
  // console.log(result);
  categoryL2List.value = result.data.categoryL2List;
  goodsDteailList.value = result.data.categoryItems.itemList;
};
//监听路由的变化
// watch(() => route.query.categoryId, getDetail(), {
//   deep: true,
//   immediate: true,
// });
//跳转到商品详情页
const goShow = () => {
  router.push({ name: "showshop" });
};
//展示的名字
let goodName = computed(() => {
  return categoryL2List.value.find((item) => {
    return route.query.superCategoryId == item.id;
  });
});
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display: none;
}
a {
  background: transparent;
  border: none;
}
li {
  list-style: none;
}
.el-button {
  border: none;
  color: rgb(104, 102, 102);
  background: transparent;
}
.header {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
}
.header img {
  width: 79px;
  height: 31px;
  margin: 0 80px 0 110px;
  text-align: center;
}
.nav ul {
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
}
.nav ul li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 5px 15px;
  font-size: 17px;
}
.nav .active {
  width: 100%;
  border-bottom: 1px solid #f00;
}
.goodName {
  font-size: 20px;
  text-align: center;
}
/*商品展示*/
.good {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-left: 0px;
  flex-wrap: wrap;
}
.good .item {
  width: 47%;
  margin: 10px 2px 10px 1px;
}
.good .item .show img {
  width: 172px;
  height: 172px;
}
.good .item .show .title {
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.good .item .show .price {
  font-size: 20px;
  color: red;
}
.good .item .show span {
  font-size: 12px;
  text-decoration: line-through;
  color: #ccc;
}
svg {
  width: 30px;
  height: 30px;
}
</style>
