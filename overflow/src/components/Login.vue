<template>
  <div class="container" id="login">
    <div class="row">
        <b-card
          class="col-md-4 offset-4"
          title="Login"
          sub-title=""
          show-footer
        >
        <b-form-fieldset
        description=""
        label="Email"
        :feedback="userNotif"
        :state="checkEmail"
        :label-cols="3"
        >
        <b-form-input v-model="email" :state="checkEmail"></b-form-input>
      </b-form-fieldset>
      <b-form-fieldset
        description="min 4 character"
        label="Password"
        :feedback="passNotif"
        :state="checkPass"
        :label-cols="3"
        >
        <b-form-input type="password" v-model="password" :state="checkPass"></b-form-input>
      </b-form-fieldset>
      <b-button variant="primary" @click="doLogin">Submit</b-button>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userNotif () {
      return this.email.length ? '' : 'enter your email'
    },
    passNotif () {
      return this.password.length ? '' : 'enter your password'
    },
    checkEmail () {
      var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      let isEmail = re.test(this.email)
      return isEmail ? 'success' : 'warning'
    },
    checkPass () {
      return this.password.length >= 4 ? 'success' : 'warning'
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      this.$store.dispatch('doLogin', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>

<style media="screen" scoped>
#login {
  padding-top: 100px;
  padding-bottom: 190px;
}
</style>
