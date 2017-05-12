import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        userName:"未登录",
        userAva:"assets/image/defaultAva.jpg",
    },
    mutations:{
        getLocalMes(state,item){
            const storage=window.localStorage;
            let loginUser = JSON.parse(storage.getItem('userInfo'));
            if(loginUser){
                state.userName = loginUser.loginName;
                state.userAva = loginUser.loginNav;
            }
        }
    },
    actions:{},
    modules:{}
});

export default store;