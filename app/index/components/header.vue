<template>
    <div id="top">
        <img src="../images/logo.png" alt="">
        <ul class="topBar">
            <li class="active">首页</li>
            <li>公司</li>
            <li>我的简历</li>
            <li>发布职位</li>
        </ul>
        <div class="loginBtn">
            <a href="#">注册</a>
            <a href="#">登录</a>
        </div>
    </div>
</template>
<style>
    #top {
        width: 100%;
        height: 60px;
        /*vertical-align: middle;*/
        position: relative;
        background-color: #FAFAFA;
    }

    #top img {
        width: 22%;
        vertical-align: middle;
    }

    .topBar {
        display: inline-block;
        margin-left: 50px;
    }

    .topBar li {
        display: inline-block;
        line-height: 57px;
        font-size: 1.25em;
        margin-right: 40px;
        color: #999999;
        cursor: pointer;
    }

    .topBar .active {
        color: #000;
        border-bottom: 3px solid #019875;
    }

    .topBar li:hover {
        color: #000;
    }

    .loginBtn {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #019875;
    }

    .loginBtn a {
        display: inline-block;
        padding: 0px 13px;
        margin: 6px 0px;
        color: #ffffff;
        font-size: 0.88em;
        text-decoration: none;
    }
</style>
<script>
    module.exports={
        data:function () {
            //数据
            return {}
        },
        mounted:function () {
            //第一次加载的时候调用这个方法

        },
        methods:{
            //方法
        }
    }
</script>
