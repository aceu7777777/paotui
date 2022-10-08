import requests from "./request";
//查询个人信息
export const MyinfoAPI = (userID) =>requests({
        url:`/get-my-account/${userID}`,
        method: 'get',
})
//查看地址
export const AlladdressAPI = (userID) => requests({
        url:`get-address/${userID}`,
        method: 'get',
})

//添加常用地址
export const AddaddressAPI = (data) => requests({
        url:`/add-address`,
        method: 'post',
        data:{
                data:data,
                check:"0"     
        }
})