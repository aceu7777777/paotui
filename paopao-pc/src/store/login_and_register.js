//登录和注册使用的仓库
import {reqLogin,reqRegister} from '@/api'
const state = {
    userID:'',
};
const mutations = {};
const actions = {
    //登陆
    async Login({commit}){
        alert('发送了请求')
        let result = await reqLogin();
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }     
    },
    //注册
    async Register({commit},info){
        console.log(info.phone,info.pass);
        let result = await reqLogin(info.phone,info.pass);
        if (result.code == 200) {
            alert('注册成功');
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