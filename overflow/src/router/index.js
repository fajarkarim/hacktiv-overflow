import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import PostQuestion from '@/components/PostQuestion'
import QuestionDetail from '@/components/QuestionDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ask',
      name: 'PostQuestion',
      component: PostQuestion
    },
    {
      path: '/questions/:questid',
      name: 'OneArticle',
      component: QuestionDetail,
      props: true
    }
  ]
})
