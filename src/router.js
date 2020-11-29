import Vue from "vue";
import Router from "vue-router";
/* import Home from "./views/Home.vue"; */
/* import Login from './views/login/index.vue' */
// 下面情况 默认会导入./views/login 目录下的index.vue
import Login from './views/login'
import Layout from '@/components/Layout.vue'

import Home from './views/home'
import Member from '@/views/member'
import Gooods from './views/goods'
import Staff from './views/staff'
import Supplier from './views/supplier'

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
      component: Layout,
      redirect: '/home',
      children: [{
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: '首页' }
      },
      {
        path: '/member',
        name: 'member',
        component: Member,
        meta: { title: '会员管理' }
      }
      ]
    },
    {
      path: "/supplier",
      component: Layout,
      children: [{
        path: '/',
        component: Supplier,
        meta: { title: '供应商管理' }
      }]
    },
    {
      path: "/goods",
      component: Layout,
      children: [{
        path: '/',
        component: Gooods,
        meta: { title: '商品管理' }
      }]
    },
    {
      path: "/staff",
      component: Layout,
      children: [{
        path: '/',
        component: Staff,
        meta: { title: '员工管理' }
      }]
    },
  ]
});
