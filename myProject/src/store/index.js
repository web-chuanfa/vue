import Vue from 'vue'
import Vuex from 'vuex'
import orderList from './modules/orderList'
Vue.use(Vuex)
// 数据模型
export default new Vuex.Store({
    modules: {
        orderList
    }
})

