<template>
  <section class="food">
    <div class="head">
      <div class="h-title">
        <div class="title" @click="back">
          <i class="el-icon-back"></i>&nbsp;&nbsp;
          <span>美食</span>
        </div>
        <i class="el-icon-search"></i>
      </div>

      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="(item, i) in menulist" :key="item.id" >
            <span @click="change(i),getshopinfo(item.ssid)" :class="{active: i  === cur}">{{item.title}}</span>
        </swiper-slide>
      </swiper>
    </div>

    <div class="adv" v-show="cur == 0">
          <img src="../../assets/all.jpg" alt="" style="width:100%">
    </div>

    <!-- 店铺列表 -->
      <div class="shop">
        <router-link :to="{name:'shopinfo',params:{id:item.shopid}}" tag="div" class="shopitem" v-for="item in shopinfos" :key="item.id">
          <div class="img" style="border-radius:3px">
            <img :src="item.img" alt="" style="border-radius:3px">
          </div>
          <div class="info">
            <h4>{{ item.shopname }}</h4>
            <div class="two">
              <div class="two-left"><i class="el-icon-star-on">{{ item.rage }}</i> <span class="word">月售{{ item.sell }}</span></div>
              <div class="beebird" v-show="item.beebird">蜂鸟专送</div>
            </div>
            <div class="three">
                <div class="price"><span class="word">起送{{ item.starttake }}&nbsp;配送¥{{ item.price }}&nbsp;<del style="font-size=1px">¥{{ item.oldprice }}</del></span></div>
                <div class="time word">{{ item.time }}分钟 {{ item.distance }}km</div>
            </div>
            <div class="four">
              <span class="comment">{{ item.comment }}</span>
              <div class="tag">
                <span class="tag-s" v-for="a in item.active" :key="a">{{ a }}</span>
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
          </div> 
        </router-link>
      </div> <!-- shop end -->
  </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios"
export default {
  data() {
    return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 0,
          freeMode: true,
        },
        menulist:[],
        cur:0,
        shopinfos: []
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
      getmenu(){
          axios.get("/selectment")
                .then( suc => {
                    suc.data.unshift({id:1, title:"全部", ssid: 0})
                    this.menulist = suc.data
                    // console.log(suc)
                })
                .catch( err => {
                    console.log(err)
                })
      },
      change(i){
        this.cur = i
        // console.log(this.cur)
      },
      getshopinfo(id){
        // this.shopinfos = []
        axios.get("/shopinfo/" + id)
            .then( suc => {
              this.shopinfos = suc.data
              // console.log(this.shopinfos)
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
      this.getmenu()
      this.getshopinfo(0)
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.active{
    color: #fff !important;
}
.food {
  width: 100%;
  // padding-top: 94px;
}
.head {
  background-color: #409eff;
  color: #fff;
  padding: 8px 8px;
  box-sizing: border-box;
  .h-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      display: flex;
      align-items: center;
      span {
        font-size: 20px;
        font-weight: 500;
      }
    }
    i {
      font-size: 20px;
    }
  }
}
.swiper{
    margin: 20px 0 8px 0;
    color: #DCDFE6;
}
.shop{
  box-sizing: border-box;
  padding: 4px 8px;
}
.shopitem{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  .img{
    flex: 1;
    img{
      width: 100%;
      height: 80px;
    }
  }
  .info{
    flex: 4;
    padding-left: 6px;
    box-sizing: border-box;

    .word{
      //所有小字
      font-size: 10px;
      color: #606266;
      font-weight: 300;
    }
    i{
      //所有的字体图标
      font-size: 12px;
      color: orange;
    }
    .beebird{
      background-color: #409eff;
      color: #fff;
      font-size: 4px;
      font-weight: 300;
      padding: 2px;
    }
    .comment{
      //所有评论样式
      background-color: #FAECD8;
      font-size: 1px;
      font-weight: 300;
      color: orange;
      padding: 1px;
    }
    .tag-s{
      font-size: 1px;
      font-weight: 300;
      border: 1px solid #FAE2E2;
      padding: 1px;
      box-sizing: border-box;
      color: #E13530;
      margin-right: 6px;
    }
    .two{
      display: flex;
      justify-content: space-between;
    }
    .three{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tag{
      position: relative;
      i{
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 16px;
        color: #606266;
      }
    }
  }
}
</style>