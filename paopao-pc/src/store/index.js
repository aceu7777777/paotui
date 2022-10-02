import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //用户的token
    //token:'',
  },
  mutations: {},
  actions: {},
  modules: {},
  //让在vuex中管理的状态数据同时储存在本地。可免去自己储存的环节。
  plugins: [createPersistedState()]
});
