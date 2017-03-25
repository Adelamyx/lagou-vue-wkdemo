//============导入JS文件=============
import Vue from 'vue'
import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'
import 'mod/jquery'

//===========导入Vue组件==============
import headerContainer from './components/headerContainer.vue'
import bottom from './components/bottom.vue'


import first from './components/navigation/first.vue'
import company from './components/navigation/company.vue'
import resume from './components/navigation/resume.vue'
import jobdetail from './components/navigation/jobdetail.vue'


import containerright from './components/system/first/containerRight/containerright.vue'


import technology from './components/system/first/containerLeft/technology/technology-java.vue'


//==========导入CSS文件===============
import './style/cssReset.css'
import './style/index.css'


Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


var routes = [
    {
        path: "/index",
        name: "/index",
        component: first,
        children: [
            {
                path: "technology",
                component: technology
            },
            {
                path: "containerright",
                component: containerright
            }
        ]
    }, {
        path: "/company",
        name: "/company",
        component: company
    }, {
        path: "/resume",
        name: "/resume",
        component: resume
    }, {
        path: "/jobdetail",
        name: "/jobdetail",
        component: jobdetail
    }

];

var router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    mode: 'history'
});
window.router = router;

new Vue({
    el: '#headerContainer',
    router,
    render: h => h(headerContainer),
    watch: {
        '$route': "lagouindex"
    },
    created(){
        this.lagouindex();
    },
    methods: {
        lagouindex(){
            if (router.history.current.path == "/" || router.history.current.path == "/index" || router.history.current.path == "/index.html") {
                router.push("/index/containerright");
            }
        }
    }
})
;
new Vue({
    el: '#bottom',
    // router,
    render: h => h(bottom)
});
