<template>
  <section class="info">
    <div class="info-header">
      <div class="bg">
        <!-- 这个盒子只是为了放背景图片 -->
        <div class="tools">
          <i class="el-icon-back" @click="back"></i>
          <div class="nouse">
            <i class="el-icon-search"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-more-outline"></i>
          </div>
        </div>
      </div>
      <div class="pic">
        <img src="http://img.ivsky.com/img/tupian/t/201109/22/caiyao_haixian_kekou-005.jpg" alt />
        <div class="love">
          <i class="el-icon-star-off"></i>
        </div>
      </div>
    </div>
    <!-- 店铺信息 -->
    <div class="detail">
      <h3>{{ info.shopname }}</h3>
      <span>评价{{ info.rage }}</span>
      <span>月售{{ info.sell }}</span>
      <span>蜂鸟快送约{{ info.time }}分钟</span>
      <div class="coupon">
        <div class="ticket">
          <div class="left">3折起抵用券</div>
          <div class="right">购买</div>
        </div>
      </div>

      <!-- 优惠 -->
      <div class="full-redu">
        <div class="tag">
          <span class="tag-s" v-for="item in info.active" :key="item">{{ item }}</span>
        </div>
        <span class="aa">
          6个优惠
          <i class="el-icon-arrow-down"></i>
        </span>
      </div>
      
      <choosetype></choosetype>
    </div>
  </section>
</template>

<script>
import choosetype from "../common/choosetype"
import axios from "axios"
export default {
  data() {
    return {
      id: this.$route.params.id,
      activeName: "second",
      info:{}
    }
  },
  components:{
      choosetype
    },
    methods:{
      getinfo(){
        axios.get("/getinfo/"+ this.id)
          .then( suc => {
            this.info = suc.data[0]
            // console.log(this.info)
          })
          .catch( err => {
            console.log(err)
          })
      },
      back(){
        this.$router.go(-1)
      }
    },
    created(){
      this.getinfo()
    }
};
</script>

<style lang="less">

* {
  margin: 0;
  padding: 0;
}
.info-header {
  height: 115px;
  position: relative;
  .bg {
    width: 100%;
    height: 100px;
    background: linear-gradient(left, #f56c6c, #e939e9);
    .tools {
      padding: 15px 8px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

      i {
        font-size: 24px;
        color: #fff;
      }
      .nouse {
        width: 30%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .pic {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    text-align: center;
    img {
      vertical-align: middle;
      width: 80px;
      height: 70px;
    }
    .love {
      padding: 0 4px;
      position: absolute;
      right: 8px;
      bottom: 0;
      font-size: 24px;
      color: #f56c6c;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 4px grey;
    }
  }
}
.info .detail {
  text-align: center;
  margin: 10px 0;
  span {
    font-size: 10px;
    color: #606266;
    padding: 0 2px;
    // border-right: 1px solid #909399;
    // box-sizing: border-box;
    height: 11px;
    display: inline-block;
    margin: 8px 4px 12px 0;
  }
  .coupon {
    .ticket {
      display: flex;
      justify-content: center;
      font-size: 13px;
      color: #fff;
      text-align: center;
      .left {
        background-color: #f56c6c;
        padding: 2px 18px;
        border-right: 1px dotted grey;
      }
      .right {
        padding: 2px 3px;
        background-color: #f56c6c;
        position: relative;
        &:after {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          background-color: #fff;
          left: -4px;
          top: -4px;
        }
        &:before {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          background-color: #fff;
          left: -4px;
          bottom: -4px;
        }
      }
    }
  }
  .tag-s {
    display: inline-block;
    border: 1px solid red;
    padding-bottom: 4px;
    color: red;
  }
  .full-redu {
    display: flex;
    padding: 0 50px;
    justify-content: space-between;
    .aa {
      font-size: 8px;
      color: #c0c4cc;
    }
  }
}
.tab {
  width: 100%;
  padding: 0 8px;
  
}
</style>