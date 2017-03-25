<template>
    <div class="advert">
        <div class="advertItem">
            <div class="shouImg">
                <img src="../../images/a254b11ecead45bda166afa8aaa9c8bc.jpg"/>
            </div>
            <div class="hot_info">
                <h2>联想</h2>
                <hr/>
                <p>世界因联想更美好</p>
            </div>
        </div>
        <div class="advertItem">
            <div class="shouImg">
                <img src="../../images/c75654bc2ab141df8218983cfe5c89f9.jpg"/>
            </div>
            <div class="hot_info">
                <h2>淘米</h2>
                <hr/>
                <p>将心注入 追求极致</p>
            </div>
        </div>
        <div class="advertItem">
            <div class="shouImg">
                <img src="../../images/2bba2b71d0b0443eaea1774f7ee17c9f.png"/>
            </div>
            <div class="hot_info">
                <h2>优酷土豆</h2>
                <hr/>
                <p>专注于视频领域，是中国网络视频领军人物</p>
            </div>
        </div>
        <div class="advertItem">
            <div class="shouImg">
                <img src="../../images/f4822a445a8b495ebad81fcfad3e40e2.jpg"/>
            </div>
            <div class="hot_info">
                <h2>思特沃克</h2>
                <hr/>
                <p>一家全球信息技术服务公司</p>
            </div>
        </div>
        <div class="advertItem">
            <div class="shouImg">
                <img src="../../images/5caf8f9631114bf990f87bb11360653e.png"/>
            </div>
            <div class="hot_info">
                <h2>奇猫</h2>
                <hr/>
                <p>专注于移动互联网，互联网产品研发</p>
            </div>
        </div>
        <div class="advertItem">
            <div class="shouImg">
                <img src="../../images/c0052c69ef4546c3b7d08366d0744974.jpg"/>
            </div>
            <div class="hot_info">
                <h2>堆糖</h2>
                <hr/>
                <p>分享收集生活中的美好，遇见世界上的另一个你</p>
            </div>
        </div>
    </div>
</template>
<style>

    .advert {
        width: 100%;
    }

    .advert .advertItem {
        border: 1px solid rgba(85, 85, 85, 0.2);
        width: 15%;
        cursor: pointer;
        margin-right: 0.7%;
        margin-top: 2%;
        display: inline-block;
        position: relative;
    }

    .advert .advertItem .shouImg {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .advert .advertItem img {
        width: 100%;
        height: 100%;
    }

    .advert .advertItem .hot_info {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        color: rgb(255, 255, 255);
        display: none;
        background: rgba(1, 152, 117, 0.8);
        opacity: 0;
    }

    .advert .advertItem .hot_info h2 {
        padding: 5px;
        font-size: 1.2em;
    }

    .advert .advertItem .hot_info hr {
        width: 80%;
        color: rgb(255, 255, 255);
    }

    .advert .advertItem .hot_info p {
        text-align: left;
        padding: 5px;
        font-size: 0.7em;
        line-height: 1.5em;
    }

    .advert .advertItem:hover img {
        animation: advert 0.5s;
        animation-fill-mode: forwards;
    }

    .advert .advertItem:hover .hot_info {
        animation: advertHot 0.5s;
        animation-fill-mode: forwards;
        display: block;
    }

    @keyframes advert {
        to {
            transform: scale(1.5);
        }
    }

    @keyframes advertHot {
        to {
            opacity: 1;
            top: 0;
        }
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
