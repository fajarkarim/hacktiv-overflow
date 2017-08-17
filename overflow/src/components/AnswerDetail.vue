<template lang="html">
  <div class="row">
      <div class="col-1">
        <div class="row pt-4">
          <div @click="AVote('up', answer)" class="col-12">
            <i class="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
          </div>
          <div class="col-12 pl-3 pt-1">
            <h3>{{ totalAVotes }}</h3>
          </div>
          <div @click="AVote('down', answer)" class="col-12">
            <i class="fa fa-arrow-down fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <!-- answer votes -->

      <div class="col">
        <div class="card mt-4 ">
          <div class="card-block">
            <template>
              <b-btn v-b-modal.editAnswer @click="storeAnswer(answer)" class="float-right" variant="link"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></b-btn>
              <i class="fa fa-trash float-right pl-2" aria-hidden="true"></i>
              <i class="fa fa-pencil float-right" aria-hidden="true"></i>
            </template>
            <p class="card-text">{{answer.content}}</p>
            <p class="text-right">oleh: {{ answer.User.name }}</p>
            <hr>
          </div>
        </div>
      </div>
      <!-- answer content -->

  </div>
</template>

<script>
export default {
  name: 'AnswerDetail',
  props: ['answer', 'questid'],
  computed: {
    upAVotes () {
      return this.answer.AnswerVotes.filter(ans => ans.type === 'up')
    },
    downAVotes () {
      return this.answer.AnswerVotes.filter(ans => ans.type === 'down')
    },
    totalAVotes () {
      return this.upAVotes.length - this.downAVotes.length
    }
  },
  methods: {
    storeAnswer (answer) {
      console.log(answer.content)
      this.$store.commit('setStoreAnswer', answer.content)
    },
    postAVote (val, answerID) {
      this.$store.dispatch('postAVote', {
        type: val,
        answerID: answerID,
        questionID: this.questid
      })
    },
    updateAVote (val, avID) {
      this.$store.dispatch('updateAVote', {
        type: val,
        avID: avID,
        questionID: this.questid
      })
    },
    AVote (val, answer) {
      this.$http.get('/users/info', {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      .then(({ data }) => {
        let aVotes = answer.AnswerVotes
        let voterID = data.id
        if (aVotes.length === 0) {
          this.postAVote(val, answer.id)
        } else {
          let found = aVotes.find(av => av.voter === voterID)
          if (found === undefined) {
            this.postAVote(val, answer.id)
          } else {
            this.updateAVote(val, found.id)
          }
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
