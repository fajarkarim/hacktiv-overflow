<template>
  <div class="container" id="login">
    <div class="row">
        <b-card
          class="col-md-5 offset-3"
          title="Register"
          sub-title=""
          show-footer
        >
        <b-form-fieldset
          description=""
          label="Name"
          :feedback="nameNotif"
          :state="checkName"
          :label-cols="3"
          >
          <b-form-input v-model="form.name" :state="checkName"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset
          description=""
          label="Username"
          :feedback="userNotif"
          :state="checkUser"
          :label-cols="3"
          >
          <b-form-input v-model="form.username" :state="checkUser"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset
          description=""
          label="Email"
          :feedback="emailNotif"
          :state="checkEmail"
          :label-cols="3"
          >
          <b-form-input v-model="form.email" :state="checkEmail"></b-form-input>
        </b-form-fieldset>
        <b-form-fieldset
          label="Password"
          :feedback="passNotif"
          :state="checkPass"
          :label-cols="3"
          >
          <b-form-input type="password" v-model="form.password" :state="checkPass"></b-form-input>
        </b-form-fieldset>
      <b-button variant="primary" @click="doRegister">Submit</b-button>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    nameNotif () {
      return this.form.email.length ? '' : 'enter your name'
    },
    userNotif () {
      return this.form.email.length ? '' : 'enter your username'
    },
    emailNotif () {
      return this.form.email.length ? '' : 'enter your email'
    },
    passNotif () {
      return this.form.password.length ? '' : 'enter your password'
    },
    checkName () {
      return this.form.name.length >= 4 ? 'success' : 'warning'
    },
    checkUser () {
      return this.form.username.length >= 4 ? 'success' : 'warning'
    },
    checkEmail () {
      var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      let isEmail = re.test(this.form.email)
      return isEmail ? 'success' : 'warning'
    },
    checkPass () {
      return this.form.password.length >= 4 ? 'success' : 'warning'
    }
  },
  data () {
    return {
      form: {
        name: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    doRegister: function () {
      this.$store.dispatch('doRegister', this.form)
    }
  }
}
</script>

<style media="screen" scoped>
#login {
  padding-top: 50px;
  padding-bottom: 190px;
}
</style>
