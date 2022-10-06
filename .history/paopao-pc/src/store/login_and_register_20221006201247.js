//登录和注册使用的仓库
import {reqLogin,reqRegister} from '@/api'
const state = {
    userID:'',//电话号码
};
const mutations = {
    LOGIN(state,userID){
        state.userID = userID;
    }
};
const actions = {
    //登陆
    async Login({commit},info){
        let result = await reqLogin();
        if (result.code == 200 && result.data[0].userID == info.phone&&result.data[0].userPsd == info.pass) {
            commit("LOGIN",info.phone)
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }     
    },
    //注册
    async Register({commit},info){
        let data = {
            userID:info.phone,
            userPsd:info.pass
        }
        let result = await reqRegister(data);q
        if (result.check == "1") {
            return 'ok';       
        } else {
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters,
};