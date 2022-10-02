//登录和注册使用的仓库
import {reqIdentityVerify} from '@/api'
const state = {};
const mutations = {};
const actions = {
    //身份验证
    async IdentityVerify({commit},info){
        // let result = await reqIdentityVerify(info.name,info.school)
        // if(result.code ==  200){
        //     return'ok';
        // }else{
        //     return Promise.reject(new Error('faile'));
        // }
    }
};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters,
};