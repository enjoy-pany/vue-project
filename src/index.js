import Vue from 'vue';
import VueRes from 'vue-resource';
import VueRouter from 'vue-router';
import routes from  './router.js';
import App from './App.vue';
// import './router.js';



Vue.use(VueRes);//使用插件方式
Vue.use(VueRouter);

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
