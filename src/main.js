import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//引入组件
import App from './app.vue';
import home from './components/home.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

var app = Vue.extend(App);

var router = new VueRouter();

//配置路由
router.map({
    '/home': {
        component: home
    }
});
//设置默认情况下打开的页面
router.redirect({
    '/': 'home'
});
router.start(app, '#app');
//暴露路由接口调试
window.router = router;
