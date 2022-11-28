import { defineStore } from "pinia";
import { ref } from "vue";
import { reqGetCategoryList, reqGetHomeRecommend } from "../personal-api-";

export const useHomeDataRecommend = defineStore("home", () => {
  const home = ref([]);
  //   导航数据
  const nav = ref([]);
  //   轮播数据
  const carousel = ref([]);
  //   icon提示数据
  const tip = ref([]);
  //   icon提示下面的新品首发
  const newGoodsList = ref([]);
  //   新人专享礼
  const welfare = ref([]);
  //  类目热榜上边
  const hotSaleT = ref([]);
  //  类目热榜下面
  const hotSaleB = ref([]);
  // 各个频道列表数据
  const categoryList = ref([]);
  const categoryCarousel = ref([]);

  const getrecommend = async () => {
    let result = await reqGetHomeRecommend();

    nav.value = result.data.data.categoryHotSellModule.categoryList;
    carousel.value = result.data.data.focusList;
    tip.value = result.data.data.policyDescList;
    newGoodsList.value = result.data.data.kingKongModule.kingKongList;
    welfare.value = result.data.data.indexActivityModule;
    hotSaleT.value = result.data.data.categoryHotSellModule.categoryList.slice(
      0,
      2
    );
    hotSaleB.value =
      result.data.data.categoryHotSellModule.categoryList.slice(1);
   
  };

  const getCategoryList = async (id) => {
    let result = await reqGetCategoryList(id);
    categoryCarousel.value = res.currentCategory.bannerList;
    categoryList.value = res.categoryItemList;
  };

  return {
    home,
    getrecommend,
    nav,
    carousel,
    tip,
    newGoodsList,
    welfare,
    hotSaleT,
    hotSaleB,
    getCategoryList,
    categoryList,
    categoryList,
   categoryCarousel

  };
});
