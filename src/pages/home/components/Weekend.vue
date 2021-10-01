<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for='item of recommendList' :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    data () {
        return {
            recommendList: [{
            id:'0001',
            imgUrl:'	https://imgs.qunarzz.com/vs_ceph_vcimg/96e475735e43dbdb86232d4c843582c3.jpeg',
            title:'大连圣亚海洋世界',
            desc:'浪漫大连首战，浪漫的海洋主题乐园'
        },{
            id:'0002',
            imgUrl:'	https://imgs.qunarzz.com/vs_ceph_vcimg/96e475735e43dbdb86232d4c843582c3.jpeg',
            title:'大连圣亚海洋世界',
            desc:'浪漫大连首战，浪漫的海洋主题乐园'
        },{
            id:'0003',
            imgUrl:'	https://imgs.qunarzz.com/vs_ceph_vcimg/96e475735e43dbdb86232d4c843582c3.jpeg',
            title:'大连圣亚海洋世界',
            desc:'浪漫大连首战，浪漫的海洋主题乐园'
        }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top:.2rem
        line-height : .8rem
        background:#eee
        text-indent:.2rem
    .item-img-wrapper
        overflow: hidden
        height:0
        padding-bottom:33.9%
        .item-img
            width: 100%
    .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
    .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
</style>