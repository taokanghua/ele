<template>
    <div class="badge">
        <div class="badge-item">
            <div :class="{curr: cur == i}" v-for="(item, i) in list" :key="item" @click="change(i),thiscom=comlist[i]">{{item}}</div>
        </div>
        <div class="line"></div>

        <comment :is="thiscom"></comment>
    </div>
    
</template>

<script>
import orderFood from "./type/orderFood"
import comment from "./type/comment"
import business from "./type/business"

export default {
    data(){
        return{
            cur: 0,
            list:["点餐", "评价", "商家"],
            comlist:["orderFood", "comment", "business"],
            thiscom: "orderFood"
            // varcom: 0
        }
    },
    methods:{
        change(i){
            this.cur = i
        }
    },
    components:{
        orderFood,
        comment,
        business
    }
}
</script>

<style lang="less">
    .curr{
        border-bottom: 2px solid #67C23A;
        padding-bottom: 4px;
    }
    .badge{
        padding: 0 8px;
        box-sizing: border-box;
        width: 100%;
        margin: 8px 0;
        padding-bottom: 4px;
        .line{
            width: 100%;
            height: 2px;
            background-color: #C0C4CC;
        }
    }
    .badge-item{
        height: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        color: #303133;
    }
</style>