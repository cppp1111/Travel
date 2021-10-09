<template>
<div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default{
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            lastCity:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    computed:{
        // mapState作用：可以辅助获取到多个state的值
        // 然后就可以不用$store.state.num引用了,直接插值
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            // axios的方法，请求一个url
            axios.get('/api/index.json?city=' + this.city)
            // axios返回的结果是一个project对象
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res=res.data
            if(res.ret&&res.data){
                const data=res.data
                this.swiperList=data.swiperList
                this.iconList=data.iconList
                this.recommendList=data.recommendList
                this.weekendList=data.weekendList
            }
        }
    },
    // axios数据的获取，即让页面挂载好了之后，执行这个函数，执行一次
    mounted () {
        // console.log('mounted');
        this.lastCity = this.city
        this.getHomeInfo()
    },
    // 当页面重新显示执行的时候调用activated
    activated () {
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
        // console.log('actived');
    }
}
</script>
<style>

</style>