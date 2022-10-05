import requests from "./request";
//查询个人信息
export const MyinfoAPI = (userID) =>requests({
        url:`/get-my-account/${userID}`,
        method: 'get',
})
//