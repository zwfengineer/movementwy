//引入二次封装的request
import request from '../../util/buying';
// 枚举接口
// enum API{
//   reqGetlist='/know/navWap.json',
//   reqGetlist1='/find/recAuto.json?page=1&size=6'
// }
//获取值得买轮播的请求
export const reqBuy1 = ()=>request.get(`/know/navWap.json`)

//获取瀑布数据的请求
 export const reqBuy2=()=>request.get(`/find/recAuto.json?page=1&size=5`)
