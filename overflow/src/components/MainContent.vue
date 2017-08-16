<template lang="html">
  <div>
    <router-link @click="postQuestion" class="btn btn-primary btn-outline-primary mb-3 float-right" to="/ask">Ask Question</router-link> 
    <b-card
    variant="outline-success"
    class="col">
      <QuestionSummary
      class="card-text"
      v-for="question in questions"
      :key="question._id"
      :question="question">
      </QuestionSummary>
    </b-card>
  </div>
</template>

<script>
import QuestionSummary from '@/components/QuestionSummary'
export default {
  name: 'MainContent',
  components: {
    QuestionSummary
  },
  data () {
    return {
      questionContent: ''
    }
  },
  computed: {
    usersQuestions () {
      return this.$store.state.usersQuestions
    },
    questions () {
      return this.$store.state.questions
    }
  },
  methods: {
    getUsersQuestions: function () {
      this.$store.dispatch('getUsersQuestions')
    },
    getQuestions: function () {
      this.$store.dispatch('getQuestions')
    },
    postQuestion: function () {
      this.$store.dispatch('postQuestion')
    }
  },
  mounted () {
    this.getQuestions()
  }
}
</script>

<style lang="css">
</style>
