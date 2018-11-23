import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../pages/movie/Root'
import Cinema from '../pages/cinema/Root'
import Mine from '../pages/mine/Root'
import Search from '../pages/common/search'
import Citylist from '../pages/common/Citylist.vue'
import Login from '../pages/common/Login.vue'
import Buy from '../pages/common/buy .vue'
                                                                                                                                                                                                                                                                                                                           
 Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/movie',
      name:'movie',
      component: Movie,
      children: [
        {
          path: 'search',
          component: Search,
          props: {
            type: ['cinema', 'movie']
          }
        },
        {
          path: 'city-list',
          component: Citylist
        }
       
      ]
    },
    {
      path: '/cinema',
      component: Cinema,

      children: [
        {
          path: 'search',
          component: Search,
          props: {
            type: ['cinema', 'movie']
          }
        },
        {
          path: 'city-list',
          component: Citylist
        }
      ]
    },
    {
      path: '/mine',
      component: Mine,
    },
    {
      path: '/buy-list/:id/:name',
      name:'buy-list',
      component: Buy
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '**',
      redirect: '/movie'
    }
  ]
})

export default router;
router.beforeEach((to, from, next)=>{
  if(to.path == '/mine' || to.path == '/buy'){
    // 判断是否登录了
    let token = localStorage.getItem('token');
    if(token){
      next();
    }else{
      next('/login');
    }
  }
  else{
    next();
  }
  
})

