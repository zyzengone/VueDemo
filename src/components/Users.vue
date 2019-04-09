<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(user,index) in usersValue" :key="index" class="distance list">

        <div class="grid-content bg-purple"><span>{{user.name}}</span></div>
      </el-col>
    </el-row>
    <el-button type="primary" @click="deleteUser" class="btn">主要按钮</el-button>
  </div>
</template>

<script>
    export default {
        name: "Users",
        props:{
          //在app中自定义的属性名
          usersValue:{
            type:Array,
            require:true
          }
        },
      methods:{
          deleteUser:function () {
            this.usersValue.pop();
          }
      }
    }
</script>

<style scoped>
h2{

}
span{

    margin: auto;
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
  }
.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  display: flex;
}
  .distance{
    margin-top: 50px;
  }
</style>
