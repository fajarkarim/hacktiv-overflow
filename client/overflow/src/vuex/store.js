
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    usersQuestions: []
  },
  mutations: {
    setUsersQuestions (state, payload) {
      state.usersQuestions = payload
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
    }
  }
})

export default store
