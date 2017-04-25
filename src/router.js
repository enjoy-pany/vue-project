import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const nav1 = { template: '<div>nav1</div>' }
const nav2 = { template: '<div>nav2</div>' }
const nav3 = { template: '<div>nav3</div>' }
const nav4 = { template: '<div>nav4</div>' }

export const routes = [
  { path: '/nav1', component: nav1 },
  { path: '/nav2', component: nav2 },
  { path: '/nav3', component: nav3 },
  { path: '/nav4', component: nav4 }
]

// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })

// export const route = router;