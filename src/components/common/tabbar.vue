<template>
    <footer class="tabbar" ref="tabbar">
      <router-link :to="{name: 'home'}" class="tabbar-item" tag="div">
        <i class="el-icon-eleme"></i>
        <p>外卖</p>
      </router-link>
      <router-link :to="{name:'supermaket'}" class="tabbar-item" tag="div">
        <i class="el-icon-box"></i>
        <p>超市</p>
      </router-link>
      <router-link :to="{name: 'order'}" class="tabbar-item" tag="div">
        <i class="el-icon-document"></i>
        <p>订单</p>
      </router-link>
      <router-link :to="{name: 'my'}" class="tabbar-item" tag="div">
        <i class="el-icon-user"></i>
        <p>我的</p>
      </router-link>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
.tabbar {
  max-width: 750px;
  margin: auto;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: #E4E7ED;
  padding: 4px 0;
  border-top: 1px solid #C0C4CC;
  .tabbar-item {
    text-align: center;
    color: #303133;
    i {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
  }
}
</style>