
// 1. 导入vue-router包，此处在main和router均要导入，仅路由是这样，其他好像不是，后期注意总结
import VueRouter from 'vue-router'

// 2. 导入组件
import home from './components/tabbar/Home.vue' 
import member from './components/tabbar/Member.vue' 
import shopcar from './components/tabbar/ShopCar.vue' 
import search from './components/tabbar/Search.vue' 
// ===========
import newslist from './components/news/NewsList.vue'
import newsinfo from './components/news/NewsInfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/shopcar', component: shopcar},
        {path: '/search', component: search},
        {path: '/home/newslist', component: newslist},
        {path: '/home/newslist/newsinfo',component: newsinfo}

    ],
    linkActiveClass: 'mui-active'   // 覆盖默认的路由高亮的类，默认的类名为router-link-active
})

export default router;

