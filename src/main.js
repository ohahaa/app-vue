
// 入口文件
// vue
import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入App根组件
import app from "./App.vue"

// 按需导入Mint-UI中的组件
import {Header, Swipe, SwipeItem} from 'mint-ui'
// 注册导入的组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 导入MUI
import "./lib/dist/css/mui.min.css"
import "./lib/dist/css/icons-extra.css"


// 导入所需路由
import router from './router.js'



var vm = new Vue({
    el: "#app",
    data: {
        msg: '123'
    },
    render: c => c(app),
    router
})