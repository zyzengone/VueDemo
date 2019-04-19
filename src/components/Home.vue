<template>
  <el-container style="border: 1px solid #eee" id="home">
    <!--自动将驼峰式命名userTag转换为这种-->
    <aside-tag/>
    <el-container direction="vertical">
      <header-tag/>
      <el-main class="el-main">
        <router-view/>
      </el-main>
      <footer-tag/>
    </el-container>
  </el-container>
</template>

<script>
  //局部导入组件Users
  import Users from './Users'
  import Aside from './Aside';
  import Footer from './Footer';
  import Header from './Header'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'Home',

    //注册主键
    components: {
      "usersTag": Users,
      "asideTag": Aside,
      "footerTag": Footer,
      "headerTag":Header

    },
    data() {
      return {
        users: []
      }
    },
    computed: mapGetters([]),
    created() {
      //测试
      this.axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
        this.users = response.data;
      })
      // this.axios.get("users").then((response) => {
      //   this.users = response.data.content;
      // })
    },
    methods:mapActions(["getNewNum"])
  }
</script>

<style scoped>
  .el-main{
    min-height: 700px;
  }
</style>
