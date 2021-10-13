<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-tittle">{{this.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe6b2;</span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data(){
        return{
            showGallary:false,
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    },
    components:{
        CommonGallary
    }
}
</script>
<style lang="stylus" scoped>
.banner
    // border 1px solid red
    position: relative
    overflow hidden
    height:0
    padding-bottom 46%
    margin 0
    .banner-img
        width 100%
        margin 0
    .banner-info
        // border 1px solid green
        display flex
        position: absolute
        left 0
        right 0
        bottom 0
        // bottom  .34rem
        line-height: .6rem
        color #fff
        margin 0
        // 在文字与图片之间建立一层渐变色
        background-image linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
        .banner-tittle
            flex 1
            font-size .32rem
            padding 0 .2rem
            margin 0
        .banner-number
            height .32rem
            line-height .32rem
            margin-top .14rem
            padding 0 .4rem
            border-radius .2rem
            background  rgba(0, 0, 0, .8)
            font-size .24rem
            margin 0
            .banner-icon
                font-size .24rem
                margin 0
</style>