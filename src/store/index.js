import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  showFooter:true,
  changeableNum:0
};

const getters = {   //实时监听state值的变化(最新状态)
  isShow(state){    //方法名随意,主要是来承载变化的showFooter的值
    return state.showFooter
  },
  getChangedNum(){  //方法名随意,主要是用来承载变化的changableNum的值
    return state.changeableNum
  }
};

//对象字面量表示https://www.cnblogs.com/zhuzhenwei918/p/6013363.html

const mutations = {
  show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true;
  },
  hide(state) {  //同上
    state.showFooter = false;
  },
  newNum(state){ //同上，这里面的参数除了state之外还传了需要增加的值sum
    state.changeableNum=state.changeableNum+5;
  }
};

const actions = {
  hideFooter(context){
    context.commit('hide');
  },
  showFooter(context){
    context.commit('show')
  },
  getNewNum(context){
    context.commit('newNum')
  }
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;
