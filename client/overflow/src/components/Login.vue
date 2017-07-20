<template>
  <div class="container">
    <div class="row">
      <b-card
        class="mb-2"
        title="Login"
        sub-title=""
        show-footer
      >
      <b-form-fieldset
      description="Let us know your full name."
      label="Enter your name"
      :feedback="feedback"
      :state="state"
      :label-cols="3"
      >
      <b-form-input v-model="name" :state="state"></b-form-input>
    </b-form-fieldset>
    <b-form-fieldset
    description="min 4 character"
    label="Enter your password"
    :feedback="feedback"
    :state="state"
    :label-cols="3"
    >
    <b-form-input type="password" v-model="name" :state="state"></b-form-input>
  </b-form-fieldset>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    feedback () {
      return this.name.length ? '' : 'Please enter something'
    },
    state () {
      return this.name.length >= 4 ? 'success' : 'warning'
    }
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>
