import Vue from 'vue';
import VueRouter from 'vue-router';

import regindex from './components/RegIndex.vue';
import logindex from './components/LoginIndex.vue';
import todoList from './components/TodoList.vue';

import list from './components/Todo/List.vue';
import form from './components/Todo/Form.vue';
const todoList_3 = { template: '<div>nav3</div>' }
const todoList_4 = { template: '<div>nav4</div>' }

Vue.use(VueRouter);

const routes = [
  { 
    path: '/',
    component: logindex 
  },
  { 
    path: '/register',
    component: regindex 
  },
  { 
    path: '/todolist',
    component: todoList,
    children: [
        {
            path: 'todolist_1',
            component: list,
        },
        {
            path: 'todolist_2',
            component: form,
        },
        {
            path: 'todolist_3',
            component: todoList_3,
        },
        {
            path: 'todolist_4',
            component: todoList_4,
        }
    ]
  }
]

export default new VueRouter({
  routes // （缩写）相当于 routes: routes
})

