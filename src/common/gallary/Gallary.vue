<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <!-- V-for循环遍历数组时推荐使用of，语法格式为(item，index) -->
                <!-- V-for循环遍历对象时推荐使用in，语法格式为(item,name,index) -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default (){
                return[]
            }
        }
    },
    data(){
        return{
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true
        }
        }
    },
    methods:{
        handleGallaryClick(){
            // 当画布被点击时触发事件，目的是取消这个页面的显示，因为现在是方法图片
            // 当点击放大的图片后缩小
            // 调用这个事件的是Bannner组件里决定是否显示放大图片的部分
            this.$emit('close')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
    // inherit 关键字指定一个属性应从父元素继承它的值。
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            // overflow hidden
            // height 0
            // width 100%
            // padding-bottom 100%
            .gallary-img
                display:block;
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
                
</style>