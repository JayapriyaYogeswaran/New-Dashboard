import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import store from './store'
Vue.use(VueRouter);
const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : Home,
            name : 'home',
            beforeEnter: requireAuth,
        },
        {
            path : '/login',
            component : Login,
            name : 'login',
        },
    ]
})
function requireAuth (to, from, next) {

    if (store.getters.getUserData) {
        
        next();
                
    } else {
        
        next('/login');
    }
}
export default router