<template>
    <ul class="list">
        <li class="item" v-for="item of letters" 
            :key="item" 
            :ref="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd">
            {{item}}
        </li>
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    data(){
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick (e) {
            // 向父组件传递点击的字母内容，即每次点击时，向外触发change事件，并且传递这个值，-------https://blog.csdn.net/edc666/article/details/104670059/
            this.$emit('change',e.target.innerText)
            // console.log(e.target.innerText);
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if (this.touchStatus) {
                // 节流
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    // console.log(startY);
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    // console.log(index);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd(){
            this.touchStatus=false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
        line-height .44rem
        text-align center
        color $bgColor
</style>