//引入二次封装的axios
import request from "../util/request";
//获取分类下面的商品列表
export const getDetailList = (categoryType, subCategoryId, categoryId) =>
  request.get("/item/list.json?__timestamp=1630133942864", {
    params: {
      categoryType,
      subCategoryId,
      categoryId,
    },
  });
// 根据多个分类商品列表
export const reqCateGoodsList = (categoryId) =>
  request.get("item/list.json?__timestamp=1630136511866", {
    params: { categoryId },
  });
