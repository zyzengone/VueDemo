<template>
    <el-header style="text-align: right;font-size: 10px" class="el-header">
      <router-link to="/login"><div v-bind="username">login</div></router-link>
    </el-header>
</template>

<script>
    export default {
      name: "Header",
      data()
      {
        return{
          username:''
        }
      },
      mounted() {
         this.username = sessionStorage.getItem('user')
      }
    }
</script>

<style scoped>
  .el-header {
    background-color: #66BAB7;
    color: #ffffff;
    line-height: 60px;
  }
</style>
