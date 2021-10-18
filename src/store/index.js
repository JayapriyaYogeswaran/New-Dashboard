import Vue from 'vue';

import Vuex from 'vuex';

import VuexPersist from 'vuex-persist';

Vue.use(Vuex);
const vuexLocal = new VuexPersist({
  storage: window.localStorage
})

export default new Vuex.Store({
  state : {

    user_data : '',

 },
   
 
  getters : {

    getUserData: state => state.user_data,

 },
 
  mutations : {

    updateUserInfo(state,payload) {
        
        state.user_data = payload
    },

 },
 
  actions : {

    setUserInfo({commit},payload) {
        console.log(payload,'info==============')

        commit('updateUserInfo',payload)
    },
 
 },
 plugins: [vuexLocal.plugin]
})
 
 