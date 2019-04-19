import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Categories from "../components/Categories";
import Books from '../components/Books'
import Users from "../components/Users";
import Login from "../components/Login"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'/user',component:Users,name:'users'},
        {path:'categories',component:Categories,name:'category'},
        {path:'/category/:id',component:Books,name:'book'}
      ]
    }
  ],
  mode:'hash'
})
