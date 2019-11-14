<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
#app {
  max-width: 750px;
  margin: 0 auto;
  padding-bottom: 60px;
}
.now{
    //选中状态
    color: #409EFF !important;
  }

</style>
