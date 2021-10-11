<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://imgs.qunarzz.com/sight/p0/2110/f3/f37ce8102d8cf49ea3.img.jpg_710x360_05cbeb01.jpg" alt="">
            <div class="banner-info">
                <div class="banner-tittle">世界之窗5A景区</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe6b2;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'DetailBanner',
    data(){
        return{
            showGallary:false,
            imgs:['https://imgs.qunarzz.com/sight/p0/2110/f3/f37ce8102d8cf49ea3.img.jpg_710x360_05cbeb01.jpg',
                        'https://imgs.qunarzz.com/sight/p0/2110/d8/d8b559c0ba0e3ea5a3.img.jpg_1190x550_6f613100.jpg']
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