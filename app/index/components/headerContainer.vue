<template>
    <div>
        <my-component-header></my-component-header>
        <div id="Container">
            <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
        </div>
    </div>
</template>
<style>
    #Container {
        width: 55%;
        margin: 0px auto;
        margin-bottom: 35px;
    }

</style>
<script type="es6">
    import header from '../components/header.vue'
    module.exports = {
        data(){
            return {}
        },
        components: {
            "my-component-header": header
        }
    }
</script>