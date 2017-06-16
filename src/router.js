import Vue from 'vue';
import VueRouter from 'vue-router';

import regindex from './components/RegIndex.vue';
import logindex from './components/LoginIndex.vue';
import todoList from './components/TodoList.vue';

import list from './components/Todo/List.vue';
import form from './components/Todo/Form.vue';
import search from './components/Todo/Search.vue';
import charts from './components/Todo/Charts.vue';

//const todoList_3 = { template: '<div>nav3</div>' }
//const todoList_4 = { template: '<div>nav4</div>' }

Vue.use(VueRouter);

const routes = [
  { 
    name: 'logindex',
    path: '/',
    component: logindex 
  },
  { 
    name: 'regindex',
    path: '/register',
    component: regindex 
  },
  { 
    name: 'todoList',
    path: '/todolist',
    component: todoList,
    children: [
        {
            name: 'search',
            path: 'todolist_1',
            component: search,
        },
        {
            name: 'form',
            path: 'todolist_2',
            component: form,
        },
        {
            name: 'list',
            path: 'todolist_3',
            component: list,
        },
        {
            name: 'charts',
            path: 'todolist_4',
            component: charts,
        }
    ]
  }
]

export default new VueRouter({
  routes // （缩写）相当于 routes: routes
})