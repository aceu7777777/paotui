import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path:'/login',
    name:'Login',
    component:()=> import('@/views/login')
  },
  {
    path:'/register',
    name:'Register',
    component:()=> import('@/views/register')
  },
  {
    path:'/',
    name:'Layout',
    component:()=> import('@/views/Layout.vue'),
    redirect: 'home', // 默认显示首页的二级路由
    children:[
      {
        path:'/home',
        name:'Home',
        component: () => import('@/views/home')
      },
      {
        path:'/myorder',
        name:'Myorder',
        component: () => import('@/views/myorder')
      },
      {
        path:'/mypickorder',
        name:'Mypickorder',
        component: () => import('@/views/mypickorder')
      },
      {
        path:'/myinfo',
        name:'Myinfo',
        component: () => import('@/views/myinfo')
      },
      {
        path:'/realinfo',
        name:'Realinfo',
        component: () => import('@/views/realinfo')
      },
      {
        path:'/putorder',
        name:'Putorder',
        component: () => import('@/views/putorder')
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
