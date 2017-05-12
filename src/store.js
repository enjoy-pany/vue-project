import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        userName:"",
        userAva:"",
    },
    mutations:{
        //新増 TodoList item
        getLocalMes(state,item){
            const storage=window.localStorage;
            let loginUser = JSON.parse(storage.getItem('userInfo'));
            state.userName = loginUser.loginName;
            state.userAva = loginUser.loginNav;
        }
    },
    actions:{},
    modules:{}
});

export default store;