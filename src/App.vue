<template>
    <el-container style="border: 1px solid #eee" id="app">
      <aside-tag/>
      <el-container direction="vertical">
        <header-tag/>
        <el-main class="el-main">
          <router-view/>
        </el-main>
        <footer-tag v-if="isShow"/>
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
    computed:{
      isShow(){
        return this.$store.getters.isShow;
      }
    },
    components:{
      "headerTag": Header,
      "footerTag": Footer,
      "asideTag": Aside
    },
    watch:{
      $route(to,from){
        if (to.name === 'category'){
          this.$store.dispatch('hideFooter');
        } else {
          this.$store.dispatch('showFooter');
        }
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
  .el-main{
    min-height:550px;
  }
</style>
