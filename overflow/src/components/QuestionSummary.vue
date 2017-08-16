<template lang="html">
  <div class="row">
    <div class="col-1" id="votesCount">
      <div class="row">
        <div class="col-12">
          <p class="text-center mb-0">{{ question.QuestionVotes.length }}</p>
          <small>Votes</small>
        </div>
      </div>
    </div>
    <div class="col-1" id="answersCount">
      <div class="row">
        <div class="col-12">
          <p class="text-center mb-0">{{ question.Answers.length }}</p>
          <small>Answers</small>
        </div>
      </div>
    </div>
    <div class="col">
      <span><router-link :to="/questions/ + question.id">{{ question.title }}</router-link>
        <br>
      </span class="text-right"><small>posted by {{ question.User.name }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question']
}
</script>

<style lang="css">
</style>
