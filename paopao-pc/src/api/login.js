import request from '@/utils/request'
export const LoginAPI = ({userID,userPsd}) => {
    return request({
        url:'/login',
        method: 'post',
        data:{
            userID,
            userPsd
        }
    })
}