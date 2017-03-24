<template>
    <span id="returnBack"></span>
</template>
<style>
    /*回到顶部*/
    #returnBack {
        background: rgba(0, 0, 0, 0) url(../images/backtop.png) no-repeat scroll left top;
        position: fixed;
        right: 20%;
        bottom: 80px;
        width: 28px;
        height: 64px;
        cursor: pointer;
        display: none;
    }

    #returnBack:hover {
        background-position: right top;
    }

    .fix {
        position: fixed;
        bottom: 0;
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