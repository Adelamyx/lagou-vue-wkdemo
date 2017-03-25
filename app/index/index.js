//============导入JS文件=============
import Vue from 'vue'
import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'
import 'mod/jquery'

//===========导入Vue组件==============

import header from './components/header.vue'
import container from './components/container.vue'
import bottom from './components/bottom.vue'


import technology from './components/technology/technology-java.vue'
import containerright from './components/containerRight/containerright.vue'

//==========导入CSS文件===============
import './style/cssReset.css'
import './style/index.css'


Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


var routes = [
    {
        path: "/technology",
        name: "/technology",
        component: technology
    }, {
        path: "/index",
        name: "/index",
        component: containerright
    },

];

var router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    mode: 'history'
});
window.router = router;

new Vue({
    el: '#header',
    // router,
    render: h => h(header)
});
new Vue({
    el: '#my-container',
    router,
    render: h => h(container),
    watch: {
        '$route': "autoindex"
    },
    created(){
        this.autoindex();
    },
    methods: {
        autoindex(){
            if (router.history.current.path == "/" || router.history.current.path == "/index.html") {
                router.push("/index");
            }
        }
    }

});
new Vue({
    el: '#bottom',
    // router,
    render: h => h(bottom)
});
