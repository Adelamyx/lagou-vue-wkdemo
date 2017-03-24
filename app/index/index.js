//============导入JS文件=============
import Vue from 'mod/vue'
import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'
import 'mod/jquery'

//===========导入Vue组件==============
import Favlist from './components/Favlist.vue'
import Nav1 from './components/Nav1.vue'
import Nav2 from './components/Nav2.vue'
import header from './components/header.vue'
import containerleft from './components/containerleft.vue'
import search from './components/search.vue'
import circlePic from './components/circlePic.vue'
import advert from './components/advert.vue'
import jobnav from './components/jobnav.vue'
import friendlink from './components/friendlink.vue'
import bottom from './components/bottom.vue'
import returnback from './components/returnback.vue'

//==========导入CSS文件===============
import './style/cssReset.css'
import './style/index.css'


Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


//
// Vue.http.get("/api/role/total").then(response => {
//     var data = response.data;
//     console.log(data);
// }, response => {
//
// });

var routes = [
    {
        path: "/nav1",
        name: "/nav1",
        component: Nav1
    }, {
        path: "/nav2",
        name: "/nav2",
        component: Nav2
    }
];

//路由器实例
var router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    mode: 'history'
});

// new Vue({
//     el: '#app',
//     router,
//     components: {
//         'my-component': Favlist
//     }
// });

new Vue({
    el: '#header',
    router,
    components: {
        'my-component-header': header
    }
});

new Vue ({
    el:'.leftNav',
    router,
    components:{
        'my-component-containerleft':containerleft
    }
});
new Vue({
    el:'.searchBar',
    router,
    components:{
        'my-component-search':search
    }
});

new Vue({
    el:'.my-circlePic',
    router,
    components:{
        'my-component-circlepic':circlePic
    }
});
new Vue({
    el:'.my-advert',
    router,
    components:{
        'my-component-advert':advert
    }
});
new Vue({
    el:'.my-jobnav',
    router,
    components:{
        'my-component-jobnav':jobnav
    }
});
new Vue({
    el:'.my-friendlink',
    router,
    components:{
        'my-component-friendlink':friendlink
    }
});
new Vue({
    el:'#my-bottom',
    router,
    components:{
        'my-component-bottom':bottom
    }
});