import Vue from 'vue';
import VueRes from 'vue-resource';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue';
import router from  './router.js';

Vue.use(Element)
Vue.use(VueRes);//使用插件方式

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
