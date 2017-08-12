<template>
  <div class="container pt-4">
    <div class="row">
      <MainContent class="col-9"></MainContent>
      <Sidebar class="col"></Sidebar>
    </div>
  </div>
</template>

<script>
import MainContent from '@/components/MainContent'
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    MainContent,
    Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
