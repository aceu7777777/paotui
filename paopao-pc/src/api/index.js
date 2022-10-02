//引入封装的axios
import requests from "./request";

//登录接口
export const reqLogin = ()=>requests({
    url:'/login',
    method:"post"
})
//注册接口
export const reqRegister = (userID,userPsd)=>requests({
    url:'/login',
    method:"post",
    data:{
        userID,
        userPsd
    }
})
//身份认证接口
export const reqIdentityVerify = (name,school)=>requests({
    url:'/identity-verify',
    method:"post",
    data:{
        name,
        school
    }
})