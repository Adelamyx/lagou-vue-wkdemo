<template>
    <div class="circlePic">
        <div class="circlePicUl">
            <ul>
                <li><img src="../images/d05a2cc6e6c94bdd80e074eb05e37ebd.jpg"/></li>
                <li><img src="../images/c9d8a0756d1442caa328adcf28a38857.jpg"/></li>
                <li><img src="../images/d03110162390422bb97cebc7fd2ab586.jpg"/></li>
            </ul>
        </div>
        <div class="circlePicList">
            <ul>
                <li class="change"><img src="../images/4469b1b83b1f46c7adec255c4b1e4802.jpg"/></li>
                <li><img src="../images/381b343557774270a508206b3a725f39.jpg"/></li>
                <li><img src="../images/354d445c5fd84f1990b91eb559677eb5.jpg"/></li>
            </ul>
        </div>
    </div>
</template>
<style>
    .rightContent .circlePic {
        width: 100%;
        overflow: hidden;
        height: 160px;
    }
    .rightContent .circlePic .circlePicUl {
        width: 80%;
        height: 100%;
        float: left;
        cursor: pointer;
        position: relative;
    }

    .rightContent .circlePic .circlePicUl ul,
    .rightContent .circlePic .circlePicUl ul li,
    .rightContent .circlePic .circlePicUl img {
        width: 100%;
        height: 100%;
    }

    .rightContent .circlePic .circlePicUl ul {
        position: absolute;
        top: 0px;
    }

    .rightContent .circlePic .circlePicList {
        width: 16%;
        float: right;
    }

    .rightContent .circlePic .circlePicList img {
        width: 100%;
        height: 100%;
    }

    .rightContent .circlePic .circlePicList ul li {
        height: 40px;
        margin-bottom: 9px;
        border: 3px solid #d3d3d3;
    }

    .rightContent .circlePic .circlePicList ul .change {
        border: 3px solid #019875;
    }

</style>
<script>
    module.exports = {
        data: function () {
            //数据
            return {}
        },
        mounted: function () {
            //第一次加载的时候调用这个方法
            var nextIndex = 0;
            /*图片轮询index定位*/
            var change = function () { /*计算下一个index的值*/
                if (nextIndex == 3) {
                    nextIndex = 0;
                }
                var height = $('.circlePicUl li').height();
                /*获取轮询的li的高度*/
                $('.circlePicList li:eq(' + nextIndex + ')').addClass('change').siblings().removeClass('change');
                $('.circlePicUl ul').stop().animate({
                    'top': -nextIndex * height /*将ul位移*/
                }, 400);
                nextIndex++;
                /*自增index*/
            };
            var interval = setInterval(change, 3000);
            /*轮播图，当鼠标移入时候，停止自动轮播，鼠标移出则继续*/
            $('.circlePicList li').hover(function() {
                var index = $(this).index();
                var height = $('.circlePicUl li').height();
                $(this).addClass('change').siblings().removeClass('change');
                $('.circlePicUl ul').stop().animate({
                    'top': -index * height
                }, 400);
                clearInterval(interval);
                nextIndex = index;
            }, function() {
                interval = setInterval(change, 3000);
            });
            /*轮播图，当鼠标移入时候，停止自动轮播，鼠标移出则继续*/
            $('.circlePicUl').hover(function() {
                //		alert(interval);
                clearInterval(interval);
            }, function() {
                interval = setInterval(change, 3000);
            });

        },
        methods: {
            //方法
        }
    }
</script>
