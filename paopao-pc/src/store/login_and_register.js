//登录和注册使用的仓库
import {reqRegister,reqLogin} from '@/api'
import store from '@/store'
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
            store.state.islogin = true
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
        let result = await reqRegister(data);
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
