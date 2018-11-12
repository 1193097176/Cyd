// 路由模块
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import MSite from '../pages/MSite/MSite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';

var router =  new VueRouter({
   routes:[
       {path:"/msite",component:MSite},
       {path:"/order",component:Order},
       {path:"/profile",component:Profile},
       {path:"/search",component:Search},
       {path:"/",redirect:"MSite"}
   ]
})
export default router



