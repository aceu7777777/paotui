//登录和注册使用的仓库
import {reqRegister,reqLogin} from '@/api'
import router from '@/router'
import store from '@/store'
const state = {
    userID:'',
};
const mutations = {};
const actions = {
    //登陆
    async Login(userinfo){
    //let result = await reqRegister(userinfo.userID, userinfo.userPsd);
    router.push({path:"/home"}) 
    store.state.islogin = true
    },
    //注册
    async Register(info){
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