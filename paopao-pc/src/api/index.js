//引入封装的axios
import requests from "./request";
import mockRequests from './mockAjax';
//登录接口
// export const reqLogin = ()=>requests({
//     // url:'/login',
//     // method:"post"
// })

//获取登录的mock数据
export const reqLogin = ()=> mockRequests.get('/login');

//注册接口
export const reqRegister = (data)=>requests({
    url:'/login',
    method:"post",
    data:{
        data:data,
        check:"0"     
}
})
//身份认证接口
export const reqIdentityVerify = (data)=>requests({
    url:'/identity-verify',
    method:"post",
    data:{
        data,
        check:"0"
    }
})