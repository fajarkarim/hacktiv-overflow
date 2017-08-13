<template lang="html">
  <div>
    <b-card
    variant="outline-success"
    class="col">
      <QuestionSummary
      :usersQuestions="usersQuestions">
      </QuestionSummary>
      <button @click="getUsersQuestions" type="button" name="button">tes get users question</button>
      <button @click="getQuestions" type="button" name="button">tes get question</button>
    </b-card>
  </div>
</template>

<script>
import QuestionSummary from '@/components/QuestionSummary'
export default {
  components: {
    QuestionSummary
  },
  computed: {
    usersQuestions () {
      return this.$store.state.usersQuestions
    }
  },
  methods: {
    getUsersQuestions: function () {
      this.$store.dispatch('getUsersQuestions')
    },
    getQuestions: function () {
      this.$store.dispatch('getQuestions')
    }
  }
}
</script>

<style lang="css">
</style>
