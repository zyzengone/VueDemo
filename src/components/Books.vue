<template>
  <div>
    <h1>书籍</h1>
    <el-row :gutter="20">
      <el-col :sm="6" :lg="3" v-for="(book,index) in books" :key="index" class="col">
        <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
          <div style="padding: 8px;">
            <span>{{book.name}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Books",
        data(){
          return {
            books:[],
            id:0
          }
        },
        created() {
          this.id = this.$route.params.id;
          this.axios.get("categories/"+this.id+"/books").then((response)=>{
            this.books = response.data.content;
          })
          // this.id = this.$route.params.userId;
          // this.axios.get("categories?userId="+this.id).then((response)=>{
          //   this.books = response.data
          // })
        }
    }
</script>

<style scoped>

</style>
