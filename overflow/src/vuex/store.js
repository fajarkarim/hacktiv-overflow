
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

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
        console.log(`------- masuk errror`)
        console.log(err.message)
      })
    },
    doRegister ({ commit }, payload) {
      console.log(payload)
      console.log(`------ masuk atas reg`)
      axios.post(`/users/register`, {
        email: payload.email,
        name: payload.name,
        username: payload.username,
        password: payload.password
      })
      .then(({ data }) => {
        console.log(`--------- masuk register`)
        console.log(data)
      })
      .catch(err => {
        console.log(`---- masuk err`)
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
