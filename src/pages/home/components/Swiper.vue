<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide  v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default{
name: 'HomeSwiper',
    // 当我们再子组件定义data的时候，data必须是一个函数，这是ES5的写法
data () {
return {
    swiperOption: {
        pagination: ".swiper-pagination",
        autoplay:true,
        loop: true,
        speed: 1000,
        observer:true,
        autoplayDisableOnInteraction : false, //手动播放后继续自动播放
        },
    swiperList:[{
        id:'0001',
        imgUrl:'https://img1.qunarzz.com/qs/2101/b5/945dfe4ce22d2302.jpg'
    },{
        id:'0002',
        imgUrl:'https://img1.qunarzz.com/qs/2103/de/7c7e2cdf695f2602.jpg'

    }]
    }
    }
}
</script>
<style lang="stylus" scoped>
.warpper >>> .swiper-pagination-bullet-active
    background-color: red !important

.wrapper
    text-align :center
    overflow :hidden
    width :100%
    height :0
    padding-bottom :31.25%
    background:#eee
    .swiper-img{
        width :100%
        }
</style>
