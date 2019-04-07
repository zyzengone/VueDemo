<template>
  <div id="home">
    <!--自动将驼峰式命名userTag转换为这种-->
    <header-tag></header-tag>
    <users-tag v-bind:usersValue="users"></users-tag>
    <footer-tag></footer-tag>
  </div>
</template>

<script>
  //局部导入组件Users
  import Users from './Users'
  import Footer from './Footer'
  import Header from './Header'


  export default {
    name: 'Home',

    //注册主键
    components:{
      "usersTag": Users,
      "headerTag":Header,
      "footerTag":Footer
    },
    data(){
      return{
        users:[
          // {name:"zeng",position:"web",show:false},
          // {name:"zeng",position:"web",show:false},
          // {name:"zeng",position:"web",show:false},
          // {name:"zeng",position:"web",show:false},
          // {name:"zeng",position:"web",show:false},
          // {name:"zeng",position:"web",show:false}
        ]
      }
    },
    created(){
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
        this.users = data.body;
      })
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
</style>
