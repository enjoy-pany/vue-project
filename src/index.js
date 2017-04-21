import Vue from 'vue';
import VueRes from 'vue-resource';
import App from './App.vue';

Vue.use(VueRes);//使用插件方式

new Vue({
	el: '#app',
	render: h => h(App)
})