<template>
    <div id="content">
        <div class="content-left">
            <my-component-containerleft></my-component-containerleft>
        </div>
        <div class="content-right">
            <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
        </div>
    </div>
</template>
<style>
    #content {
        width: 100%;
        overflow: hidden;
    }

    .content-left {
        width: 22%;
        float: left;
        background: #FAFAFA none repeat scroll 0 0;
    }

    .content-right {
        float: right;
        position: relative;
        width: 73%;
    }
</style>
<script type="es6">
    import leftNav from '../system/first/containerLeft/containerleft.vue'
    module.exports = {
        data(){
            return {}
        },
        components: {
            "my-component-containerleft": leftNav
        }
    }
</script>