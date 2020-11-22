import Vue from "vue";
import Router from "vue-router";
/* import Home from "./views/Home.vue"; */
/* import Login from './views/login/index.vue' */
// 下面情况 默认会导入./views/login 目录下的index.vue
import Login from './views/login'
import Layout from '@/components/Layout.vue'


Vue.use(Router);

export default new Router({
  //mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "layout",
      component: Layout
    }
  ]
});
