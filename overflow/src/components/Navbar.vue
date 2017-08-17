<template lang="html">
  <b-navbar toggleable type="light" variant="info" toggle-breakpoint="md">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <div class="container">
      <b-nav is-nav-bar>
        <b-nav-item to="/">HacktivOver</b-nav-item>
      </b-nav>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item to="/">Questions</b-nav-item>
        </b-nav>

        <!-- Right alignd nav items -->
        <b-nav is-nav-bar class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em><i class="fa fa-user fa-lg" aria-hidden="true"></i></em>
            </template>
            <template v-if="loginStatus">
              <b-dropdown-header >Halo, {{ loginName }}</b-dropdown-header>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item to="/dashboard">Dasboard</b-dropdown-item>
              <b-dropdown-item @click="doLogout">Logout</b-dropdown-item>
            </template>
            <template v-else>
              <b-dropdown-header>You're not login</b-dropdown-header>
              <b-dropdown-item to="/login">Login</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item to="/register">Register</b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
        </b-nav>

      </b-collapse>

    </div>
  </b-navbar>

</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    loginStatus () {
      return this.$store.state.login.status
    },
    loginUserID () {
      return this.$store.state.login.userID
    },
    loginName () {
      return this.$store.state.login.name
    }
  },
  methods: {
    doLogout () {
      localStorage.removeItem('overflowToken')
      this.$store.commit('doLogout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
