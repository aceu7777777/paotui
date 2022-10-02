import request from '@/utils/request'
export const MyinfoAPI = (userID) => {
    return request({
        url:'/login',
        method: 'post',
        data:{
            userID
        }  
    })
}