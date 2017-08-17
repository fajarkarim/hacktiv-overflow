
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '../router/index'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000/api'

const store = new Vuex.Store({
  state: {
    login: {
      status: '',
      name: ''
    },
    usersQuestions: [],
    questions: [],
    oneQuestion: {}
  },
  mutations: {
    setUsersQuestions (state, payload) {
      state.usersQuestions = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    },
    setOneQuestion (state, payload) {
      state.oneQuestion = payload
    },
    setLogin (state, payload) {
      state.login.name = payload.name
      state.login.status = true
    },
    doLogout (state) {
      state.login.status = false
      state.login.name = ''
      localStorage.removeItem('overflowToken')
    }
  },
  actions: {
    getUsersQuestions (context) {
      axios.get('/users')
      .then(({ data }) => {
        let filteredData = data.filter(d => {
          return d.Questions.length !== 0
        })
        context.commit('setUsersQuestions', filteredData)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getQuestions ({ commit }) {
      axios.get('/questions', {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(({ data }) => {
        commit('setQuestions', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getOneQuestion ({ commit }, payload) {
      console.log(`----- masuk one question`)
      axios.get(`/questions/${payload.questID}`)
      .then(({ data }) => {
        commit('setOneQuestion', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    postQuestion ({ state, dispatch }, payload) {
      axios.post(`/questions/`, {
        title: payload.title,
        content: payload.content
      }, {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(({data}) => {
        console.log(data)
        dispatch('getQuestions', {
          questID: payload.questID
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    postAnswer ({ dispatch }, payload) {
      axios.post(`/answers`, {
        content: payload.content,
        question_id: payload.questID
      }, {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(({ data }) => {
        dispatch('getOneQuestion', {
          questID: payload.questID
        })
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    postQVote ({ dispatch }, payload) {
      axios.post('/q_votes', {
        type: payload.type,
        questionID: payload.questionID
      }, {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(created => {
        dispatch('getOneQuestion', {
          questID: payload.questionID
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateQVote ({ dispatch }, payload) {
      axios.put(`/q_votes/${payload.qvID}`, {
        type: payload.type
      }, {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(updated => {
        dispatch('getOneQuestion', {
          questID: payload.questionID
        })
      })
      .catch(err => console.log(err))
    },
    postAVote ({ dispatch }, payload) {
      axios.post(`/a_votes/`, {
        type: payload.type,
        answerID: payload.answerID
      }, {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(({ data }) => {
        console.log(data)
        dispatch('getOneQuestion', {
          questID: payload.questionID
        })
      })
      .catch(err => console.log(err))
    },
    updateAVote ({ dispatch }, payload) {
      axios.put(`/a_votes/${payload.avID}`, {
        type: payload.type
      }, {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(({ data }) => {
        console.log(data)
        dispatch('getOneQuestion', {
          questID: payload.questionID
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    doRegister ({ commit }, payload) {
      axios.post(`/users/register`, {
        email: payload.email,
        name: payload.name,
        username: payload.username,
        password: payload.password
      })
      .then(({ data }) => {
        data.hasOwnProperty('err') ? console.log(data.err) : router.push('/login')
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    doLogin ({ commit }, payload) {
      axios.post(`/users/login`, {
        email: payload.email,
        password: payload.password
      })
      .then(({ data }) => {
        console.log(data)
        localStorage.setItem('overflowToken', data.token)
        commit('setLogin', {
          name: data.name
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  plugins: [createPersistedState()]
})

export default store
