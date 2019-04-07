<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return {
            title:"vue demo"
          }
        }
    }
</script>

<style scoped>
  div{
    background: cornflowerblue;
    padding: 6px;
    line-height: 40px;
  }
</style>
