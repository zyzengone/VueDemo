<template>
    <el-container style="border: 1px solid #eee" id="app">
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
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header'

  export default {
    name: 'App',

    data(){
      return{

      }
    },
    components:{
      "headerTag": Header,
      "footerTag": Footer,
      "asideTag": Aside
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .el-main{
    min-height:700px;
  }
</style>
