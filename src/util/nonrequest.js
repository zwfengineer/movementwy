// 将要封装axios接口
import axios from 'axios';
import nprogress from "nprogress";
import "nprogress/nprogress.css";

// 创建axios实例对象
// nonrequest 没有配置base url
const nonrequest = axios.create({
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
    // 响应成功回调
    (response)=>{
        // 进度条结束
        nprogress.done();

        // 返回需要的结果
        return response.data
    },
    // 响应失败回调
    (error)=>{
        // 进度条结束
        nprogress.done();
        // 中断链式调用
        return new Promise(()=>{})
    }
)

export default nonrequest