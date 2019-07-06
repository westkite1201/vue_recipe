import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RecipeHome from './views/RecipeHome'
import News from './views/News.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipe',
      name: 'RecipeHome',
      component: RecipeHome
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
