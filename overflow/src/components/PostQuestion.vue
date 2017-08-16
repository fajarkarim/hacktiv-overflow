<template lang="html">
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col">
        <div class="card">
          <div class="card-block">
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input v-model="title" type="text" class="form-control" placeholder="title question..">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <textarea v-model="content" class="form-control" name="name" rows="8" cols="80" placeholder="your question description here..."></textarea>
            </div>
            <button @click="postQuestion" class="btn btn-primary float-right" type="button" name="button">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostQuestion',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    postQuestion () {
      this.$store.dispatch('postQuestion', {
        title: this.title,
        content: this.content
      })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
