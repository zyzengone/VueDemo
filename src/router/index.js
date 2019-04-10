import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Categories from "../components/Categories";
import Books from '../components/Books'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'user',
      component:Home
    },
    {
      path: '/users',
      name: 'Home',
      component: Home
    },

    {
      path:'/categories',
      name:'category',
      component:Categories
    },
    {
      path:'/category/:id',
      name:'book',
      component:Books
    }
  ],
  mode:'hash'
})
