import Vue from 'vue'
const state = {
    orderList: [],
    params: {}
}
//用于页面调用state值 通过getters  得到state.orderList
const getters = {
    getOrderList: state => state.orderList
}
//异步操作 actions
const actions = {
    //包含两个功能对象
   fetchOrderList ({ commit, state }) {
      Vue.http.post('api/getOrderList',state.params)
      .then((res) => {
        commit('updateOrderList',res.data.list)
      },(err) => {

      })
   }
}
//同步操作 mutations
const mutations = {
    updateOrderList (state,payload) {
        state.orderList = payload
    },
    updateParams (state, { key ,val}) {
        state.params[key] = val
        console.log(state.params)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}