<template lang="html">
  <ul>
    <li v-for="item in usersQuestions">
      {{ item.name }}
      <div v-for="q in item.Questions">
        <div class="">
          {{ q.id }}
        </div>
        <div class="">
          {{ q.content }}
        </div>
      </div>
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
