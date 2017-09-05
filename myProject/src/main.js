// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import AnalysisPage from './pages/detail/analysis'
import CountPage from './pages/detail/count'
import ForecastPage from './pages/detail/forecast'
import PublishPage from './pages/detail/publish'
import OrderListPage from './pages/orderList'
import store from './store'
Vue.use(VueRouter)
Vue.use(VueResource)
// store 大写不生效
/* eslint-disable no-new */
/* 使用路由   引入  使用  实例化 定义数组 ---->放到根实例   路由map */
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'count',
          component: CountPage
        },
        {
          path: 'forecast',
          component: ForecastPage
        },
        {
          path: 'publish',
          component: PublishPage
        }
      ]
    },
    {
      path: '/orderList',
      component: OrderListPage
    }
  ]
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
