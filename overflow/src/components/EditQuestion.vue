<template lang="html">
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col">
        <div class="card">
          <div class="card-block">
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input v-model="title" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <textarea v-model="content" class="form-control" name="name" rows="8" cols="80"></textarea>
            </div>
            <button @click="updateQuestion" class="btn btn-primary float-right" type="button" name="button">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditQuestion',
  props: ['questid'],
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    getQuestion () {
      this.$http.get(`/questions/${this.questid}`)
      .then(({ data }) => {
        this.title = data.title
        this.content = data.content
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateQuestion () {
      this.$http.put(`/questions/${this.questid}`, {
        title: this.title,
        content: this.content
      }, {
        headers: {
          token: localStorage.getItem('overflowToken')
        }
      })
      this.$router.push('/')
    }
  },
  created () {
    this.getQuestion()
  }
}
</script>

<style lang="css">
</style>
