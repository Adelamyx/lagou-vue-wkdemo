<template>
    <div class="rightContent">
        <my-component-search></my-component-search>
        <my-component-circlepic></my-component-circlepic>
        <my-component-advert></my-component-advert>
        <my-component-job></my-component-job>
        <my-component-friendlink></my-component-friendlink>
        <my-component-returnback></my-component-returnback>
    </div>
</template>
<style>
    .rightContent {
        float: right;
        position: relative;
        width: 100%;
    }
</style>
<script type="es6">
    import search from '../containerRight/search.vue'
    import circlePic from '../containerRight/circlePic.vue'
    import advert from '../containerRight/advert.vue'
    import job from '../containerRight/job.vue'
    import friendlink from '../containerRight/friendlink.vue'
    import returnback from '../containerRight/returnback.vue'
    module.exports = {
        data(){
            return {}
        },
        components: {
            "my-component-search": search,
            "my-component-circlepic": circlePic,
            "my-component-advert": advert,
            "my-component-job": job,
            "my-component-friendlink":friendlink,
            "my-component-returnback":returnback
        }
    }
</script>