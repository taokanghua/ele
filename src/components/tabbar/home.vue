<template>
  <div class="main">
    <header class="header">
      <section class="top">
        <p>
          <i class="el-icon-location"></i><a href="#">正在定位位置</a>
        </p>
        <p>
          <i class="el-icon-sunny"></i><a href="#">18℃</a>
        </p>
      </section>
      <section class="search">
        <i class="el-icon-search"></i>
        <input type="text" name="search" placeholder="想吃啥就搜啥" />
      </section>
      <section class="swiper">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in lunbolist" :key="item.id">
            <img :src="item.img" alt />
          </el-carousel-item>
        </el-carousel>
      </section>
      <section class="activity">
        <img src="../../assets/home1.jpg" alt />
      </section>
    </header>

        <!-- 种类类别 -->
    <div class="type">
        <router-link :to="{name: 'relfood'}" class="type-item" tag="div">
            <img src="../../assets/fish.png" alt="">
            <p>真美食</p>
        </router-link>
        <div class="type-item" v-for="item in 9" :key="item">
            <img src="../../assets/food.png" alt="">
            <p>美食</p>
        </div>
    </div>
    <!-- 小热门   -->
    <div class="tip">
        <img src="../../assets/super.png" alt="">
        <img src="../../assets/alliwace.png" alt="">
    </div>
    <!-- 优惠专区 -->
    <h3 class="t-dis">优惠专区</h3>
    <div class="discount">
        <div class="dc-">
            <img src="../../assets/speed.png" alt="" class="dc-title">
            <div class="vice">
                <img src="../../assets/detail.png" alt="">
                <img src="../../assets/detail.png" alt="">
            </div>
        </div>
        <div class="dc-">
            <img src="../../assets/right.png" alt="" class="dc-title">
            <div class="vice">
                <img src="../../assets/detail.png" alt="">
                <img src="../../assets/detail.png" alt="">
            </div>
        </div>
    </div>
    <!-- 专属晚餐 -->
    <h3 class="t-dis">专属•晚餐</h3>
    <div class="own">
        <div class="own-detail">
            <img src="../../assets/own.png" alt="">
            <div class="shelter">
                <p class="shop-name">北京烤鸭店</p>
                <p>根据你购买过推荐</p>
            </div>    
        </div>
        <div class="own-detail">
            <img src="../../assets/own.png" alt="">
            <div class="shelter">
                <p class="shop-name">北京烤鸭店</p>
                <p>根据你购买过推荐</p>
            </div>    
        </div>
         <div class="own-detail">
            <img src="../../assets/own.png" alt="">
            <div class="shelter-2">
                <div class="left">
                    <p class="shop-name">品质快餐</p>
                    <p>6.7万人购买</p>
                </div>
                <div class="right">
                    <img src="../../assets/timg.jpeg" alt="">
                </div>
            </div>    
        </div>
         <div class="own-detail">
            <img src="../../assets/own.png" alt="">
            <div class="shelter-2">
                <div class="left">
                    <p class="shop-name">炸鸡炸串</p>
                    <p>16.0万人购买</p>
                </div>
                <div class="right">
                    <img src="../../assets/timg.jpeg" alt="">
                </div>
            </div>    
        </div>
    </div>
    <!-- 工具栏 -->
    <tabbar />
  </div>

</template>

<script>
import axios from "axios"
import tabbar from "../common/tabbar"
export default {
  data() {
    return {
      lunbolist: [],
      
    };
  },
  methods: {
    getlunbo() {
      axios
        .get("/lunbo")
        .then(suc => {
          this.lunbolist = suc.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getlunbo();
  },
  components: {
      tabbar
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  background: linear-gradient(left, #f56c6c, #e939e9);
  // padding: 0 6px;
  box-sizing: border-box;
  padding: 0 8px;
  overflow: hidden;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  font-size: 18px;
  color: #fff;
  i {
    font-size: 26px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
}
.search {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  position: relative;
  input {
    border-radius: 20px;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 30px;
    box-sizing: border-box;
  }
  i {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
}
.swiper {
  img {
    width: 100%;
    height: 100%;
  }
}
.activity {
  margin-top: 10px;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
}

.type{
    width: 100%;
    padding: 10px 20px 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    .type-item{
        width: 20%;
        text-align: center;
        margin-bottom: 10px;
        img{
            width: 50px;
            height: 50px;
        }
        p{
            font-size: 15px;
        }
    }
}
.tip{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    box-sizing: border-box;
    img{
        width: 47%;
    }
}
.t-dis{
    margin: 10px 0 10px 8px;
    font-size: 20px;
    font-weight: 500;
    
}
.discount{
    padding: 0 8px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    .dc-{
        width: 49%;
        display: flex;
        flex-direction: column;
        .dc-title{
            width: 100%;
            height: 200px;
        }
        .vice{
            display: flex;
            justify-content: space-between;
            img{
                width: 48%;
            }
        }
    }
}
.own{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 8px;
    justify-content: space-between;
    .own-detail{
        margin-bottom: 10px;
        width: 49%;
        height: 180px;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .shelter{
            box-sizing: border-box;
            border-radius: 5px;
            padding-left: 10px;
            width: 100%;
            position: absolute;
            bottom: 0;
            background: rgba(225, 226, 231, 0.8);
            .shop-name{
                font-weight: 500;
                font-size: 14px;
            }
            p:nth-child(2){
                font-size: 12px;
                color:#E6A23C;
            }
        }
        .shelter-2{
            position: absolute;
            bottom: 10px;
            width: 90%;
            left: 50%;
            transform:translateX(-50%);
            background-color: #fff;
            border-radius: 5px;
            height: 50px;
            padding: 4px 8px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            .left{
                p{
                    &:first-child{
                        font-size: 14px;
                    }
                    &:last-child{
                        font-size: 12px;
                        color:#909399;
                    }
                }
            }
            .right{
                height: 100%;
                width: 50px;
            }
        }
    }
}
</style>