<template>
  <div id="home">
    <!--自动将驼峰式命名userTag转换为这种-->

    <users-tag v-bind:usersValue="users"></users-tag>

  </div>
</template>

<script>
  //局部导入组件Users
  import Users from './Users'

  export default {
    name: 'Home',

    //注册主键
    components: {
      "usersTag": Users,

    },
    data() {
      return {
        users: []
      }
    },
    computed: {
      isShow() {
        return this.$store.getters.isShow;
      }
    },
    created() {
      //测试
      this.axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
        this.users = response.data;
      })
      // this.axios.get("users").then((response) => {
      //   this.users = response.data.content;
      // })
    },
    watch: {
      $route(to, from) { //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
        console.log(to);
        if (to.name === '' || to.name === 'hello') { // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
          this.$store.dispatch('showFooter') // 利用派发全局state.showFooter的值来控制        }else{
          this.$store.dispatch('hideFooter')
        } else {
          this.$store.dispatch('hideFooter')
        }
      }
    }
  }
</script>

<style>

</style>
