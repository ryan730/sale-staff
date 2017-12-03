/**
 * Created by ryan.zhu on 2017/11/15.
 　......(\_/)
 　　......( '_')
 　　..../"NOBUG"\======░ ▒▓▓█D
 　　/"""""""""""""""""""\
 　　\_@_@_@_@_@_@_@/
 */
import Vue from 'vue';
import Vuex from 'vuex';
import {test_post} from '@/api/api';
import merge from 'merge';

Vue.use(Vuex);

const getters = {
    getCustomGlobal: state => state.customGlobal,
    userID:state => state.userID
};

const state = {
    adminInfo: {
        avatar: 'default.jpg'
    },
    userID:'-1',
    customGlobal:{}
};

//同步
const mutations = {
    /*创建或更改全局对象*/
    setCustomGlobal(state,value){
        merge(state.customGlobal,value);
        window.customGlobal = state.customGlobal;
    },
    setUserID(state, id){
        state.userID = id;
    },
    saveAdminInfo(state, adminInfo){
        state.adminInfo = adminInfo;
    },
    showMassage(state,arg){
        let type=arg.type;
        let msg = arg.msg;
        state.customGlobal.globalVM.$message({
            type: 'error',
            message: arg.msg
        });
    }
};

//异步
const actions = {
    async getAdminData({commit}){
        try{
            const res = await test_post();
            console.log('saveAdminInfo:',res);
            commit('saveAdminInfo', res.data)
            // if (res.status === 1) {
            //     commit('saveAdminInfo', res.data);
            // }else{
            //     throw new Error(res)
            // }
        }catch(err){
            console.log('err:',err)
        }
    }
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
})
