/**
 * 项目入口文件
 */

import Vue from 'vue'

import AppContainer from './App.vue'

// Vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)  // 在Vue中注册VueRouter

import routes from './route' // 引入路由配置文件

require('./style/common.scss')

const router=new VueRouter({
    // mode: 'history',
    routes
})

new Vue({
    data:{
        bus:new Vue()
    },
    router,
    render:h => h(AppContainer)
}).$mount("#app")
