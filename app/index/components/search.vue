<template>
    <div>
        <div id="searchType">
            <ul>
                <li>职位</li>
                <li>公司</li>
            </ul>
            <div class="dowmICO"></div>
        </div>
        <input type="text" name="" id="searchText" placeholder="请输入职位名称，如：产品经理" value=""/>
        <a href="#" id="searchBtn">搜索</a>
        <div class="hotSearch">
            <span>热门搜索：</span>
            <ul>
                <li><a href="#">Java</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">iOS</a></li>
                <li><a href="#">前端</a></li>
                <li><a href="#">产品经理</a></li>
                <li><a href="#">UI</a></li>
                <li><a href="#">运营</a></li>
                <li><a href="#">BD</a></li>
                <li><a href="#">实习</a></li>
            </ul>
        </div>
    </div>
</template>
<style>
    #content .rightContent #searchType {
        position: relative;
        width: 15%;
        cursor: pointer;
        display: inline-block;
        float: left;
        z-index: 5;
    }

    #content .rightContent #searchType ul {
        width: 100%;
        height: 37px;

    }

    #content .rightContent #searchType li {
        height: 100%;
        line-height: 37px;
        text-align: center;
        letter-spacing: 0.5em;
        background-color: #fff;
    }

    #searchType li:first-of-type {
        border: 2px solid #019875;
        border-right: none;
    }

    #searchType li:last-of-type {
        display: none;
    }

    #searchType:hover li:last-of-type {
        border: 2px solid rgba(1, 152, 117, 0.5);
        display: block;
    }

    #searchType:hover li:first-of-type {
        border-bottom: none;
    }

    /*三角开始*/
    #searchType .dowmICO {
        background: url(../images/s_drop.png);
        width: 14px;
        height: 9px;
        position: absolute;
        right: 10%;
        top: 50%;
    }

    #searchType:hover .dowmICO {
        animation: dowmICO 0.2s;
        animation-fill-mode: forwards;
    }

    @keyframes dowmICO {
        to {
            transform: rotate(180deg);
        }
    }

    /*三角结束*/

    #searchText {
        display: inline-block;
        width: 60%;
        height: 35px;
        float: left;
        line-height: 35px;
        border: 2px solid #019875;
    }

    .searchBar #searchBtn {
        text-align: center;
        color: rgb(255, 255, 255);
        text-decoration: none;
        font-size: 1.25em;
        display: inline-block;
        border: 2px solid rgba(1, 152, 117, 0.5);
        line-height: 37px;
        background-color: rgb(1, 152, 117);
        width: 23%;
    }

    .searchBar .hotSearch {
        padding: 10px;
        font-size: 0.8em;
        position: relative;
    }

    .searchBar .hotSearch ul {
        display: inline-block;
    }

    .searchBar .hotSearch ul li {
        display: inline-block;
        padding: 0px 10px;
    }

    .searchBar .hotSearch ul li a {
        color: #555555;
        text-decoration: none;
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
            $('#searchType ul li').click(function() { /*搜索框搜索条件切换*/
                var index = $(this).index(); /*获得当前点击元素的index*/
                if (index == 1) { /*若为第二个，则将它移入第一个之前*/
                    var target = $(this);
                    target.prev('li').insertAfter(target);
                }
                /*修改提示文字*/
                if ($(this).text() == '公司') {
                    $(this).parents('#searchType').siblings('#searchText').attr('placeholder', '请输入公司名称，如：拉勾');
                }
                if ($(this).text() == '职位')
                    $(this).parents('#searchType').siblings('#searchText').attr('placeholder', '请输入职位名称，如：产品经理');
            });
        },
        methods: {
            //方法
        }
    }
</script>
