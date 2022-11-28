//引入二次封装的axios
import request from "../util/request";
export const getCategoryList = () =>
  request.get("/item/cateList.json?__timestamp=1630131286110&categoryId=");
//根据id,获取分类商品信息
export const getGoodsList = (categoryId) =>
  request.get("/item/cateList.json?__timestamp=1630131455012&", {
    params: {
      categoryId,
    },
  });
