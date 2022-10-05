import requests from "./request";
//提交订单
export const PutorderAPI = (orderMoney,orderType,clientID,orderContent,orderAddress,orderReserveTime) =>requests({
        url:`/add-order`,
        method: 'post',
        data:{
            data:{
                orderMoney,
                orderType,
                clientID,
                orderContent,
                orderAddress,
                orderReserveTime
            },
            check:0
        }
})
//时间字符串格式务必一样
// {
//     "data": {
//         "orderMoney": "3",
//         "orderType": "1",
//         "clientID": "17301069",
//         "orderContent": "西门取快递",
//         "orderAddress": "逸夫楼815",
//         "orderReserveTime": "2020-05-16 19:21:58"
//     },
//     "check": "0"
// }