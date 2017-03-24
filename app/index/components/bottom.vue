<template>
    <div id="bottom">
        <hr/>
        <ul>
            <li>联系我们
                <div class="weixin">
                    <img src="../images/logo.png"/>
                </div>
            </li>
            <li>互联网公司导航</li>
            <li>拉勾微博</li>
            <li>拉勾微信
                <div class="weixin">
                    <img src="../images/companylist_qr.png"/>
                </div>
            </li>
            <div class="webInfo">
                <span>2013-2015 Lagou 京ICP备14023790号-2</span>
            </div>
        </ul>
    </div>
</template>
<style>
    #bottom {
        width: 100%;
        text-align: center;
    }

    #bottom hr {
        color: #ECECEC;
    }

    #bottom li {
        position: relative;
        display: inline-block;
        font-size: 0.8em;
        line-height: 2em;
        padding: 0px 20px;
        color: #555555;
        cursor: pointer;
    }

    #bottom .weixin {
        position: absolute;
        top: -245px;
        left: 0px;
        display: none;
    }

    /*#bottom li:first-of-type:hover .weixin{*/
    /*display: block;*/
    /*}*/
    /*#bottom li:last-of-type:hover .weixin{*/
    /*display: block;*/
    /*}*/
    #bottom li:hover .weixin {
        display: block;
    }

    #bottom .webInfo {
        color: #555555;
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
        },
        methods: {
            //方法
        }
    }
</script>
