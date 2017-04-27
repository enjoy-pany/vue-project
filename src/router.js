import Vue from 'vue';
import VueRouter from 'vue-router';
import list from './components/List.vue';
import form from './components/Form.vue';

Vue.use(VueRouter);

//const nav1 = { template: List }
//const nav2 = { template: '<div>nav2</div>' }
const nav3 = { template: '<div>nav3</div>' }
const nav4 = { template: '<div>nav4</div>' }

const routes = [
  { path: '/nav1', component: list },
  { path: '/nav2', component: form },
  { path: '/nav3', component: nav3 },
  { path: '/nav4', component: nav4 }
]

export default new VueRouter({
  routes // （缩写）相当于 routes: routes
})

