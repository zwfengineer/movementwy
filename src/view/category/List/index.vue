<template>
  <div ref="wrapper" class="cateWrapper">
    <div class="cateListContainer">
      <!-- 单图 -->
      <div class="banner">
        <img width="264" height="96" :src="props.bannerUrl" />
      </div>
      <!-- 分类展示区 -->
      <div class="cateList">
        <div
          class="cateItem"
          v-for="cate1 in categoryDroupList"
          :key="cate1.id"
        >
          <!-- 标题 -->
          <div class="hd" v-if="cate1.name">{{ cate1.name }}</div>
          <!-- 分类列表 -->
          <ul class="list">
            <li v-for="(item, index) in cate1.categoryList" :key="item.id">
              <div
                @click="
                  goDtetail(
                    categoty2List[index].categoryType,
                    categoty2List[index].id,
                    categoty2List[index].superCategoryId
                  )
                "
              >
                <div class="cateImg">
                  <img
                    lazy-load
                    width="72"
                    height="72"
                    :src="item.wapBannerUrl"
                  />
                </div>
                <div class="name">{{ item.name }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
let props = defineProps(["bannerUrl", "categoty2List", "categoryDroupList"]);
//获取路由器
let router = useRouter();
//点击二级分类跳转到相应的详情页
const goDtetail = (categoryType, superCategoryId, categoryId) => {
  router.push({
    name: "detail",
    query: {
      categoryType,
      categoryId,
      superCategoryId,
    },
  });
};
</script>

<style lang="less" scoped>
.cateWrapper {
  height: 574px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .cateListContainer {
    transition: transform 0.2s ease-out;
    .banner {
      width: 264px;
      height: 96px;
      margin-bottom: 16px;
      img {
        height: 100%;
        width: 100%;
        background-color: #eeeeee;
      }
    }
    // 分类展示区
    .cateList {
      margin-bottom: 6px;
      .cateItem {
        margin-bottom: 20px;
        .hd {
          height: 26px;
          padding-bottom: 4px;
          box-sizing: border-box;
          border-bottom: 1px solid #e5e5e5;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: bold;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 33.3%;
            height: 108px;
            text-align: center;
            .cateImg {
              img {
                width: 72px;
                height: 72px;
              }
            }
            .name {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
