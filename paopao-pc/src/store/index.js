import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
//引入登录和注册的仓库
import login_and_register from './login_and_register'
//引入身份认证的仓库
import Identity_verify from './identity_verify'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //用户的token
    token:'',
  },
  mutations: {},
  actions: {},
  modules: {
    login_and_register,
    Identity_verify
  },
  //让在vuex中管理的状态数据同时储存在本地。可免去自己储存的环节。
  plugins: [createPersistedState()]
});
