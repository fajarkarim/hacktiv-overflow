<template lang="html">
  <div class="container pt-4">
    <div class="row">
      <div class="col-9">
        <div class="card">
          <div class="card-block">
            <h3 class="card-title">{{oneQuestion.title}}</h3>
            <hr>
            <p class="card-text">{{oneQuestion.content}}</p>
          </div>
        </div>
        <div class="">
          <h4 class="pt-3"> {{ oneQuestion.Answers.length }} Answers {{ oneQuestion.QuestionVotes.length }} votes</h4>
          <hr class="separator">
        </div>
        <div class="card mt-4">
          <div v-for="answer in oneQuestion.Answers" class="card-block">
            <p class="card-text">{{answer.content}}</p>
            <p class="text-right">oleh: {{ answer.User.name }}</p>
            <hr>
          </div>
        </div>
        <div class="">
          <button @click="postAnswer" type="button" name="button">post answer dummy</button>
          <button @click="getOneQuestion" type="button" name="button">get answer dummy</button>
        </div>
      </div>
      <Sidebar class="col"></Sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Sidebar
  },
  props: ['questid'],
  name: 'QuestionDetail',
  data () {
    return {
      msg: 'jajaja'
    }
  },
  computed: {
    oneQuestion () {
      return this.$store.state.oneQuestion
    }
  },
  methods: {
    getOneQuestion () {
      this.$store.dispatch('getOneQuestion', {
        questID: this.questid
      })
    },
    postAnswer () {
      this.$store.dispatch('postAnswer', {
        questID: this.questid
      })
    }
  },
  created () {
    this.getOneQuestion()
  }
}
</script>

<style lang="css">
hr.separator {
	border-top: 3px double #8c8b8b;
}
</style>
