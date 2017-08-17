<template>
<div>
  <!-- Modal Component -->
  <b-modal id="editAnswer" title="Edit Answer" @ok="lala">

    <b-form-fieldset
        label="Answer">
      <textarea v-model="content" class="form-control" name="name" rows="8" cols="80"></textarea>
    </b-form-fieldset>

  </b-modal>
</div>
</template>

<script>
export default {
  props: ['answer'],
  data () {
    return {
      content: this.answer.content
    }
  },
  methods: {
    editAnswer () {
      this.$store.dispatch('editAnswer', {
        questID: this.answer.id
      })
      this.$router.push('/')
    },
    lala () {
      console.log(`lalala`)
    }
  }
}
</script>

<!-- modal.vue -->
