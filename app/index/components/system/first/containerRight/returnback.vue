<template>
    <div>
        <span id="returnBack"></span>
    </div>
</template>
<style>
    /*回到顶部*/
    #returnBack {
        background: rgba(0, 0, 0, 0) url(../../../../images/backtop.png) no-repeat scroll left top;
        position: fixed;
        right: 20%;
        bottom: 80px;
        width: 28px;
        height: 64px;
        cursor: pointer;
        /*display: none;*/
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
    module.exports = {
        data: function () {
            //数据
            return {}
        },
        mounted: function () {
            var goToTopTime;
            $.fn.goToTop = function (options) {
                var opts = $.extend({}, $.fn.goToTop.def, options);
                var $window = $(window);
                var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); // opera fix
                //$(this).hide();
                var $this = $(this);
                clearTimeout(goToTopTime);
                goToTopTime = setTimeout(function () {
                    var controlLeft;
                    if ($window.width() > opts.pageHeightJg * 2 + opts.pageWidth) {
                        controlLeft = ($window.width() - opts.pageWidth) / 2 + opts.pageWidth + opts.pageWidthJg;
                    } else {
                        controlLeft = $window.width() - opts.pageWidthJg - $this.width();
                    }
                    var cssfixedsupport = false;//判断是否ie6
                    var controlTop = $window.height() - $this.height() - opts.pageHeightJg;
                    controlTop = cssfixedsupport ? $window.scrollTop() + controlTop : controlTop;
                    var shouldvisible = ( $window.scrollTop() >= opts.startline ) ? true : false;

                    if (shouldvisible) {
                        $this.stop().show();
                    } else {
                        $this.stop().hide();
                    }

                    $this.css({
                        position: cssfixedsupport ? 'absolute' : 'fixed',
                        top: controlTop,
                        left: controlLeft
                    });
                }, 30);

                $(this).click(function (event) {
                    $body.stop().animate({scrollTop: $(opts.targetObg).offset().top}, opts.duration);
                    $(this).blur();
                    event.preventDefault();
                    event.stopPropagation();
                });
            };

            $.fn.goToTop.def = {
                pageWidth: 910,//页面宽度
                pageWidthJg: 2,//按钮和页面的间隔距离
                pageHeightJg: 100,//按钮和页面底部的间隔距离
                startline: 30,//出现回到顶部按钮的滚动条scrollTop距离
                duration: 200,//回到顶部的速度时间
                targetObg: "body"//目标位置
            };

            $('#returnBack').click(function() {
                $(this).goToTop();
            });
        },
        methods: {
            //方法
        }
    }
</script>