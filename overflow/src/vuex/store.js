
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loggedIn: {},
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
    }
  },
  actions: {
    getUsersQuestions (context) {
      axios.get('http://localhost:3000/api/users')
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
      axios.get('http://localhost:3000/api/questions')
      .then(({ data }) => {
        commit('setQuestions', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getOneQuestion ({ commit }, payload) {
      axios.get(`http://localhost:3000/api/questions/${payload.questID}`)
      .then(({ data }) => {
        commit('setOneQuestion', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    postQuestion ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/questions/`, {
        title: 'ini contoh title',
        content: 'ini contoh content',
        author: this.$store.state.loggedIn.userID
      })
      .then(({data}) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    postAnswer ({ dispatch }, payload) {
      axios.post(`http://localhost:3000/api/answers/`, {
        author: 1,
        content: 'post baru lagi dari yang paling baruu',
        question_id: 4
      })
      .then(({ data }) => {
        dispatch('getOneQuestion', {
          questID: payload.questID
        })
      })
      .catch(err => console.log(err))
    },
    register ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/users/`, {
        email: 'ini contoh email',
        name: 'nama',
        username: 'ini username',
        password: 'ini password'
      })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})

export default store
