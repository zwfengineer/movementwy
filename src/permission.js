//引入路由器
import router from '@/router'
//守卫分为三大类:
//路由独享守卫 1 
//全局守卫     2  router.beforeEach|router.afterEach
//组件内守卫   3

//引入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false });


//引入大仓库
import pinia from '@/stores'
//获取小仓库useUserInfoStore函数,要获取token|用户信息
import { useUserInfoStore } from '@/stores/userInfo'
//获取用户信息相关的cangku
const userInfoStore = useUserInfoStore(pinia)

//element-plus提供的提示信息组件
import { ElMessage } from 'element-plus'

//函数
import getPageTitle from './utils/get-page-title'

//白名单路径数组:登录成功以后不能跳转路由路径
const whiteList = ['/login']

//全局守卫:前置守卫
router.beforeEach(async (to, from, next) => {
   //路由跳转之前进度条开始动
   NProgress.start()
   // 设置整个页面的标题
   document.title = getPageTitle(to.meta.title as string)
  //获取userInfoStore小仓库里面token,判断用户有没有登录
  const token = userInfoStore.token
  //在判断userInfoStore有没有用户信息  !!ts->是把其他类型的数据强转为布尔类型
  const hasLogin = !!userInfoStore.name
   // 如果token存在(已经登陆或前面登陆过)
  if (token) {
    // 如果请求的是登陆路由
    if (to.path === '/login') {
      // 直接跳转到根路由, 并完成进度条
      next({ path: '/' })
      NProgress.done()
    } else { 
       //登录成功去的不是login,先判断有没有用户信息，有放行，没有发请求获取用户信息再放行
      //如果有用户信息放行
      if (hasLogin) {
        next()
      } else { 
       
        try {
          // 异步请求获取用户信息(包含权限数据) ==> 动态注册用户的权限路由 => 当次跳转不可见
          await userInfoStore.getInfo()
          next(to) // 重新跳转去目标路由, 能看到动态添加的异步路由, 且不会丢失参数
          NProgress.done() // 结束进度条

        } catch (error: any) { // 如果请求处理过程中出错
          // 重置用户信息
          await userInfoStore.reset()
          // 提示错误信息
          // ElMessage.error(error.message || 'Has Error') // axios拦截器中已经有提示了
          // 跳转到登陆页面, 并携带原本要跳转的路由路径, 用于登陆成功后跳转
          next(`/login?redirect=${to.path}`)
          // 完成进度条
          NProgress.done()
        }
      }
    }
  } else { // 没有token
    // 如果目标路径在白名单中(是不需要token的路径)
    if (whiteList.indexOf(to.path) !== -1) {
      // 放行
      next()
    } else {
      // 如果没在白名单中, 跳转到登陆路由携带原目标路径
      next(`/login?redirect=${to.path}`)
      // 完成进度条  当次跳转中断了, 要进行一个新的跳转了
      NProgress.done()
    }
  }
})

//全局守卫:后置守卫
router.afterEach(() => {
  //路由跳转成功进度条消失
	NProgress.done();
})
