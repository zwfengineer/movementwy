//定义小仓库
import { defineStore } from "pinia";
//引入请求函数
import { reqBuy1, reqBuy2 } from "../api/buying/buying";
import { ref } from "vue";

export const usebuyStore = defineStore("buy", () => {
  let buyinglb = ref([]);
  let buyingpb = ref([]);
  const getListbuy = async () => {
    let result = await reqBuy1();
    let navList = result.navList.splice(0, 8);
    buyinglb.value = navList;
  };
  const getList1buy = async () => {
    let result = await reqBuy2();
    buyingpb.value = result;
  };
  return {
    buyinglb,
    buyingpb,
    getListbuy,
    getList1buy,
  };
});
