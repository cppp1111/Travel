// 单文件组件
<template>
  <div id="app">
    <!-- 除了Detail之外其他的页面都会被缓存 -->
    <keep-alive  exclude="Detail">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 显示的是当前地址所对应的路由内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
