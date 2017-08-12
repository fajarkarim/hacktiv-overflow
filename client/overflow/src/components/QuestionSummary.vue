<template lang="html">
  <ul>
    <li v-for="item in usersQuestions">
      {{ item.name }}
      <div v-for="q in item.Questions"> {{ q.content }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['usersQuestions']
}
</script>

<style lang="css">
</style>
