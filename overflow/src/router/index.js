import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import PostQuestion from '@/components/PostQuestion'
import QuestionDetail from '@/components/QuestionDetail'
import EditQuestion from '@/components/EditQuestion'
import DeleteQuestionModal from '@/components/DeleteQuestionModal'

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
      path: '/delete',
      name: 'Delete',
      component: DeleteQuestionModal
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
      path: '/questions/:questid/edit',
      name: 'edit',
      component: EditQuestion,
      props: true
    },
    {
      path: '/questions/:questid',
      children: [
        {
          path: 'edit',
          component: EditQuestion
        }
      ],
      name: 'OneArticle',
      component: QuestionDetail,
      props: true
    }
  ]
})
