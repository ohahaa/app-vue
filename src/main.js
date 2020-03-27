
// 入口文件
// vue
import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径（全局）
Vue.http.options.root = 'http://vue.studyit.io'

// 导入App根组件
import app from "./App.vue"

// 按需导入Mint-UI中的组件
import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
// 注册导入的组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入MUI
import "./lib/dist/css/mui.min.css"
import "./lib/dist/css/icons-extra.css"

// 导入所需路由
import router from './router.js'




// 定义全局过滤器，用于格式化时间
Vue.filter('dateFormat', function(dateStr, pattern="YYYY-MM-DD HH:mm:ss") {
    //根据给定的时间字符串，得到特定的时间
    var dt = new Date(dateStr)

    var y = dt.getFullYear()
    var m = (dt.getMonth() + 1).toString().padStart(2, '0')
    var d = dt.getDate().toString().padStart(2, '0')

    if( pattern && pattern.toLowerCase() === 'yyyy-mm-dd') {
        return y + '-' + m + '-' + d
        // return '${y}-${m}-${d}'
    } else {
        var hh = dt.getHours().toString().padStart(2, '0')
        var mm = dt.getMinutes().toString().padStart(2, '0')
        var ss = dt.getSeconds().toString().padStart(2, '0')
        return y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss
    }
})


var vm = new Vue({
    el: "#app",
    data: {
        msg: '123'
    },
    render: c => c(app),
    router
})