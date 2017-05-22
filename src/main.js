import Vue from 'vue';
import VueRes from 'vue-resource';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import echarts from 'echarts'

import App from './App.vue';
import router from  './router.js';
import store from  './store.js';

Vue.use(Element)
Vue.use(VueRes);//使用插件方式
Vue.use(echarts)
Vue.prototype.$echarts = echarts 

Vue.http.options.emulateJSON = true;
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

router.beforeEach((to, from, next) => {
  console.log(to,from);
  next()
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')
