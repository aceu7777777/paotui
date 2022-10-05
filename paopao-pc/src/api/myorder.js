import requests from "./request";
//查询个人信息
export const MyorderAPI = (clientID) =>requests({
        url:`/get-all-my-order/${clientID}`,
        method: 'get',
})
