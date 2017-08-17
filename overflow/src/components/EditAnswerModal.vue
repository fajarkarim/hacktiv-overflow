<template>
<div>
  <!-- Modal Component -->
  <b-modal id="editAnswer" title="Edit Answer" @ok="lala">

    <b-form-fieldset
        label="Answer">
      <textarea v-model="answer" class="form-control" name="name" rows="8" cols="80"></textarea>
    </b-form-fieldset>

  </b-modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      content: 'sss'
    }
  },
  computed: {
    answer () {
      return this.$store.state.storeAnswer
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
