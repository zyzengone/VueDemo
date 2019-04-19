<template>

    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="logo">VueDemo</div>
      <el-menu :default-active="this.$router.path"
               router
               class="el-menu-demo"
               mode="vertical"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">

          <el-menu-item  index="/users"><i class="el-icon-menu"></i><span slot="title">用户</span></el-menu-item>
          <el-menu-item  index="/categories"><i class="el-icon-menu"></i><span slot="title">分类</span></el-menu-item>

      </el-menu>
    </el-aside>


</template>


<script>
    export default {
        name: "Header",
        data(){
          return {
            title:"vue demo",
          }
        }
    }
</script>

<style scoped>
  .el-icon-menu{
    margin-left: 1px;
  }
  .logo{
    font-size: 20px;
    background-color: #66BAB7;
    color: #ffffff;
    line-height: 60px;
    text-align: center;
    margin-right: 1px;
  }
</style>
