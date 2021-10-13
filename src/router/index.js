import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/city',
        name: 'City',
        component: City
    }, {
        // id前面加了冒号，可以作为一个动态路由
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }],
    scrollBehavior(to, from, savedPosiotion) {
        return { x: 0, y: 0 }
    }
})