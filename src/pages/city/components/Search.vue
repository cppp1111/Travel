<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                    v-for="item of list" 
                    :key="item.id"
                    @click="handleCityClick(item.name)">{{item.name}}</li>
                <li v-show="hasNoData" class="search-item border-bottom">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
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
    // 计算属性
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    // 监听器
    watch:{
        keyword(){
            // 节流
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(()=>{
                const result = []
                // 这里的i值元素的下标
                // 在 for/in 循环结构中，变量 i 表示数组的下标，而 a[i] 为可以读取指定下标的元素值。
                for (let i in this.cities){
                    // 对里面的ABC再次进行遍历
                    this.cities[i].forEach((value) => {
                        // 注释：indexOf() 方法对大小写敏感！
                        // 注释：如果要检索的字符串值没有出现，则该方法返回 -1。
                        if (value.spell.indexOf(this.keyword) >-1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    });
                }
                this.list = result
            },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height: .72rem
    padding: 0
    padding-left .1rem
    padding-right .1rem
    background: $bgColor
    .search-input
        box-sizing border-box
        padding 0 .1rem
        width 100%
        height .62rem
        line-height .62rem
        text-align center
        background #fff
        border-radius .06rem
        color #666
.search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
        line-height .62rem
        padding-left .2rem
        color #666
        background #fff
</style>