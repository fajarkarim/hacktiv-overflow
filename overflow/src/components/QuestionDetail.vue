<template lang="html">
  <div class="container pt-4">
    <div class="row">
      <div class="col-9">
        <div class="row">

          <div class="col-1">
            <div class="row pt-4">
              <div @click="QVote('up')" class="col-12">
                <i class="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
              </div>
              <div class="col-12 pl-3 pt-1">
                <h3>{{ totalQVotes }}</h3>
              </div>
              <div @click="QVote('down')" class="col-12">
                <i class="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <!-- question votes -->

          <div class="col">
            <div class="card">
              <div class="card-block">
                <h3 class="card-title">{{oneQuestion.title}}</h3>
                <small>posted by {{ oneQuestion.User.name }}</small>
                <hr>
                <p class="card-text">{{oneQuestion.content}}</p>
              </div>
            </div>
            <div class="">
              <h4 class="pt-3"> {{ oneQuestion.Answers.length }} Answers</h4>
              <hr class="separator">
            </div>
          </div>
        </div>
        <!-- question content -->
        <AnswerDetail
          v-for="answer in oneQuestion.Answers"
          :answer="answer"
          :questid="questid"
          :key="answer.id">
        </AnswerDetail>

        <!-- answers -->

        <PostAnswer :questid="questid"/>
        <!-- post answer box -->
      </div>
      <Sidebar class="col"></Sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import PostAnswer from '@/components/PostAnswer'
import AnswerDetail from '@/components/AnswerDetail'
export default {
  components: {
    Sidebar,
    PostAnswer,
    AnswerDetail
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
    },
    upQVotes () {
      return this.oneQuestion.QuestionVotes.filter(qv => qv.type === 'up')
    },
    downQVotes () {
      return this.oneQuestion.QuestionVotes.filter(qv => qv.type === 'down')
    },
    totalQVotes () {
      return this.upQVotes.length - this.downQVotes.length
    }
  },
  methods: {
    getOneQuestion () {
      this.$store.dispatch('getOneQuestion', {
        questID: this.questid
      })
    },
    postQVote (val) {
      this.$store.dispatch('postQVote', {
        type: val,
        questionID: this.questid
      })
    },
    updateQVote (val, qvID) {
      this.$store.dispatch('updateQVote', {
        type: val,
        qvID: qvID,
        questionID: this.questid
      })
    },
    QVote (val) {
      this.$http.get('/users/info', {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(({data}) => {
        let qVotes = this.oneQuestion.QuestionVotes
        if (qVotes.length === 0) {
          this.postQVote(val)
        } else {
          let found = qVotes.find(qv => qv.voter === data.id)
          if (found === undefined) {
            this.postQVote(val)
          } else {
            this.updateQVote(val, found.id)
          }
        }
      })
      .catch(err => console.log(err))
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
