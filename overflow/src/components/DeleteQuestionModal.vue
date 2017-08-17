<template>
<div>
  <!-- Modal Component -->
  <b-modal id="modal1" title="Attention !" @ok="deleteQuestion">

    <p>Are you sure want to delete '{{ question.title }}' ?</p>

  </b-modal>
</div>
</template>

<script>
export default {
  props: ['question'],
  methods: {
    deleteQuestion () {
      this.$store.dispatch('deleteQuestion', {
        questID: this.question.id
      })
      this.$router.push('/')
    }
  }
}
</script>

<!-- modal.vue -->
