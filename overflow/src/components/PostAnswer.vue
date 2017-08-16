<template lang="html">
  <div class="card border-success mt-5 mb-5">
    <div class="card-block">
      <div class="form-group">
        <label for="examplePost">Post Answer</label>
        <textarea v-model="answerContent" class="form-control" rows="6"></textarea>
      </div>
      <button @click="postAnswer" class="float-right btn btn-primary" type="button" name="button">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAnswer',
  props: ['questid'],
  data () {
    return {
      answerContent: ''
    }
  },
  methods: {
    postAnswer () {
      this.$store.dispatch('postAnswer', {
        questID: this.questid,
        content: this.answerContent
      })
    }
  }
}
</script>

<style lang="css">
</style>
