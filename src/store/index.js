import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


// 通过Vuex创建的一个仓库
export default new Vuex.Store({
    state,
    mutations,
    // getters: {
    //     doubleCity(state) {
    //         return state.city + ' ' + state.city
    //     }
    // }
    // actions: {
    //     changeCity(ctx, city) {
    //         // console.log(city);
    //         // ctx可以调取commit从而触发mutations
    //         ctx.commit('changeCity', city)
    //     }
    // },
    // mutations: {
    //     changeCity(state, city) {
    //         state.city = city
    //         try {
    //             localStorage.city = city
    //         } catch (e) {}
    //     }
    // }
})