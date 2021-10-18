import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import VeeValidate from "vee-validate";
import store from './store'
import {  ClientTable  } from 'vue-tables-2';

Vue.use(VeeValidate);
Vue.use(ClientTable);
Vue.config.productionTip = false


new Vue({
  router : router,
  store,
  render: h => h(App),
}).$mount('#app')
