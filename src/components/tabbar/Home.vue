<template>
<div class="home-container">
        <!-- 轮播图区域 -->
  <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用key  <img :src="item.img" alt="">-->
    <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url"><img :src="item.img" alt=""></mt-swipe-item> -->
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
    <mt-swipe-item>4</mt-swipe-item>
  </mt-swipe>

        <!-- 九宫格区域 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></router-link></li>

  </ul> 
</div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            lunbotuList: [] //保存轮播图的数组
        };
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu() {
            // this.$http.get("http://www.liulongbin.top:3005").then(result => {
            //     console.log(result.body)

            //     if(result.body.status === 0) {
            //         //成功
            //         this.lunbotuList = result.body.message;
            //     } else {
            //         //失败
            //         Toast("加载失败");
            //     }
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        };
        &:nth-child(2) {
            background-color: blue;
        };
        &:nth-child(3) {
            background-color: yellow;
        };
        img {
            width: 100%;
            height:100%;
        };
        .mui-media-body{
            font-size: 13px;
        }
    }
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img {
        width: 60px;
        height: 60px;
    }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}

</style>