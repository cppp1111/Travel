<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                         v-for="item of hot" 
                         :key="item.id"
                         @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 这里循环的是对象，对象里v-for后的第二个数的key -->
            <div :ref="key" class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                         v-for="innerItem of item"
                         @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        cities :Object,
        hot :Array,
        letter:String
    },
    computed:{
        ...mapState({
            currentCity:'city'
        })
    },
    // 监听器      -----------https://blog.csdn.net/edc666/article/details/104670059/
    watch:{
        letter(){
            // console.log(this.letter);
            if(this.letter){
                // 点击右边的字母，然后跳转到对应的字母的城市列表
                // 需要获取的dom应该是整个area，而不是愚蠢的去获取title
                // 还有一点需要注意，如果是循环的，那么ref前面得加上冒号
                // 即写成 :ref
                const element = this.$refs[this.letter][0]
                // console.log(element);
                // 跳到该元素处
                this.scroll.scrollToElement(element)
            }
        }
    },
    methods:{
        handleCityClick(city){
            // alert(city)
            // 触发changeCity的action
            // 修改store里的city的值
            // this.$store.commit('changeCity',city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    // background red
    .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            float left
            width 33.33%
            .button
                margin .1rem
                padding .1rem 0
                text-align center
                border .02rem solid #ccc
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>