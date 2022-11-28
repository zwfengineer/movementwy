// 将要封装axios接口
import axios from 'axios';
import nprogress from "nprogress";
import "nprogress/nprogress.css";

// 创建axios实例对象
const request = axios.create({
    baseURL : '/topic/v1',
    timeout : 5000
})

// 请求拦截器
request.interceptors.request.use((config)=>{
    // 进度条开始走
    nprogress.start();
    // 返回配置对象
    return config
})

// 响应拦截器
request.interceptors.response.use(
  async (response) => {
    const res =response.data;
    return res.data; /* 返回成功响应数据中的data属性数据 */
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request