import request from "./util/requesthome";
import nonrequest from "./util/nonrequest";
import requesthome from "./util/requesthome";
import requestitem from "./util/requestitem";

// enum API{
//   //获取首页推荐
//   homeData=,
//   categoryList='/list.json?__timestamp=1630136511866&categoryId='
// }

export const reqUserInfo = () => {
  return nonrequest.get("/api/user/passport/auth/getUserInfo");
};

export const reqLogin = (data) =>
  nonrequest.post("/api/user/passport/login", data);

export const reqLogOut = () => nonrequest.get("/user/passport/logout");

export const reqGetHomeRecommend = () =>
  requesthome.get("/index.json?__timestamp=1630131808529");


export const reqGetCategoryList = (id) =>
  requestitem.get('/list.json?__timestamp=1630136511866&categoryId='+id);
