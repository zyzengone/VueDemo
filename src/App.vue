<template>
  <div id="app">
    <router-view></router-view>
  </div>
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
  }

</script>

<style>
</style>
