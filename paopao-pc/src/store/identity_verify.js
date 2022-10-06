//登录和注册使用的仓库
import {reqIdentityVerify} from '@/api'
const state = {
    name:'',//姓名
    school:'',//学校
    stuid:'',//学号
    idcard:'',//身份证号
};
const mutations = {};
const actions = {
    //身份验证
    async IdentityVerify({commit},info){
        let data = {
            userID:info.userId,
            //后台暂时没有要自己定死
            // stuPersonID:info.idcard,
            // stuID:info.stuid,
            // stuSchool:info.school,
            // stuName:info.name
            stuPersonID:'210000000000000000',
            stuID:"17301069",
            stuSchool:"北京交通大学",
            stuName:"林新宇"
        }
        let result = await reqIdentityVerify(data)
        if(result.check ==  1){
            return'ok';
        }else{
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