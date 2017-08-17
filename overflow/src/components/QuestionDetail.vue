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
                <h3>0</h3>
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
              <h4 class="pt-3"> {{ oneQuestion.Answers.length }} Answers {{ oneQuestion.QuestionVotes.length }} votes</h4>
              <hr class="separator">
            </div>
          </div>
        </div>
        <!-- question content -->

        <div v-for="answer in oneQuestion.Answers" class="row">
            <div class="col-1">
              <div class="row pt-4">
                <div class="col-12">
                  <i class="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
                </div>
                <div class="col-12 pl-3 pt-1">
                  <h3>0</h3>
                </div>
                <div class="col-12">
                  <i class="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mt-4 ">
                <div class="card-block">
                  <p class="card-text">{{answer.content}}</p>
                  <p class="text-right">oleh: {{ answer.User.name }}</p>
                  <hr>
                </div>
              </div>
            </div>
        </div>
        <!-- answers content  -->

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
export default {
  components: {
    Sidebar,
    PostAnswer
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
    postQVote (val) {
      this.$store.dispatch('postQVote', {
        type: val,
        questionID: this.questid
      })
    },
    updateQVote (val, qvid) {
      this.$store.dispatch('updateQVote', {
        type: val,
        qvID: qvid,
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
            console.log(`------ masuk not found`)
            this.postQVote(val)
          } else {
            console.log('masuk found')
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
