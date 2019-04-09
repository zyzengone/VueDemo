import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Posts from "../components/Categories";
import Books from '../components/Books'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'Home',
      component: Home
    },

    {
      path:'/posts',
      name:'posts',
      component:Posts
    },
    {
      path:'/category/:id',
      name:'book',
      component:Books
    }
  ],
  mode:'hash'
})
