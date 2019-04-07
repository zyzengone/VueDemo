<template>
    <footer>
      <p>{{title}}</p>
      <p>{{copyright}}</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data(){
          return{
            copyright:"Copytight 2017 vue demo",
            title: "demo"
          }
        }
    }
</script>

<style scoped>
  footer{
    : bottom;
    background: cornflowerblue;
    padding: 6px;
  }
</style>
