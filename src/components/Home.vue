<template>
  <div id="home">
    <!--自动将驼峰式命名userTag转换为这种-->

    <users-tag v-bind:usersValue="users"></users-tag>
      Count is {{$store.state.changeableNum}}
      <button @click="getNewNum">+5</button>
  </div>
</template>

<script>
  //局部导入组件Users
  import Users from './Users'
  import {mapGetters,mapActions} from 'vuex'
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

<style>

</style>
